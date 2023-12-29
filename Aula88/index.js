function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('Cai no erro');
            return;
        } 

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}

const promises = ['Primeiro valor', esperaAi('Promise 1', 3000), esperaAi('Promise 2', 500), esperaAi('Promise 3', 1000), 'Outro valor'];

///Promise.all
Promise.all(promises).then(function(valor){
    console.log(valor);
}).catch((err) => {
    console.log(err);
});

///Promise.race
Promise.race(promises).then(function(valor){
    console.log(valor);
}).catch((err) => {
    console.log(err);
});

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    }else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log('ERRO'));