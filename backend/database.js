const { Sequelize } = require("sequelize");

// Lê os dados de acesso do arquivo .env (fica fora do GitHub)
process.loadEnvFile();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: 3306,
        dialect: "mysql"
    }
);

module.exports = sequelize;
