const express = require('express');
const app = express();
const routes = require('./routes')

//Configurando o express para aceitar query de parametros na url
app.use(express.urlencoded({ extended: true }));

//Configurando o arquivo de rotas para ser utilizado pelo express
app.use(routes);

//Startando o servidor de acordo com a porta
app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});