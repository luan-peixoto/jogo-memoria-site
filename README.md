"# jogo-memoria-site" 

todo:

- vai ter um botao de começar, uma caixa pra escolher qtd de jgoadores e tamanho do tabuleiro

- ao começar um jogo, sera adicionado o tabuleior e uma div com os jogodares e a qtd de pts

funciona da seguinte forma:

vai ter uma var com o numero total de casas viradas 0-36
vai ter uma var com o numero de casas viradas 0,1,2
vai ter uma var com numero de jogadores e pts de cada
vai ter um marcador p saber a vez de qual jogador eh

se um jogador clicar em 2 casas consecutivas
    vai checar se as duas sao iguais
    se sim
        adicionar um ponto ao jogador em questao
        mudar a cor de laranja pra cinza claro
        impedir q elas possam ser clicadas novamente
    fim se
    passar pro pro proximo jogador

dependendo do tipo do jogo, 
se o numero total de casas for 36 ou 16
    msotra na tela o vencedor e da opcao de começar outro jogo

