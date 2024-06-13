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
    <h2 class="text-center mb-4">Mouse</h2>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(mouse, index) in mouses" :key="index">
        <div class="card h-100">
          <img :src="mouse.image" class="card-img-top" :alt="mouse.alt">
          <div class="card-body">
            <h5 class="card-title">{{ mouse.title }}</h5>
            <p class="card-text">{{ mouse.description }}</p>
            <h6 class="card-subtitle mb-2 text-muted">Preço: {{ mouse.price }}</h6>
            <button class="btn btn-primary mt-3" @click="addToCart(mouse)">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="notification.show" class="alert alert-success mt-4" role="alert">
      {{ notification.message }}
    </div>
    
    <h3 class="text-center mt-5 mb-4">Esgotados</h3>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(mouse, index) in soldOutMouses" :key="'soldOut-' + index">
        <div class="card h-100">
          <img :src="mouse.image" class="card-img-top" :alt="mouse.alt">
          <div class="card-body">
            <h5 class="card-title">{{ mouse.title }}</h5>
            <p class="card-text">{{ mouse.description }}</p>
            <h6 class="card-subtitle mb-2 text-muted">Preço: {{ mouse.price }}</h6>
            <button class="btn btn-secondary mt-3" disabled>Esgotado</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import mouseImage from '@/assets/image/1.png';
    import mouseImage2 from '@/assets/image/2.png';
    import mouseImage3 from '@/assets/image/3.png';
export default {
  data() {
    return {
      mouses: [
        {
          image: mouseImage,
          alt: 'Mouse 1',
          title: 'G403',
          description: 'Mouse gamer de alta precisão com iluminação RGB.',
          price: 'R$ 150,00'
        },
        {
          image: mouseImage2,
          alt: 'Mouse 2',
          title: 'MOUSE PARA JOGOS G502 X PLUS',
          description: 'Mouse sem fio ergonômico com longa duração de bateria.',
          price: 'R$ 120,00'
        },
        {
          image: mouseImage3,
          alt: 'Mouse 3',
          title: 'G502 LIGHTSPEED',
          description: 'Mouse óptico com design confortável e sensor de alta qualidade.',
          price: 'R$ 100,00'
        }
      ],
      soldOutMouses: [
        {
          image: 'https://placehold.it/1200x400',
          alt: 'Mouse 4',
          title: 'Mouse GHI',
          description: 'Este é um mouse que está atualmente esgotado.',
          price: 'R$ 200,00'
        },
        {
          image: 'https://placehold.it/1200x400',
          alt: 'Mouse 5',
          title: 'Mouse JKL',
          description: 'Este é um mouse que está atualmente esgotado.',
          price: 'R$ 250,00'
        },
        {
          image: 'https://placehold.it/1200x400',
          alt: 'Mouse 6',
          title: 'Mouse MNO',
          description: 'Este é um mouse que está atualmente esgotado.',
          price: 'R$ 300,00'
        }
      ],
      notification: {
        show: false,
        message: ''
      }
    };
  },
  methods: {
    addToCart(mouse) {
      // Simula a adição ao carrinho
      console.log(`Adicionado ao carrinho: ${mouse.title}`);
      this.notification.message = `${mouse.title} foi adicionado ao carrinho!`;
      this.notification.show = true;

      // Oculta a notificação após 3 segundos
      setTimeout(() => {
        this.notification.show = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.alert {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1050;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
