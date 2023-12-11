const express = require('express') // Aqui estamos importando a biblioteca express
const app = express() // Aqui estamos 
const port = 3000 // definimos a porta que será usada para rodar o servidor

app.get('/', (req, res) => { //em app.get estamos definindo o tipo da requisição. Na / vazia assim, é usado a rota primária, se quiséssemos passar a informação para rodar localmente, precisaríamos passar a informação de LOCALHOST
  res.send('Olá, essa é a aplicação Wallet APP!')
})

app.listen(port, () => { //Aqui, estamos dizendo que o servidor irá ficar escutando na porta 3000 que definimos inicialmente lá em cima.
  console.log(`Example app listening on port ${port}`)
})