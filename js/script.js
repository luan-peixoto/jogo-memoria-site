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
    "fas fa-hat-cowboy",
    "fas fa-hippo",
    "fas fa-moon",
    "fas fa-skull",
    "fas fa-umbrella",
    "fas fa-taxi"
]



function criarJogo(tamanho_jogo) {

    icons = embaralharCartoes(icons);
    // embaralha os icones para que em cada jogo se use icons diferentes

    tabuleiro = [];
    for (let i = 0 ; i < tamanho_jogo; i++) {
        tabuleiro.append(icons[i]);
        tabuleiro.append(icons[i]);
    };
    // adiciona ao tabuleiro a quantidade necessária de icones
    tabuleiro = embaralharCartoes(tabuleiro);
    

};