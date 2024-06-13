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
    <h2 class="text-center mb-4">Fones</h2>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(headphone, index) in headphones" :key="index">
        <div class="card h-100">
          <img :src="headphone.image" class="card-img-top" :alt="headphone.alt">
          <div class="card-body">
            <h5 class="card-title">{{ headphone.title }}</h5>
            <p class="card-text">{{ headphone.description }}</p>
            <h6 class="card-subtitle mb-2 text-muted">Preço: {{ headphone.price }}</h6>
            <button class="btn btn-primary mt-3" @click="addToCart(headphone)">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="notification.show" class="alert alert-success mt-4" role="alert">
      {{ notification.message }}
    </div>
    
    <h3 class="text-center mt-5 mb-4">Esgotados</h3>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(headphone, index) in soldOutHeadphones" :key="'soldOut-' + index">
        <div class="card h-100">
          <img :src="headphone.image" class="card-img-top" :alt="headphone.alt">
          <div class="card-body">
            <h5 class="card-title">{{ headphone.title }}</h5>
            <p class="card-text">{{ headphone.description }}</p>
            <h6 class="card-subtitle mb-2 text-muted">Preço: {{ headphone.price }}</h6>
            <button class="btn btn-secondary mt-3" disabled>Esgotado</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import foneImage1 from '@/assets/image/4.png';
    import foneImage2 from '@/assets/image/5.png';
    import foneImage3 from '@/assets/image/6.png';
export default {
  data() {
    return {
      headphones: [
        {
          image: foneImage1,
          alt: 'Fone 1',
          title: 'HEADSET SEM FIO ASTRO A50 X',
          description: 'Fone de ouvido com alta qualidade de som e cancelamento de ruído.',
          price: 'R$ 250,00'
        },
        {
          image: foneImage2,
          alt: 'Fone 2',
          title: 'HEADSET ASTRO A40 TR + MIXAMP PRO TR',
          description: 'Fone sem fio ergonômico com bateria de longa duração.',
          price: 'R$ 300,00'
        },
        {
          image: foneImage3,
          alt: 'Fone 3',
          title: 'HEADET SEM FIO ASTRO A20',
          description: 'Fone Bluetooth com som de alta fidelidade e design confortável.',
          price: 'R$ 200,00'
        }
      ],
      soldOutHeadphones: [
        {
          image: 'https://placehold.it/1200x400',
          alt: 'Fone 4',
          title: 'Fone Esgotado GHI',
          description: 'Este é um fone que está atualmente esgotado.',
          price: 'R$ 350,00'
        },
        {
          image: 'https://placehold.it/1200x400',
          alt: 'Fone 5',
          title: 'Fone Esgotado JKL',
          description: 'Este é um fone que está atualmente esgotado.',
          price: 'R$ 400,00'
        },
        {
          image: 'https://placehold.it/1200x400',
          alt: 'Fone 6',
          title: 'Fone Esgotado MNO',
          description: 'Este é um fone que está atualmente esgotado.',
          price: 'R$ 450,00'
        }
      ],
      notification: {
        show: false,
        message: ''
      }
    };
  },
  methods: {
    addToCart(headphone) {
      // Simula a adição ao carrinho
      console.log(`Adicionado ao carrinho: ${headphone.title}`);
      this.notification.message = `${headphone.title} foi adicionado ao carrinho!`;
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
