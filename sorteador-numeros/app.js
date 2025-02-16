function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);//document.getElementById serve para "puxar" o elemento Id
    let de = parseInt(document.getElementById('de').value); //parseInt é para receber apenas numeros
    let ate =parseInt(document.getElementById('ate').value); //.value é para puxar o valor

        if (de >= ate) {
            document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!</label>';
            alterarStatusBotao();
            return;
          }

          if (quantidade > (ate - de + 1 )) {
             document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">"Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!</label>';
             alterarStatusBotao();
             return;
          }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {//let i = 0: Inicializa a variável i com 0, que será usada como contador no laço.
        numero = obterNumeroAleatorio(de, ate);// o de e ate são os paremetros 

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero); // push adiciona o número sorteado ao array sorteados, armazenando todos os números gerados durante as interações do laço
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;// .innerHTML para sobrepor o texto
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){// de e ate são o min e max 
    return Math.floor(Math.random() * (max - min + 1)) + min; // Math.floor Arredonda o número geralmente para baixo, garantindo que o resultado seja um número inteiro 
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){// .contains() verifica se a lista de classes do elemento contém uma classe específica. Ele retorna true se a classe estiver presente e false caso contrário.
        botao.classList.remove('container__botao-desabilitado');// .classList é uma propriedade que retorna uma coleção de classes (ou seja, uma lista) que estão aplicadas a um elemento HTML. Isso permite que você manipule as classes desse elemento de forma fácil e intuitiva.
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }           
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}