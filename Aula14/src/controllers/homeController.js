const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Grand Theft Auto VI',
    descricao: 'Novo GTA lançado pela Rockstar Games em 2025'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo o cliente');
    res.render('index');
    console.log(`Olha o que tem na req.session.nome ${req.session.nome}`);
    next();
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
    next();
};