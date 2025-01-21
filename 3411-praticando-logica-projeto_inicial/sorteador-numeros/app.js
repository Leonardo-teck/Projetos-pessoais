function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);//document.getElementById serve para "puxar" o elemento Id
    let de = parseInt(document.getElementById("de").value); //parseInt é para receber apenas numeros
    let ate =parseInt(document.getElementById("ate").value); //.value é para puxar o valor

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {//let i = 0: Inicializa a variável i com 0, que será usada como contador no laço.
        let numero = obterNumeroAleatorio(de, ate);// o de e ate são os paremetros 

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;// .innerHTML para sobrepor o texto
}

function obterNumeroAleatorio(min, max){// de e ate são o min e max 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}