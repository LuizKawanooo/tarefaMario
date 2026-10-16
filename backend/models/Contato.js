const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Contato = sequelize.define("Contato", {
    nome: DataTypes.STRING,
    mensagem: DataTypes.STRING
}, {
    tableName: "contato",
    timestamps: false
});

module.exports = Contato;
