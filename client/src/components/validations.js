const validate = (inputs) => {
  const imgRegex =
    /(?:(?:https?:\/\/))[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b(?:[-a-zA-Z0-9@:%_+.~#?&/=]*(\.jpg|\.png|\.jpeg|\.gif))/g;
  const imgTypeRegex = /[.](jpeg)|(jpg)|(gif)|(png)$/;
  const specialCharactresTypeRegex = /[0-9@:%._+~#=]/gi;
  const errors = {};

  if (!inputs.name || specialCharactresTypeRegex.test(inputs.name)) {
    errors.name = "Debes ingresar un nombre valido para la receta.";
  }
  if (
    !inputs.healthScore ||
    inputs.healthScore < 0 ||
    inputs.healthScore > 100
  ) {
    errors.healthScore =
      "Debes ingresar un puntaje entre 0 y 100 para la receta.";
  }
  if (!inputs.dietId || !inputs.dietId.length)
    errors.dietId = "Debes seleccionar un tipo de dieta como minimo";

  if (!inputs.dishTypes)
    errors.dishTypes = "Debes seleccionar un tipo de plato como minimo";

  if (!inputs.summary)
    errors.summary = "Debes escribir un resumen de la receta";

  if (!inputs.steps) errors.steps = "Debes escribir los pasos de la receta";

  if (!inputs.image) errors.image = "Debes introducir una url para la imagen";
  if (!imgTypeRegex.test(inputs.image))
    errors.image =
      "Solo son validas las imagenes en formato jpeg,jpg,gif y png.";
  else if (!imgRegex.test(inputs.image))
    errors.image = "La url de la imagen no es valida";
  return errors;
};
export default validate;
