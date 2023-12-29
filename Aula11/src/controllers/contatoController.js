exports.paginaInicial = (req, res) => {
    res.send(
        `
            <h1>Contato</h1>
            <form action="/" method="POST">
                <ul>
                    <li>Telefone 35984332720</li>
                    <li>Telefone 35984332720</li>
                    <li>Telefone 35984332720</li>
                    <li>Telefone 35984332720</li>
                    <li>Telefone 35984332720</li>
                </ul>
            </form>
        `
    );
}