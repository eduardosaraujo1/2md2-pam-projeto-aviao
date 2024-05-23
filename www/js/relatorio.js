let pessoasAssentos = {};

// métodos herdados de avião.js
function localstoragePull() {
    // sobreescreve o objeto pessoasAssentos para o que está no localStorage
    const json = localStorage.getItem('pessoasAssentos');
    if (json == null) return;
    pessoasAssentos = JSON.parse(json);
}

// métodos do relatório
function carregarCard(assentoId, preco, nmPassageiro) {
    const html = `

    <table class="relatorio-item">
        <tr>
            <td class="label" id="label-id">Assento</td>
            <td class="dado-assento" id="id-assento"><span>${assentoId}</span></td>
        </tr>
        <tr>
            <td class="label" id="label-preco">Preço</td>
            <td class="dado-assento" id="id-preco"><span>${preco}</span></td>
        </tr>
        <tr>
            <td class="label" id="label-passageiro">Passageiro</td>
            <td class="dado-assento" id="id-passageiro"><span>${nmPassageiro}</span></td>
        </tr>
    </table>
    `;
    const relatorio = document.querySelector('.relatorio');
    relatorio.innerHTML += html;
}

function avisarAviaoVazio() {
    const html = `
        <span class="warning">O avião está vazio...</span>
    `;
    const relatorio = document.querySelector('.relatorio');
    relatorio.innerHTML += html;
}

function carregarCards() {
    for (const assentoId in pessoasAssentos) {
        const preco = formatarValorEmReais(calcularPrecoAssento(assentoId));
        const nmPassageiro = pessoasAssentos[assentoId];
        carregarCard(assentoId, preco, nmPassageiro);
    }

    if (Object.keys(pessoasAssentos).length === 0) {
        avisarAviaoVazio();
    }
}

function atualizarPesquisa(e) {
    const cards = document.querySelectorAll('.relatorio-item');
    const searchQuery = e.currentTarget.value;
    const formatSearchQuery = searchQuery.trim().toLowerCase();

    for (const card of cards) {
        card.classList.remove('d-none');
        const cardText = card.querySelector('#id-passageiro span').innerHTML;
        const cardId = card.querySelector('#id-assento span').innerHTML;
        const formatCardText = cardText.trim().toLowerCase();
        const formatCardId = cardId.trim().toLowerCase();
        const pesquisaValida =
            formatCardText.startsWith(formatSearchQuery) ||
            formatCardId.startsWith(formatSearchQuery);
        if (!pesquisaValida) {
            card.classList.add('d-none');
        }
    }
}

function load() {
    localstoragePull();
    carregarCards();

    // barra de pesquisa
    const barraPesquisa = document.querySelector('.search-bar');
    barraPesquisa.addEventListener('input', atualizarPesquisa);
}
load();
