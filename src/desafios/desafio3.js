let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = "0"

function somarAoSaldo(soma: string) {
  let valorAtual = parseInt(campoSaldo.innerHTML) + parseInt(soma);
  campoSaldo.innerHTML = valorAtual.toString()
}

function limparSaldo() {
    campoSaldo.innerHTML = "";
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
