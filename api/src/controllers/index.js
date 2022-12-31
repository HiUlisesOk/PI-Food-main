/// =========================================================================== ///
/// =============================== CONTROLLERS ================================ ///
/// =========================================================================== ///
const { Diet, Recipe, RecipesDiet } = require("../db");
const getApiInfo = require("../routes/searchApi");
const specialCharactresTypeRegex = /[0-9@:%._+~#=]/gi;
const { Op } = require("sequelize");
/// <=============== controller getAllRecipes ===============>
async function searchRecipesInApiAndDB() {
  // Guardamos los datos de la API en data
  let data = await getApiInfo();
  //Si la funcion no recibe nada, devuelve un error.
  if (!Recipe) throw new Error("No hay recetas");
  return data;
}

/// <=============== controller ID ===============>
async function getRecipeById(id) {
  //Si no recibe un parametro id retorna un error
  if (!id) throw new Error("Debe ingresar un id");

  //cargamos los datos de la api en la db
  let data = await getApiInfo();
  // asignamos todo lo de la base de datos a la variable data
  data = await Recipe.findAll({ include: Diet });
  if (!data) throw new Error("Error en la API");

  //buscamos en la Api una receta que tenga el id que recibimos por parametros
  let findRecipe = data.find((recipe) => {
    return recipe.id === id;
  });

  //Si ninguna coincide, buscamos en la base de datos
  if (!findRecipe) throw new Error("El id ingresado no existe");

  return findRecipe;
}

/// <=============== controller search by Name ===============>
async function searchByName(name) {
  //Validamos los datos ingresados en la busqueda
  if (!name)
    throw new Error("Debe ingresar el nombre de la receta que desea buscar");
  if (specialCharactresTypeRegex.test(name)) {
    throw new Error("Debes ingresar un nombre valido para la receta.");
  }
  // Guardamos los datos de la API en data
  const data = await getApiInfo();

  //Si no recibe info de las recetas devuelve un error
  if (!data) throw new Error("Error en la API");

  //buscamos en la Api una receta que tenga el name que recibimos por parametros
  let findRecipe = data.filter((recipe) =>
    recipe.name.toLowerCase().includes(name.toLowerCase()),
  );

  //Si ninguna coincide, buscamos en la base de datos
  if (!findRecipe.length) throw new Error("No se pudo encontrar la receta");

  return findRecipe;
}
//
/// <=============== POST - CREAR RECETA CONTROLLER ===============>

async function createRecipes(
  name,
  image,
  summary,
  healthScore,
  steps,
  dishTypes,
  dietId,
) {
  //Comprobamos que solo se puedan añadir dietas con los valores correctos
  const AllDiets = await getDiets();
  for (const id of dietId) {
    if (id < 1 || id > AllDiets.length)
      throw new Error("El id de la dieta tiene un valor incorrecto");
  }

  // comprobamos si hay recetas repetidas
  for (let i = 0; i < dietId.length; i++) {
    for (let j = i + 1; j < dietId.length; j++) {
      if (dietId[i] === dietId[j]) throw new Error("Existen dietas repetidas");
    }
  }

  //Si falta algun dato devolvemos un error
  if (
    !name ||
    !image ||
    !summary ||
    !healthScore ||
    !steps ||
    !dietId ||
    !dishTypes
  )
    throw new Error("Faltan datos para crear la receta");
  // console.log(name, image, summary, healthScore, steps, dishTypes, dietId)
  //comprobamos que la tabla de dietas tenga información precargada
  //Si no existe info en la tabla la creamos
  const dietExist = getDiets();
  if (!dietExist) getDiets();

  //Llamamos a la función getApiInfo()
  //para comprobar si la receta ya existe
  // Guardamos los datos de la API en data
  const data = await getApiInfo();

  //Si no recibe info de las recetas devuelve un error
  if (!data) throw new Error("Error en la API");

  //buscamos en la Api una receta que tenga el name que recibimos por parametros
  let recipeExist = data.find((recipe) => recipe.name === name);
  //Si existe devolvemos un error y no creamos la receta
  if (recipeExist) throw new Error("La receta ya existe");

  //Si recibimos un string en vez de un numero, lo convertimos.
  if (typeof healthScore === "string") healthScore = Number(healthScore);
  dishTypes = dishTypes.join(", ");
  const [mynewRecipe, created] = await Recipe.findOrCreate({
    where: {
      name: name,
      image: image,
      summary: summary,
      healthScore: healthScore,
      dishTypes: dishTypes,
      steps: steps,
    },
  });

  mynewRecipe.addDiet(dietId);
  return mynewRecipe;
}
/// <=============== DELETE RECIPE controller ===============>
async function deleteMyRecipe(id) {
  const result = Recipe.findAll({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
  await Recipe.destroy({
    where: {
      id: id,
    },
  });

  return result;
}
/// <=============== diets controller ===============>
async function getDiets() {
  //Creamos un array con todas las dietas posibles
  const AllDiets = [
    "gluten free",
    "ketogenic",
    "vegetarian",
    "lacto ovo vegetarian",
    "ovo-vegetarian",
    "vegan",
    "pescatarian",
    "paleolithic",
    "primal",
    "low fodmap",
    "whole 30",
    "dairy free",
  ];

  //iteramos sobre cada valor del array
  //Utilizamos findOrCreate
  //Este método nos posibilita buscar
  //cualquier instancia que cumpla la condición que nosotros digamos
  // y, en el caso de que esta instancia no exista, la creará.

  for (let diet of AllDiets) {
    const [instance, created] = await Diet.findOrCreate({
      where: { name: diet },
    });
  }

  //Luego llamamos al metodo findAll en Diet
  //Para guardar todas las dietas de la base de datos en allDiets
  const allDiets = await Diet.findAll();

  //Retornamos todas las dietas
  return allDiets;
}

module.exports = {
  searchRecipesInApiAndDB,
  getRecipeById,
  searchByName,
  getDiets,
  createRecipes,
  deleteMyRecipe,
};
