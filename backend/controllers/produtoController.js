const Produto = require("../models/Produto");
const Categoria = require("../models/Categoria");

async function listar(req, res) {

    // include faz o JOIN com a tabela categoria
    const dados = await Produto.findAll({
        include: Categoria
    });
    res.json(dados);
}

async function cadastrar(req, res) {
    await Produto.create(req.body);
    res.send("Produto cadastrado");
}

async function alterar(req, res) {
    await Produto.update(req.body, {
        where: { id: req.params.id }
    });
    res.send("Produto alterado");
}

async function excluir(req, res) {
    await Produto.destroy({
        where: { id: req.params.id }
    });
    res.send("Produto excluído");
}

module.exports = {
    listar,
    cadastrar,
    alterar,
    excluir
};
