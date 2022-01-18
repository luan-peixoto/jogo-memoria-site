function embaralharCartoes(array) {
    let indiceAtual = array.length, indiceAleatorio;

    // enquanto tiver elementos para embaralhar
    while (indiceAtual != 0) {

        // pega o elemento
        indiceAleatorio = Math.floor(Math.random() * indiceAtual);
        indiceAtual--;

        // troca com o elemento atual
        [array[indiceAtual], array[indiceAleatorio]] = [
            array[indiceAleatorio], array[indiceAtual]];
    };

    return array;
};

var icons = [
    'fas fa-baby-carriage',
    "fas fa-bell",
    "fas fa-cannabis",
    "fas fa-chess-knight",
    "fas fa-couch",
    "fas fa-crow",
    "fas fa-egg",
    "fas fa-fish",
    "fas fa-frog",
    "fas fa-ghost",
    "fas fa-hat-wizard",
    "fas fa-hippo",
    "fas fa-moon",
    "fas fa-skull",
    "fas fa-umbrella",
    "fas fa-taxi",
    "fas fa-bone",
    "fas fa-bomb"
]



function iniciarTabuleiro(tamanho_tabuleiro) {
    tamanho_tabuleiro = parseInt(tamanho_tabuleiro)

    icons = embaralharCartoes(icons);
    // embaralha os icones para que em cada jogo se use icons diferentes

    tabuleiro = [];
    for (let i = 0; i < tamanho_tabuleiro * tamanho_tabuleiro / 2; i++) {
        tabuleiro.push(icons[i], icons[i]);
        console.log(i)
    };
    // adiciona ao tabuleiro a quantidade necessária de icones
    tabuleiro = embaralharCartoes(tabuleiro);

    let div = ""
    // cria a div que vai começar o jogo

    for (let i = 0; i < tamanho_tabuleiro; i++) {
        let col = ""
        for (let j = i * tamanho_tabuleiro; j < (tamanho_tabuleiro * (i + 1)); j++) {
            let cartao = `<a id="card_${j}" class="card-round-container ms-2 d-inline-block"  type="button" onclick="flipTeste('#card_${j}')"><div class="card-round-back card-round-${tamanho_tabuleiro}x" onclick=""><i class="d-none card-round-${tamanho_tabuleiro}x-icon ${tabuleiro[j]} fa-responsive-size-${tamanho_tabuleiro}x"></i></div></a>`
            col = col + cartao
        };
        col = `<div class="mb-2 text-center col-12">${col}</div>`
        div = div + col
    };
    // cria uma coluna com os cartões para cada linha

    var div_tabuleiro = document.getElementById("tabuleiro");
    // recupera a div que contém o tabuleiro

    div_tabuleiro.innerHTML = div;
    // adiciona o html ao tabuleiro


};

function iniciarJogadores(qtd_jogadores) {
    qtd_jogadores = parseInt(qtd_jogadores)
    let div = ""
    for (let i = 0; i < qtd_jogadores; i++) {
        let jogador = `<div id="jogador_${i+1}" class="player-container p-2 p-sm-3"><p class="m-0 d-inline-block d-md-none">P${i+1}</p><p class="m-0 d-none d-md-inline-block">Jogador${i+1}</p><p class="m-0 ms-2 d-inline-block">0</p></div>`
        div = div + jogador
    };

    var div_jogadores = document.getElementById("jogadores");
    // recupera a div que contém o tabuleiro

    div_jogadores.innerHTML = div;
    // adiciona o html ao tabuleiro
}

function definirPreferencias() {

    let tema = document.querySelector('input[name="tema"]:checked');
    // recupera o input com name 'temas' que está checked.

    let jogadores = document.querySelector('input[name="qtd_jogadores"]:checked');
    // recupera o input com name 'qtd_jogadores' que está checked.

    let tabuleiro = document.querySelector('input[name="tamanho_tabuleiro"]:checked');
    // recupera o input com name 'tamanho_tabuleiro' que está checked.

    if (jogadores != null && tabuleiro != null && tema != null) {
        // se ambos os inputs estão checked
        qtd_jogadores = jogadores.value;
        tamanho_tabuleiro = tabuleiro.value;
        tema_atual = tema.value;

        iniciarJogo()
        // começa um jogo

        fecharModal('modal-iniciar')
        // fecha o modal

    }
    else {
        return console.log("valores não selecionados")
    }

}

function fecharModal(modal_nome) {
    let modal = document.getElementById(modal_nome)
    if (modal_nome != 'modal-iniciar') {
        modal.style.display = 'none'
        return;
    }

    modal.classList.add("fade-out");
    setTimeout(function () {
        modal.style.display = 'none'
        modal.classList.remove("fade-out");
    }, 300)
}

function abrirModal(modal_nome) {
    let modal = document.getElementById(modal_nome)
    modal.style.display = 'block'
}


function iniciarJogo() {

    iniciarTabuleiro(tamanho_tabuleiro)

    iniciarJogadores(qtd_jogadores)


}

var tema_atual = 0;
var qtd_jogadores = 0;
var tamanho_tabuleiro = 0;

var n_virados_total = 0;

var jogador_atual = 0;
var n_virados_atual= 0;
var virados = []






function desvirarCartao(id) {
    let anchor = document.querySelector(id);
    let card_round = anchor.firstElementChild;
    let icon = card_round.firstElementChild;

    anchor.classList.toggle('card-round-flip');

    setTimeout(
        function () {
            // no momento que ele estiver girado 180 graus:
            card_round.classList.toggle('card-round-back');
            card_round.classList.toggle('card-round-front');
            // muda o tipo do cartão (frente ou verso)
            icon.classList.toggle('d-none');
            // remove ou adiciona o icone

            anchor.classList.toggle('card-round-flip');
            // gira mais 180 graus
    }, 500);

}



function flipTeste(id) {
    let anchor = document.querySelector(id);
    let card_round = anchor.firstElementChild;
    let icon = card_round.firstElementChild;

    anchor.classList.toggle('card-round-flip');
    // gira o cartão 180 graus
    setTimeout(
        function () {
            // no momento que ele estiver girado 180 graus:
            card_round.classList.toggle('card-round-back');
            card_round.classList.toggle('card-round-front');
            // muda o tipo do cartão (frente ou verso)
            icon.classList.toggle('d-none');
            // remove ou adiciona o icone

            anchor.classList.toggle('card-round-flip');
            // gira mais 180 graus
    }, 500);

    virados.push(id);
    n_virados_atual += 1

    if (n_virados_atual == 2) {
        let impedir_click = document.getElementById('impedir_click');
        impedir_click.style.display = "block";

        if (!"se os cards forem iguais") {
            setTimeout(function () {
                        for (id_cartao of virados) {
                            console.log(id_cartao)
                            let anchor = document.querySelector(id_cartao)
                            let cartao = anchor.firstElementChild
                            cartao.classList.toggle('card-round-front');
                        }
                        
                        impedir_click.style.display = "none";
            }, 1000)
        }
        else {
            setTimeout(function () {
                for (id_cartao of virados) {
                    console.log(id_cartao)
                    let anchor = document.querySelector(id_cartao)
                    let cartao = anchor.firstElementChild
                    desvirarCartao(id_cartao);
                }
                
                impedir_click.style.display = "none";
            }, 1000)
        }

        
    }

    
    // pra remover a cor laranja caso precise
};