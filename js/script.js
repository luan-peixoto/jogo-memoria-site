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
    for (let i = 0 ; i < tamanho_tabuleiro * tamanho_tabuleiro / 2; i++) {
        tabuleiro.push(icons[i], icons[i]);
        console.log(i)
    };
    // adiciona ao tabuleiro a quantidade necessária de icones
    tabuleiro = embaralharCartoes(tabuleiro);

    let div = ""
    // cria a div que vai começar o jogo

    for (let i = 0 ; i < tamanho_tabuleiro; i++) {
        let col = ""
        for (let j = i * tamanho_tabuleiro ; j < (tamanho_tabuleiro * (i+1)); j++) {
            let cartao = `<a id="card_${j}" class="d-inline-block" type="button" onclick=""><div class="card-round-${tamanho_tabuleiro}x" onclick=""><i class="card-round-${tamanho_tabuleiro}x-icon ${tabuleiro[j]} fa-responsive-size-${tamanho_tabuleiro}x"></i></div></a>`
            col = col + cartao
        };
        col = `<div class="m-2 text-center col-12">${col}</div>`
        div = div + col
    };
    // cria uma coluna com os cartões para cada linha

    var div_tabuleiro = document.getElementById("tabuleiro");
    // recupera a div que contém o tabuleiro

    div_tabuleiro.innerHTML = div;
    // adiciona o html ao tabuleiro
    

};

function flipTeste(id) {
    let anchor = document.querySelector(id);
    let card_round = anchor.firstElementChild;
    let icon = card_round.firstElementChild;

    anchor.classList.toggle('card-round-flip');
    // gira o cartão 180 graus
    setTimeout(
        function() {
            // no momento que ele estiver girado 180 graus:
            card_round.classList.toggle('card-round-back');
            card_round.classList.toggle('card-round-front');
            // muda o tipo do cartão (frente ou verso)
            icon.classList.toggle('d-none');
            // remove ou adiciona o icone
            
            anchor.classList.toggle('card-round-flip');
            // gira mais 180 graus
        }, 500);

    setTimeout(function() {
        card_round.classList.toggle('card-round-front');
    },2000)
    // pra remover a cor laranja caso precise
};


function iniciarJogo() { 
    let jogadores = document.querySelector('input[name="qtd_jogadores"]:checked');
    // recupera o input com name 'qtd_jogadores' que está checked.

    let tabuleiro = document.querySelector('input[name="tamanho_tabuleiro"]:checked');
    // recupera o input com name 'tamanho_tabuleiro' que está checked.
      
    if(jogadores != null && tabuleiro != null) {
        // se ambos os inputs estão checked
        qtd_jogadores = jogadores;
        tamanho_tabuleiro = tabuleiro;
        console.log(qtd_jogadores.value, tamanho_tabuleiro.value)
    }
    else {
        return console.log("valores não selecionados")
    }
}

var qtd_jogadores = 0;
var tamanho_tabuleiro = 0;