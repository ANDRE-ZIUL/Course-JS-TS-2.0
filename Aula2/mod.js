module.exports = function(x, y) {
    return x * y;
};

module.exports = class Cachorro {
    latir() {
        console.log(`${this.nome} está latindo AU AU`);
    }
    
    constructor(nome) {
        this.nome = nome;
    }
}