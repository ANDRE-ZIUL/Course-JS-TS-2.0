exports.middlewareGlobal = (req, res, next) => {
    if(req.body.nome){
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`);
        console.log();
    }
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