const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

// No computador lê os dados do arquivo .env; na Vercel eles vêm das variáveis de ambiente
const arquivoEnv = path.join(__dirname, ".env");
if (fs.existsSync(arquivoEnv)) {
    process.loadEnvFile(arquivoEnv);
}

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: 3306,
        dialect: "mysql",
        dialectModule: require("mysql2")
    }
);

module.exports = sequelize;
