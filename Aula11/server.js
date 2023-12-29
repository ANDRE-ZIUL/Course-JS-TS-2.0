const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

//Configurando o express para aceitar query de parametros na url
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Configurando o arquivo de rotas para ser utilizado pelo express
app.use(routes);

//Startando o servidor de acordo com a porta
app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});