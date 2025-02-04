let totalGeral;
limpar();

function adicionar() {
    // Recuperar valores: nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;
    let quantidadeDoProduto = parseInt(document.getElementById('quantidade').value);

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidadeDoProduto) || quantidadeDoProduto <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = parseFloat(produto.split('R$')[1]);

    // Calcular o preço, o nosso subtotal.
    let preco = quantidadeDoProduto * valorDoProduto;
    let carrinho = document.getElementById('lista-produtos');

    // Adicionar no carrinho.
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeDoProduto}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
    </section>`;

    // Atualizar o valor total.
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;

    // Resetar o campo quantidade.
    document.getElementById('quantidade').value = "";
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0,00';
}
