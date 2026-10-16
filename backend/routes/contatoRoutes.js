const express = require("express");
const controller = require("../controllers/contatoController");

const router = express.Router();

router.get("/", controller.listar);
router.post("/", controller.cadastrar);
router.delete("/:id", controller.excluir);

module.exports = router;
