/// =========================================================================== ///
/// =============================== CONTROLLERS ================================ ///
/// =========================================================================== ///
const { Diet, Recipe, RecipesDiet } = require("../db");
const getApiInfo = require("../routes/searchApi");

/// <=============== controller getAllRecipes ===============>
async function searchRecipesInApiAndDB(Recipe) {
  //Si la funcion no recibe nada, devuelve un error.
  if (!Recipe) throw new Error("No hay recetas");

  // Guardamos los datos de la API en data

  let data = await getApiInfo();

  // Guardamos los datos de la DB en dbdata

  // Juntamos los datos de ambas y los guardamos en allData

  const allData = data;
  return allData;
}

/// <=============== controller ID ===============>
async function getRecipeById(id) {
  //Si no recibe un parametro id retorna un error
  if (!id) throw new Error("Debe ingresar un id");

  //Guardamos en data la info de la api, si no recibimos nada devolvemos un error
  const data = await getApiInfo();
  if (!data) throw new Error("Error en la API");

  //buscamos en la Api una receta que tenga el id que recibimos por parametros
  let findRecipe = data.find((recipe) => {
    return recipe.id === Number(id);
  });

  //Si ninguna coincide, buscamos en la base de datos
  if (!findRecipe) {
    try {
      findRecipe = await Recipe.findOne({ where: { id: id } });
    } catch (error) {
      //Si tampoco encontramos nada respondemos con un error
      throw new Error("El id ingresado no existe");
    }
  }

  return findRecipe;
}

/// <=============== controller search by Name ===============>
async function searchByName(name) {
  //
  // Guardamos los datos de la API en data
  const data = await getApiInfo();

  //Si no recibe info de las recetas devuelve un error
  if (!data) throw new Error("Error en la API");

  //buscamos en la Api una receta que tenga el name que recibimos por parametros
  let findRecipe = data.find((recipe) => recipe.name === name);

  //Si ninguna coincide, buscamos en la base de datos
  if (!findRecipe) {
    try {
      findRecipe = await Recipe.findOne({ where: { name: name } });
    } catch (error) {
      //Si tampoco encontramos nada respondemos con un error
      throw new Error("El id ingresado no existe");
    }
  }
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
      throw new Error("El id de la receta tiene un valor incorrecto");
  }

  // comprobamos si hay recetas repetidas
  for (let i = 0; i < dietId.length; i++) {
    for (let j = i + 1; j < dietId.length; j++) {
      // console.log("valor de i:", dietId[i]);
      // console.log("valor de j:", dietId[j]);
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

  //Llamamos a la función search by name
  //para comprobar si la receta ya existe
  const recipeExist = await searchByName(name);
  //Si existe devolvemos un error y no creamos la receta
  if (recipeExist) throw new Error("La receta ya existe");
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
};
