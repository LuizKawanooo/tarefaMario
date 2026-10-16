const Categoria = require("../models/Categoria");

async function listar(req, res) {
    const dados = await Categoria.findAll();
    res.json(dados);
}

async function cadastrar(req, res) {
    await Categoria.create(req.body);
    res.send("Categoria cadastrada");
}

async function alterar(req, res) {
    await Categoria.update(req.body, {
        where: { id: req.params.id }
    });

    res.send("Categoria alterada");
}

async function excluir(req, res) {
    await Categoria.destroy({
        where: { id: req.params.id }
    });

    res.send("Categoria excluída");
}

module.exports = {
    listar,
    cadastrar,
    alterar,
    excluir
};
