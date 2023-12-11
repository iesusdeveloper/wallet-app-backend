const {Pool} = require("pg")

const db = new Pool({
  user: "docker",
  password: "docker",
  database: "finances",
  host: "localhost",
  port: 5433,
})

module.exports = db; // Aqui estamos fazendo o apontamento do banco, para o module exports, onde assim permitirá que usemos ele no nosso index.js