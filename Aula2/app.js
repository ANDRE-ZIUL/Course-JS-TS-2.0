const multiplicacao = require('./mod');
const Cachorro = require('./mod');

// console.log(multiplicacao(2, 5))

const cachorrinho = new Cachorro('Pedritinha');
cachorrinho.latir();

const path = require('path');
console.log(path.resolve(__dirname))