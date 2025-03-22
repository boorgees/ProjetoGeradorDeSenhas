const qtdNumeros = document.getElementById('qtdNumeros')
const visorSenha = document.getElementById('visorSenha')
const buttonGerar = document.getElementById('buttonGerar')
const buttonCopiar = document.getElementById('buttonCopiar')

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'

function gerarSenha(tamanho) {
    if (tamanho < 4) {
        alert('A senha precisa ter pelo menos 4 caracteres!');
        return '';
    }

    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    return senha;
}

function buttonGerarClick() {
    const tamanho = parseInt(qtdNumeros.value);
    if (!tamanho || tamanho <= 0) {
        alert('Por favor, insira um número válido maior que 0');
        return;
    }
    visorSenha.value = gerarSenha(tamanho);
}

function buttonCopiarClick() {
    navigator.clipboard.writeText(visorSenha.value);
    const labelCopiar = document.querySelector('.labelCopiar');
    labelCopiar.style.display = 'block';    
    setTimeout(() => {
        labelCopiar.style.display = 'none';
    }, 3000);    
}

buttonGerar.addEventListener('click', buttonGerarClick);
buttonCopiar.addEventListener('click', buttonCopiarClick);