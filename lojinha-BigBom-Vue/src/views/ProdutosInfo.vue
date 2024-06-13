<template>
    <div class="product-container">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image">
        <div class="product-info">
          <p class="product-name">Produto: {{ product.name }}</p>
          <p>Nome: {{ product.name }}</p>
          <p>Preço: {{ product.price }}</p>
          <p>Descrição: {{ product.description }}</p>
          <p>CategoriaID: {{ product.id }}</p>
          <p>Categoria: {{ product.category }}</p>
        </div>
      </div>
    </div>
  </template>
<script>
import ProdutoDataService from "../services/ProdutoDataService";

export default {
  name: "produto-list",
  data() {
    return {
      produtos: []
    };
  },
  methods: {
    retrieveProdutos() {
      ProdutoDataService.getAll()
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        console.log(e);
      });
    }
  },
  mounted() {
    this.retrieveProdutos();
  }
}
</script>