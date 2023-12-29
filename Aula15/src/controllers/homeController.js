exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: 'André', logado: true };
    req.flash('info','Olá mundo!');
    req.flash('error','Tchaiano!');
    req.flash('success','Blaaaaaaaaaaa');
    res.render('index');
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    next();
};