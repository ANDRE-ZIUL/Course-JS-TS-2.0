const path = require('path');
const axios = require('axios');

const mod1 = require('./mod1');
const falaNome = mod1.falaNome;
console.log(falaNome());

//Desestruturação
const { nome, sobrenome } = require('./mod1');
console.log(nome, sobrenome);

//Desestruturação
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('André');
console.log(p1.nome);

axios('https://www.praticabr.com')
.then(response => console.log(response.data))
.catch(e => console.log(e));