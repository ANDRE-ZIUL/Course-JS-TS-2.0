exports.paginaInicial = (req, res) => {
    res.send(
        `<form action="/" method="POST">
        Nome: <input type="text" name="nome" placeholder="Digite seu nome...">
        Sobrenome: <input type="text" name="sobrenome" placeholder="Digite seu sobrenome...">
        <button>Enviar formulário</button>
        </form>`
    );
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST');
};