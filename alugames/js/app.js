let jogosAlugados = 0; // variavel dos jogos alugados

function contarEExibirJogosAlugados() { // a função responsavel por mostrar os jogos alugados
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img'); //Usa a variavel gameClicado. no lugar de document.
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--; // remove o jogo no jogosAlugados
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;// adiciona o jogo no jogosAlugados
    }
    contarEExibirJogosAlugados();
}


// Inicializa a contagem considerando que os jogos já começam alugados
//.addEventListener: É um método que permite adicionar um "ouvinte" de eventos a um elemento HTML. Isso significa que você pode especificar uma função que será executada quando um evento específico ocorrer, como um clique, uma tecla pressionada, entre outros.
document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded que é acionado quando a página é carregada. Nesse momento, ele conta a quantidade inicial de jogos alugados. Certifique-se de ajustar o código conforme necessário para se adequar ao seu projeto.
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});