<template>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
          <span class="text-big">BIG</span><span class="text-bom">BOM</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex justify-content-center w-100">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Produtos
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="dropdown-item" to="/mouse">Mouses</router-link></li>
                <li><router-link class="dropdown-item" to="/fone">Fones</router-link></li>
                <li><router-link class="dropdown-item" to="/teclado">Teclados</router-link></li>
                <li><router-link class="dropdown-item" to="/variados">Variados</router-link></li>
              </ul>
            </li>
          </ul>
        </div>

        <button class="btn btn-outline-light me-3" type="button" data-bs-toggle="modal" data-bs-target="#cartModal">
          <i class="bi bi-cart-fill"></i>
        </button>
        <form class="d-flex">
          <input class="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search" v-model="termoBusca">
          <button class="btn btn-custom-search" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>




  <div class="container my-4">
    <h2 class="text-center mb-4">Produtos Variados</h2>

    <!-- Fones de Ouvido -->
    <div class="mb-4">
      <h3 class="mb-3">Fones de Ouvido</h3>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="(product, index) in headphones" :key="'headphone-' + index">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.alt">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <h6 class="card-subtitle mb-2 text-muted">Preço: {{ product.price }}</h6>
              <button class="btn btn-primary mt-3" @click="addToCart(product)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mouse Pad -->
    <div class="mb-4">
      <h3 class="mb-3">Mouse Pad</h3>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="(product, index) in mousePads" :key="'mousePad-' + index">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.alt">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <h6 class="card-subtitle mb-2 text-muted">Preço: {{ product.price }}</h6>
              <button class="btn btn-primary mt-3" @click="addToCart(product)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Microfone Gamer -->
    <div class="mb-4">
      <h3 class="mb-3">Microfone Gamer</h3>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="(product, index) in gamerMicrophones" :key="'gamerMicrophone-' + index">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.alt">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <h6 class="card-subtitle mb-2 text-muted">Preço: {{ product.price }}</h6>
              <button class="btn btn-primary mt-3" @click="addToCart(product)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cadeira Gamer -->
    <div class="mb-4">
      <h3 class="mb-3">Cadeira Gamer</h3>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="(product, index) in gamerChairs" :key="'gamerChair-' + index">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.alt">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <h6 class="card-subtitle mb-2 text-muted">Preço: {{ product.price }}</h6>
              <button class="btn btn-primary mt-3" @click="addToCart(product)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gabinete de PC -->
    <div class="mb-4">
      <h3 class="mb-3">Gabinete de PC</h3>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4" v-for="(product, index) in pcCases" :key="'pcCase-' + index">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" :alt="product.alt">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <h6 class="card-subtitle mb-2 text-muted">Preço: {{ product.price }}</h6>
              <button class="btn btn-primary mt-3" @click="addToCart(product)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notificação de Carrinho -->
    <div v-if="notification.show" class="alert alert-success mt-4" role="alert">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headphones: [
        {
          image: 'caminho_da_imagem',
          alt: 'Fone de Ouvido 1',
          title: 'Fone de Ouvido Modelo A',
          description: 'Descrição do Fone de Ouvido Modelo A.',
          price: 'R$ 100,00'
        },
        // Adicione mais fones de ouvido aqui...
      ],
      mousePads: [
        {
          image: 'caminho_da_imagem',
          alt: 'Mouse Pad 1',
          title: 'Mouse Pad Modelo B',
          description: 'Descrição do Mouse Pad Modelo B.',
          price: 'R$ 20,00'
        },
        // Adicione mais mouse pads aqui...
      ],
      gamerMicrophones: [
        {
          image: 'caminho_da_imagem',
          alt: 'Microfone Gamer 1',
          title: 'Microfone Gamer Modelo C',
          description: 'Descrição do Microfone Gamer Modelo C.',
          price: 'R$ 150,00'
        },
        // Adicione mais microfones gamer aqui...
      ],
      gamerChairs: [
        {
          image: 'caminho_da_imagem',
          alt: 'Cadeira Gamer 1',
          title: 'Cadeira Gamer Modelo D',
          description: 'Descrição da Cadeira Gamer Modelo D.',
          price: 'R$ 300,00'
        },
        // Adicione mais cadeiras gamer aqui...
      ],
      pcCases: [
        {
          image: 'caminho_da_imagem',
          alt: 'Gabinete de PC 1',
          title: 'Gabinete de PC Modelo E',
          description: 'Descrição do Gabinete de PC Modelo E.',
          price: 'R$ 250,00'
        },
        // Adicione mais gabinetes de PC aqui...
      ],
      notification: {
        show: false,
        message: ''
      }
    };
  },
  methods: {
    addToCart(product) {
      console.log(`Adicionado ao carrinho: ${product.title}`);
      this.notification.message = `${product.title} foi adicionado ao carrinho!`;
      this.notification.show = true;
      setTimeout(() => {
        this.notification.show = false;
      }, 3000);
    }
  }
};
</script>
