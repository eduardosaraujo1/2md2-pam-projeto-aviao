let pessoasAssentos = {};

// métodos para localStorage
function localstoragePush() {
    // envia status do objeto pessoasAssentos para localStorage
    const json = JSON.stringify(pessoasAssentos);
    localStorage.setItem('pessoasAssentos', json);
}

function localstoragePull() {
    // sobreescreve o objeto pessoasAssentos para o que está no localStorage
    const json = localStorage.getItem('pessoasAssentos');
    if (json == null) return;
    pessoasAssentos = JSON.parse(json);
}

// métodos para sincronizar DOM e objeto pessoasAssentos
function ocuparAssentoDOM(assento) {
    assento.classList = 'assento';
    return assento.classList.add('ocupado');
}

function indisponibilizarAssentoDOM(assento) {
    assento.classList = 'assento';
    return assento.classList.add('indisponivel');
}

function liberarAssentoDOM(assento) {
    return (assento.classList = 'assento');
}

function syncDOM() {
    // Pega o objeto pessoasAssentos e altera o DOM do avião dependendo do seu status
    const assentos = document.querySelectorAll('.assento');
    for (const assento of assentos) {
        if (pessoasAssentos[assento.id] != undefined) {
            indisponibilizarAssentoDOM(assento);
        } else {
            liberarAssentoDOM(assento);
        }
    }
}

function gerarPerguntaViaModal(assentoId, assentoPreco) {
    const modalHtml = `
                <div
                    class="container"
                    style="display: flex; flex-direction: column"
                >
                    <div
                        class="dados-assento"
                        style="display: flex; justify-content: space-evenly"
                    >
                        <div style="text-align: center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                fill="gray"
                                style="width: 3rem"
                            >
                                <path
                                    d="M313.33-733.33q-30.33 0-51.5-21.17-21.16-21.17-21.16-51.5t21.16-52.17Q283-880 313.33-880q30.34 0 52.17 21.83 21.83 21.84 21.83 52.17 0 30.33-21.83 51.5t-52.17 21.17Zm244.67 560H284.67q-28.34 0-49.84-19.17-21.5-19.17-27.16-47.5l-91-456.67H186L273.33-240H558v66.67ZM791.33-80 674-283.33H372q-27 0-47.83-15.84Q303.33-315 298-341.33L252-578q-9.67-46.67 22.83-82.67t80.5-36q35 0 61.17 22T450-618l45.33 227.33h154q20.34 0 36.34 11.67 16 11.67 26.33 29l138 236.67L791.33-80Z"
                                />
                            </svg>
                            <br />
                            <span style="font-size: 1.2em; font-weight: bold"
                                >${assentoId}</span
                            >
                        </div>
                        <div style="text-align: center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                style="width: 3rem"
                                fill="green"
                            >
                                <path
                                    d="M447.67-120v-84.67Q392-215.33 354.83-249q-37.16-33.67-53.83-88.33l62-25.34q16.33 48 47.5 72t77.17 24q45.66 0 75.83-22.16Q593.67-311 593.67-352T568-415.83Q542.33-438.67 465-464q-76.67-24.33-111-62.17Q319.67-564 319.67-620q0-58.33 37.66-95 37.67-36.67 90.34-41.67V-840h66.66v83.33q46.67 6 79.17 31.84Q626-699 642.33-660l-62 26.67q-13.33-32-36.33-47t-61-15q-45.33 0-71 20.5t-25.67 54.16q0 36.34 30 58.34T525-516.67q68.33 20.67 101.83 61.5 33.5 40.84 33.5 99.84 0 65.66-38.66 103.66-38.67 38-107.34 48.34V-120h-66.66Z"
                                />
                            </svg>
                            <br />
                            <span style="font-size: 1.2em; font-weight: bold"
                                >${assentoPreco}</span
                            >
                        </div>
                    </div>
                    <div
                        class="nome-pessoa"
                        style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                        "
                    >
                        <div class="icone-pessoa" style="text-align: center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                style="width: 3rem"
                                fill="gray"
                            >
                                <path
                                    d="M480-480.67q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.28 45.3 30.54 14.42 48.96 41.81Q800-296.67 800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33ZM480-547.33q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67Zm0 407.33Z"
                                />
                            </svg>
                            <br />
                            <span style="font-size: 1.2em; font-weight: bold"
                                >Passageiro</span
                            >
                        </div>
                        <input
                            type="text"
                            id="nome-pessoa"
                            style="
                                height: fit-content;
                                width: 80%;
                                font-size: 1.1rem;
                            "
                        />
                    </div>
                    <div
                        style="
                            display: flex;
                            justify-content: space-around;
                            margin-top: 4px;
                        "
                    >
                        <button
                            class="btn-azul"
                            style="
                                font-size: 1rem;
                                background-color: gray;
                                color: white;
                            "
                            onclick="closeModal();"
                        >
                            Cancelar
                        </button>
                        <button id="nome-passageiro-ok" class="btn-azul" style="font-size: 1rem">
                            Ok
                        </button>
                    </div>
                </div>
    `;

    renderModalContent(modalHtml);
    openModal();
}

// métodos de exibição de mensagem
async function perguntarNomePassageiro(assento) {
    const assentoId = assento.id;
    const assentoPreco = formatarValorEmReais(calcularPrecoAssento(assentoId));

    gerarPerguntaViaModal(assentoId, assentoPreco);
    // dificil né fazer código q nn é confuso...
    // usando promise, quando clicar no botão OK, pegar o que ta no input e retornar. Se o modal for fechado antes, também abortar tudo e resolver a promessa usando null
    return new Promise((resolve, reject) => {
        let button;
        button = document.querySelector('#nome-passageiro-ok');
        button.addEventListener(
            'click',
            () => {
                const nome = document.getElementById('nome-pessoa').value;
                button.removeEventListener('click', resolve);
                closeModal();
                resolve(nome);
            },
            { once: true }
        );

        // fazer o bagulho parar se o botão sumir
        let interval;
        interval = setInterval(() => {
            let enabled = document
                .querySelector('.black-overlay')
                .classList.contains('active');
            if (!enabled) {
                button.removeEventListener('click', resolve);
                clearInterval(interval);
                resolve(null);
            }
        }, 100);
    });
}

function exibirAlerta(mensagem) {
    // nossa que código legivel né kakakakka
    const html = `
    <div style="display:flex;flex-direction:column;justify-content:space-around;align-items:center;height:100%;">
        <span style="display:block;font-size:1.2em;text-align:center;width:100%;">${mensagem}</span>
        <button class="btn-azul" style="font-size:1.1rem;padding:0.5rem 2rem;" onclick="closeModal();">OK</button>
    </div>
    `;
    renderModalContent(html);
    openModal();
}

// métodos para atribuição de assentos
async function liberarAssentos() {
    // libera todos os assentos que o usuário acabou de selecionar, que estão em verde
    const confirmar = confirm(
        'Tem certeza de que deseja limpar todos os assentos?'
    );
    if (!confirmar) {
        return;
    }

    const assentosOcupados = document.querySelectorAll('.assento.ocupado');
    for (const assento of assentosOcupados) {
        const id = assento.id;
        delete pessoasAssentos[id];
    }
    localstoragePush();
    syncDOM();
}

function atribuirAssento(assento, nomePessoa) {
    pessoasAssentos[assento.id] = nomePessoa;
    ocuparAssentoDOM(assento);
}

async function assentoClick(e) {
    const assento = e.currentTarget;
    const pessoaAssento = pessoasAssentos[assento.id];

    // verificar se assento já está ocupado
    if (pessoaAssento != undefined) {
        exibirAlerta(
            `Assento ocupado por 
            <div class="icone-pessoa" style="text-align: center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    style="width: 5rem"
                    fill="gray"
                >
                    <path
                        d="M480-480.67q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.28 45.3 30.54 14.42 48.96 41.81Q800-296.67 800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33ZM480-547.33q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67Zm0 407.33Z"
                    />
                </svg>
                <br />
                <span style="font-size: 1.2em; font-weight: bold"
                    >${pessoaAssento}</span
                >
            </div>
            `
        );
        return;
    }
    const nomePessoa = await perguntarNomePassageiro(assento);
    if (nomePessoa != null) {
        atribuirAssento(assento, nomePessoa);
        localstoragePush();
    }
}

function load() {
    // ativar cadastro de pessoa no usuário clicado
    let assentos = document.querySelectorAll('.assento');
    for (const assento of assentos) {
        assento.addEventListener('click', assentoClick);
    }

    localstoragePull();
    syncDOM();
}

load();

// todo: botão de limpar assentos só vai limpar os assentos que foram ocupados naquela sessão, ou seja, os que estão de cinza
// todo: botao de confirmação para limpar
