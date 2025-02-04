let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(lista.textContent == ""){
        lista.textContent = amigo.value;
    }else {
        lista.textContent += ", " + amigo.value;
    }
}

function sortear(){
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
}

    function embaralhar(lista) {

        for (let indice = lista.length; indice; indice--) {
    
            const indiceAleatorio = Math.floor(Math.random() * indice);
    
            // atribuição via destructuring
            [lista[indice - 1], lista[indiceAleatorio]] = 
                [lista[indiceAleatorio], lista[indice - 1]];
        }
    }
}