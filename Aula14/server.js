//Importando a biblioteca dotenv para configurar variaveis de ambiente
require('dotenv').config();

//Importando a biblioteca express
const express = require('express');

//Setando o express em uma variavel app
const app = express();

//Importando a biblioteca mongoose do banco de dados MongoBD
const mongoose = require('mongoose');

//Conectando ao database utilizando a ConnectionString configurada no .env
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('Conectei a base de dados');
    app.emit('Pronto');
}).catch(e => console.log(e));

const routes = require('./routes')
const path = require('path');
const { middlewareGlobal } = require('./src/middleware/middleware')

//Configurando o express para aceitar query de parametros na url
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(middlewareGlobal);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Configurando o arquivo de rotas para ser utilizado pelo express
app.use(routes);

//Startando a conexão do site somente depois do banco de dados conectar
app.on('Pronto', () => {
    //Startando o servidor de acordo com a porta
    app.listen(3000, () => {
        console.log('Rodando na porta 3000');
    });
});
