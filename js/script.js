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

function temNumerosIguais(array) {
    return (new Set(array)).size !== array.length;
}

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



function iniciarTabuleiro(tamanho_tabuleiro,) {
    tamanho_tabuleiro = parseInt(tamanho_tabuleiro)

    icons = embaralharCartoes(icons);
    // embaralha os icones para que em cada jogo se use icons diferentes

    tabuleiro = [];
    if (parseInt(tema_atual) == 1) {
        for (let i = 0; i < tamanho_tabuleiro * tamanho_tabuleiro / 2; i++) {
            tabuleiro.push(i,i);
        };
    }
    else {
        for (let i = 0; i < tamanho_tabuleiro * tamanho_tabuleiro / 2; i++) {
            tabuleiro.push(icons[i], icons[i]);
        };
        // adiciona ao tabuleiro a quantidade necessária de icones
    }

    tabuleiro = embaralharCartoes(tabuleiro);

    let div = ""
    // cria a div que vai começar o jogo

    let val = (tamanho_tabuleiro * tamanho_tabuleiro) - tamanho_tabuleiro
    let vals = []
    while (val > -1) {
        vals.push(val)
        val = val - tamanho_tabuleiro
    };
    // concertar a margem

    if (parseInt(tema_atual) == 1) {
        for (let i = 0; i < tamanho_tabuleiro; i++) {
            let col = ""
            for (let j = i * tamanho_tabuleiro; j < (tamanho_tabuleiro * (i + 1)); j++) {

                let cartao = `<a id="card_${j}" class="card-round-container ${(vals.includes(j) ? '' : 'ms-2' )} d-inline-block"  type="button" onclick="proximoRound('#card_${j}')"><div class="card-round-back card-round-${tamanho_tabuleiro}x" onclick=""><i style="font-weight: bold;" class="d-none card-round-${tamanho_tabuleiro}x-icon fa-responsive-size-${tamanho_tabuleiro}x">${tabuleiro[j]}</i></div></a>`
                col = col + cartao
            };
            col = `<div class="mb-2 text-center col-12">${col}</div>`
            div = div + col
        };
        // cria uma coluna com os cartões para cada linha
    }
    else {
        for (let i = 0; i < tamanho_tabuleiro; i++) {
            let col = ""
            for (let j = i * tamanho_tabuleiro; j < (tamanho_tabuleiro * (i + 1)); j++) {
                let cartao = `<a id="card_${j}" class="card-round-container ms-2 d-inline-block"  type="button" onclick="proximoRound('#card_${j}')"><div class="card-round-back card-round-${tamanho_tabuleiro}x" onclick=""><i class="d-none card-round-${tamanho_tabuleiro}x-icon ${tabuleiro[j]} fa-responsive-size-${tamanho_tabuleiro}x"></i></div></a>`
                col = col + cartao
            };
            col = `<div class="mb-2 text-center col-12">${col}</div>`
            div = div + col
        };
        // cria uma coluna com os cartões para cada linha
    }

    

    var div_tabuleiro = document.getElementById("tabuleiro");
    // recupera a div que contém o tabuleiro

    div_tabuleiro.innerHTML = div;
    // adiciona o html ao tabuleiro


};

function iniciarJogadores(qtd_jogadores) {
    qtd_jogadores = parseInt(qtd_jogadores)
    let div = ""
    for (let i = 0; i < qtd_jogadores; i++) {
        let jogador = `<div id="jogador_${i + 1}" class="player-container p-2 p-sm-3"><p class="m-0 d-inline-block d-md-none">P${i + 1}</p><p class="m-0 d-none d-md-inline-block">Jogador${i + 1}</p><p class="m-0 ms-2 d-inline-block">0</p></div>`
        div = div + jogador
    };

    var div_jogadores = document.getElementById("jogadores");
    // recupera a div que contém o tabuleiro

    div_jogadores.innerHTML = div;
    // adiciona o html ao tabuleiro

    jogador_atual = 1;
    // player 1 é o primeiro a jogar

    jogador_container = document.getElementById('jogador_' + jogador_atual.toString());
    jogador_container.classList.toggle('player-container-selected')
}

function novoJogo() {

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
        // passa os valores dos inputs para as variáveis

        iniciarJogo()
        // começa um jogo

        fecharModal('modal_iniciar')
        // fecha o modal

    }
    else {
        return console.log("valores não selecionados")
    }

}

function fecharModal(modal_nome) {
    let modal = document.getElementById(modal_nome)
    if (modal_nome != 'modal_iniciar') {
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

function virarCartao(id) {
    let anchor = document.querySelector(id);
    let card_round = anchor.firstElementChild;
    let icon = card_round.firstElementChild;


    anchor.classList.toggle('unclickable');
    // faz com que o cartão não seja clicável

    anchor.classList.toggle('card-round-flip');
    // gira o cartão 180 graus

    setTimeout(
        function () {
            // no momento que ele estiver girado 180 graus:
            card_round.classList.toggle('card-round-back');
            // muda o tipo do cartão (frente ou verso)
            card_round.classList.toggle('card-round-front');
            //faz o cartão ficar laranja
            icon.classList.toggle('d-none');
            // remove ou adiciona o icone

            anchor.classList.toggle('card-round-flip');
            // gira mais 180 graus
        }, 500);
}

function desativarCartao(id) {
    let anchor = document.querySelector(id);
    let card_round = anchor.firstElementChild;
    anchor.onclick = "";
    anchor.type = "";
    card_round.classList.remove('card-round-front');

}

function cartoesSaoIguais(id_1, id_2) {
    let card_round_icon_1 = document.querySelector(id_1).firstElementChild.firstElementChild;
    let card_round_icon_2 = document.querySelector(id_2).firstElementChild.firstElementChild;
    if (tema_atual == 1) {
        return card_round_icon_1.innerHTML == card_round_icon_2.innerHTML
    }
    return card_round_icon_1.classList.value == card_round_icon_2.classList.value
}

function proximoRound(id) {

    virarCartao(id);

    cartoes_virados_id.push(id);
    // passa para a variavel cartoes_virados_id o id do cartão
    qtd_cartoes_virados_atual += 1
    // passa para a variável qtd_cartoes_virados_atual a quantidade de cartões que foram virados


    if (qtd_cartoes_virados_atual == 2) {
        let impedir_click = document.getElementById('impedir_click');
        impedir_click.style.display = "block";

        setTimeout(function () {
            if (cartoesSaoIguais(cartoes_virados_id[0], cartoes_virados_id[1])) {
                // caso sejam iguais

                for (id_cartao of cartoes_virados_id) {
                    desativarCartao(id_cartao);
                }
                // desativa os cartões virados

                setTimeout(function () {
                    let jogador_container = document.getElementById('jogador_' + jogador_atual.toString());
                    let jogador_pts = jogador_container.getElementsByTagName('p')[2]
                    jogador_container.classList.toggle('player-container-selected');
                    // deixa de selecionar o container do jogador atual

                    jogador_pts.innerHTML = parseInt(jogador_pts.innerHTML) + 1;
                    // adiciona um pnnto pro jogador atual

                    cartoes_virados_total += 2;
                    // adiciona mais 2 ao total de cartões virados.

                    if (cartoes_virados_total == tamanho_tabuleiro * tamanho_tabuleiro) {
                        resultado = [];

                        for (let i = 0; i < qtd_jogadores; i++) {
                            resultado.push(parseInt(document.getElementById('jogador_' + (i + 1).toString()).getElementsByTagName('p')[2].innerHTML))
                        }
                        // envia a pontuação de cada jogador para o array
                        maior = Math.max(...resultado)
                        // recupera o maior valor do array

                        if (temNumerosIguais(resultado)) {
                            // se deu empate
                            let vencedor_div = document.getElementById('vencedor')
                            vencedor_div.innerHTML = ('EMPATE');
                        }
                        else {
                            // caso contrário
                            let jogador_vencedor = resultado.indexOf(maior) + 1
                            let vencedor_div = document.getElementById('vencedor')
                            vencedor_div.innerHTML = ("JOGADOR " + jogador_vencedor.toString());
                        }


                        let modal_vencedor = document.getElementById('modal_vencedor');
                        modal_vencedor.style.display = "block";
                        // abre o modal do vencedor


                    }
                    // se todos os cartões do tabuleiro estiverem virados (se o jogo acabou)




                    (jogador_atual == qtd_jogadores ? jogador_atual = 1 : jogador_atual += 1);
                    // passa a vez do jogador
                    document.getElementById('jogador_' + jogador_atual.toString()).classList.toggle('player-container-selected');
                    // seleciona o container do próximo jogador
                    cartoes_virados_id = [];
                    qtd_cartoes_virados_atual = 0;
                    // limpa os dois campos acima
                    impedir_click.style.display = "none";
                    // remove a div que impede o click na tela

                }, 300)
                // espera o cartão ser desativado (efeito de fade 0.3s) + 0.2s para trocar de jogador
            }
            else {
                // caso não sejam iguais

                for (id_cartao of cartoes_virados_id) {
                    virarCartao(id_cartao);
                }
                // desvira os dois cartões

                setTimeout(function () {
                    let jogador_container = document.getElementById('jogador_' + jogador_atual.toString());
                    jogador_container.classList.toggle('player-container-selected');
                    // deixa de selecionar o container do jogador atual


                    impedir_click.style.display = "none";
                    // remove a div que impede o click na tela
                    (jogador_atual == qtd_jogadores ? jogador_atual = 1 : jogador_atual += 1);
                    // passa a vez do jogador
                    document.getElementById('jogador_' + jogador_atual.toString()).classList.toggle('player-container-selected');
                    // seleciona o container do próximo jogador
                    cartoes_virados_id = [];
                    qtd_cartoes_virados_atual = 0;
                    // limpa os dois campos acima
                }, 1300)
                // espera os dois cartões serem desvirados (1s) + 0.5s para passar a vez do jogador

            }
        }, 1300)
        // esperar o cartão ser virado (1s) + meio segundo para fazer a comparação

    }


    // pra remover a cor laranja caso precise
};

function reiniciarJogo() {
    fecharModal('modal_vencedor');
    cartoes_virados_total = 0;
    jogador_atual = 0;
    qtd_cartoes_virados_atual = 0;
    cartoes_virados_id = [];
    iniciarJogo();
}

function redefinirPreferencias() {
    fecharModal('modal_vencedor');
    abrirModal('modal_iniciar');
    cartoes_virados_total = 0;
    jogador_atual = 0;
    qtd_cartoes_virados_atual = 0;
    cartoes_virados_id = [];
}

var tema_atual = 0;
var qtd_jogadores = 0;
var tamanho_tabuleiro = 0;

var cartoes_virados_total = 0;

var jogador_atual = 0;
var qtd_cartoes_virados_atual = 0;
var cartoes_virados_id = []



