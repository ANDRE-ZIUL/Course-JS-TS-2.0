const nome = 'André';
const sobrenome = 'Dias';

const falaNome = () => nome + ' ' + sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

class Pessoa{
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;