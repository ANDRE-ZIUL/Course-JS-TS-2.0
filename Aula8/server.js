const express = require('express');
const app = express();
app.use(
    express.urlencoded(
        {extended: true}
    )
)
//http://facebook.com/profiles/5

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome" placeholder="Digite seu nome...">
    <button>Enviar formulário</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})

app.get('/testes/:id?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});