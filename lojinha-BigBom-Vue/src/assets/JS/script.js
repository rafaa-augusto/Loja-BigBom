function addToCart(productId) {
    // Aqui você pode adicionar lógica para adicionar o produto ao carrinho
    // Neste exemplo, apenas exibiremos uma mensagem de toast
    var toastElement = document.getElementById('toastProdutoAdicionado');
    var toast = new bootstrap.Toast(toastElement);
    toast.show();
  }


 /* new Vue({
    el: '#app',
    data: {
      termoBusca: '',
      carrinho: [
        { id: 1, descricao: 'Monitor - Descrição do Produto' },
        { id: 2, descricao: 'Mesa para Computador - Descrição do Produto' }
      ]
    },
    methods: {
      removerDoCarrinho(id) {
        this.carrinho = this.carrinho.filter(item => item.id !== id);
      },
      finalizarCompra() {
        // Lógica para finalizar a compra
        alert('Compra finalizada!');
      }
    }
  });


  function navigateTo(path) {
    window.location.href = path;
  }
  */