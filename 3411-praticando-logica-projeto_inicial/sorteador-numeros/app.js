let sorteados = [];

function sortear() {
    let qtd = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    let numero;

    for (let i = 0; i < qtd; i++){
        sorteador(de, ate);
    }
    sorteados.push(num)

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
}

function sorteador(min, max) {
    numero = Math.floor(Math.random() * (max - min + 1)) + min;
}