const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://via.placeholder.com/500x500",
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      steps: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "Aún no tenemos los pasos de esta receta",
      },
      dishTypes: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "",
      },
      healthScore: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 50,
      },
    },
    {
      paranoid: true,
    },
  );
};
