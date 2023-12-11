const express = require('express') // Aqui estamos importando a biblioteca express
const db = require("./db") // Aqui estamos chamando o banco de dados

const app = express() // Aqui estamos 
const port = 3000 // definimos a porta que será usada para rodar o servidor

app.get('/', (req, res) => { //em app.get estamos definindo o tipo da requisição. Na / vazia assim, é usado a rota primária, se quiséssemos passar a informação para rodar localmente, precisaríamos passar a informação de LOCALHOST
  res.send('Olá, essa é a aplicação Wallet API!')
})

app.get("/categories",(req,res) =>{
  db.query("select * from categories where id =1",(error,response) => {
    if (error){
      return res.status(500).json(error)
    }

    return res.status(200).json(response.rows)
  })
})

app.listen(port, () => { //Aqui, estamos dizendo que o servidor irá ficar escutando na porta 3000 que definimos inicialmente lá em cima.
  db.connect()
  .then(() => {
    console.log('DB connected')
  })
  .catch(error =>{
    throw new Error(error)
  })
  console.log(`Example app listening on port ${port}`)
})