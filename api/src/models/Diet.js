const { DataTypes } = require("sequelize");
//Exportamos una funcion que define el modelo
//Luefgo le injectamos la conexion a sewquelize

module.exports = (sequelize) => {
  //aqui defino el modelo
  sequelize.define(
    "diet",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
