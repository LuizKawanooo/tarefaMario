const Contato = require("../models/Contato");

async function listar(req, res) {
    const dados = await Contato.findAll();
    res.json(dados);
}

async function cadastrar(req, res) {
    await Contato.create(req.body);
    res.send("Mensagem enviada");
}

async function excluir(req, res) {
    await Contato.destroy({
        where: { id: req.params.id }
    });
    res.send("Mensagem excluída");
}

module.exports = {
    listar,
    cadastrar,
    excluir
};
