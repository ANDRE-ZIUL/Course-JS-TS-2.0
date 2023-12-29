import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = querySelector('.qtd-caracteres');
const chkMaiusculas = querySelector('.chk-maiusculas');
const chkMinusculas = querySelector('.chk-minusculas');
const chkNumeros = querySelector('.chk-numeros');
const chkSimbolos = querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha')


export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    )
    return senha || 'Nada selecionado';
}