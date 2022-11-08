const path       = require("path"),
      dotenvSafe = require("dotenv-safe"),
      cwd        = process.cwd();

dotenvSafe.config({
  path: path.join(cwd, ".env"),
  example: path.join(cwd, ".env.example"),
});

const { env } = process;

const dbConfig = {
  development: {
    username     : process.env.DB_USER ? process.env.DB_USER : "root",
    password     : process.env.DB_PASS ? process.env.DB_PASS : "",
    database     : process.env.DB_NAME ? process.env.DB_NAME : "hypt",
    host         : process.env.DB_HOST ? process.env.DB_HOST : "127.0.0.1",
    dialect      : "postgres",
    seederStorage: "sequelize",
    logging      : console.log,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host    : "127.0.0.1",
    dialect : "postgres",
  },
  production: {
    username     : process.env.DB_USER,
    password     : process.env.DB_PASS,
    database     : process.env.DB_NAME,
    host         : process.env.DB_HOST,
    dialect      : "postgres",
    seederStorage: "sequelize",
  },
};

module.exports = dbConfig[env.NODE_ENV];

