const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];
const descricao = [];
const imgConfirmado = '<img src="./images/confirmado.png" alt="Emoji confirmado" />';
const imgNaoConfirmado = '<img src="./images/errado.png" alt="Emoji errado" />';
let totalReunioes = 0;
let reunioesConfirmadas = 0;
const inputConfirmado = document.getElementById('confirmado');
const inputNomeContato = document.getElementById('nome-contato');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputTelefone = document.getElementById('telefone');
    const inputDescricao = document.getElementById('descricao');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido na agenda`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelefone.value);
        descricao.push(inputDescricao.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td>${inputDescricao.value}</td>`;
        linha += `<td>${inputConfirmado.checked ? imgConfirmado : imgNaoConfirmado}</td>`;
        linha += '</tr>';

        linhas += linha;

        atualizaTotalConfirmacoes();
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
    inputDescricao.value = '';
    inputConfirmado.checked = false;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalConfirmacoes() {

    totalReunioes++;
    reunioesConfirmadas += inputConfirmado.checked ? 1 : 0;

    document.getElementById('total-confirmacoes').innerHTML = `${reunioesConfirmadas} / ${totalReunioes}`;
}