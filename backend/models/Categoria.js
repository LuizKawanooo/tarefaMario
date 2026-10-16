const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Categoria = sequelize.define("Categoria", {

    nome: DataTypes.STRING

}, {
    tableName: "categoria",
    timestamps: false
});

module.exports = Categoria;
