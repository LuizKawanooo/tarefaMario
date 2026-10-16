const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Categoria = require("./Categoria");

const Produto = sequelize.define("Produto", {

    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10,2),
    imagem: DataTypes.STRING,
    categoria_id: DataTypes.INTEGER

}, {
    tableName: "produto",
    timestamps: false
});

// Relacionamento: uma categoria tem muitos produtos
Categoria.hasMany(Produto, {
    foreignKey: "categoria_id"
});

Produto.belongsTo(Categoria, {
    foreignKey: "categoria_id"
});

module.exports = Produto;
