const express = require('express');
const app = express();

//CRUD -> CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE

//http://meusite.com/ <- GET -> Entregue a página /
//http://meusite.com/sobre <- GET -> Entregue a página /sobre
//http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome" placeholder="Digite seu nome...">
    <button>Enviar formulário</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por acessar a pagina de contato');
});

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});