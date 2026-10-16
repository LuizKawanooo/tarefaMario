const express = require("express");
const cors = require("cors");
const sequelize = require("./database");

const produtoRoutes = require("./routes/produtoRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const contatoRoutes = require("./routes/contatoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/produtos", produtoRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/contatos", contatoRoutes);

sequelize.authenticate()
    .then(() => console.log("Conectado ao banco de dados"))
    .catch(erro => console.log("Erro ao conectar no banco:", erro.message));

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
