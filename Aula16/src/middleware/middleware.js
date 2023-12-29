exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local',
    next();
}

exports.outroMiddleware = (req, res, next) => {
    if(req.body.nome){
        console.log();
        console.log(`Sou o outro Middleware`);
        console.log();
    }
    next();
}