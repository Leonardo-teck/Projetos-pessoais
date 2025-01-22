let totalGeral;
limpar();

function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

     // Verificar se a quantidade inserida é válida
     if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeDoProduto = produto.split('-')[0];
    let valorDoProduto = parseFloat(produto.split('R$')[1]);
    let quantidadeDoProduto = document.getElementById('quantidade').value;

    //calcular o preço, o nosso subtotal.
    let preco = quantidadeDoProduto.value * valorDoProduto;
    let carrinho = document.getElementById('lista-produtos');

    //adicionar no carrinho.
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeDoProduto}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

  //atualizar o valor total.
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0'

}