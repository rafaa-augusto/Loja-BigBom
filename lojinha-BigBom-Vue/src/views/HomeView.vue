<script setup>
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
          <span class="text-big">BIG</span><span class="text-bom">BOM</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex justify-content-center w-100">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
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
          <input class="form-control me-2 search-input" type="search" placeholder="Search" aria-label="Search"
            v-model="termoBusca">
          <button class="btn btn-custom-search" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- Main Carousel -->
  <div class="container mt-5">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="@/assets/image/1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/image/4.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="@/assets/image/7.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <!-- Router Link Section -->
  <div class="container-fluid d-flex justify-content-center align-items-center full-screen">
    <div class="d-flex justify-content-around w-100">
      <div class="text-center">
        <p>Mouses</p>
        <router-link to="/mouse" class="router-link router-link-1">
          <img src="/src/assets/image/mouse sem fundo.png" alt="Mouse">
        </router-link>
      </div>
      <div class="text-center">
        <p>Teclados</p>
        <router-link to="/teclado" class="router-link router-link-2">
          <img src="/src/assets/image/teclado sem fundo.png" alt="Teclado">
        </router-link>
      </div>
      <div class="text-center">
        <p>Fones</p>
        <router-link to="/fone" class="router-link router-link-3">
          <img src="/src/assets/image/fone sem fundo.png" alt="Fone de Ouvido">
        </router-link>
      </div>
    </div>
  </div>




  <!-- Product Carousel with Modals -->
  <div class="container mt-5">
    <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Carousel Item 1 -->
        <div class="carousel-item active">
          <img src="/src/assets/image/exclusive.png" class="d-block w-100" alt="Product 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>Produto 1</h5>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalProduct1">View
              Details</button>
          </div>
        </div>

        <!-- Carousel Item 2 -->
        <div class="carousel-item">
          <img src="/src/assets/image/yeti-gx-gallery-1.webp" class="d-block w-100" alt="Product 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Produto 2</h5>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalProduct2">View
              Details</button>
          </div>
        </div>

        <!-- Carousel Item 3 -->
        <div class="carousel-item">
          <img src="/src/assets/image/gaming-msi-header.png" class="d-block w-100" alt="Product 3">
          <div class="carousel-caption d-none d-md-block">
            <h5>Produto 3</h5>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalProduct3">View
              Details</button>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#productCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#productCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  <!-- Modal for Product 1 -->
  <div class="modal fade" id="modalProduct1" tabindex="-1" aria-labelledby="modalProduct1Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalProduct1Label">Product 1 Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Card para Produto -->
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nome do Produto 1</h5>
              <p class="card-text">Details about Product 1...</p>
              <button class="btn btn-primary" onclick="addToCart(1)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for Product 2 -->
  <div class="modal fade" id="modalProduct2" tabindex="-1" aria-labelledby="modalProduct2Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalProduct2Label">Product 2 Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Card para Produto -->
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nome do Produto 2</h5>
              <p class="card-text">Details about Product 2...</p>
              <button class="btn btn-primary" onclick="addToCart(2)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for Product 3 -->
  <div class="modal fade" id="modalProduct3" tabindex="-1" aria-labelledby="modalProduct3Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalProduct3Label">Product 3 Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Card para Produto -->
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Nome do Produto 3</h5>
              <p class="card-text">Details about Product 3...</p>
              <button class="btn btn-primary" onclick="addToCart(3)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast para Produto adicionado ao carrinho -->
  <div class="toast align-items-center text-white bg-success" role="alert" aria-live="assertive" aria-atomic="true"
    id="toastProdutoAdicionado">
    <div class="d-flex">
      <div class="toast-body text-center">
        <span style="font-size: 20px;">Produto adicionado ao carrinho com sucesso!</span>
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
        aria-label="Close"></button>
    </div>
  </div>



  <div class="container-fluid full-screen-2">
    <div class="row align-items-center">
      <!-- Texto na esquerda -->
      <div class="col-md-6">
        <div class="texto">
          <h2 style="color: #52EB00 !important">Novo Mouse Gamer GT</h2>
          <p>Experimente a precisão e o desempenho de alta qualidade com o nosso mais novo Mouse Gamer GT. Desfrute de
            uma experiência de jogo imersiva e responsiva, projetada para horas de uso contínuo.</p>
          <p>Perfeito para jogadores profissionais e entusiastas, com botões programáveis e iluminação RGB
            personalizável. Não perca tempo, compre o seu agora!</p>
          <a href="#" class="btn btn-primary">Compre Agora</a>
        </div>
      </div>
      <!-- Imagem na direita -->
      <div class="col-md-6">
        <img src="/src/assets/image/mouse-gt-gaming-3200-goldentec-usb-3200dp.webp" class="img-fluid custom-img"
          alt="Mouse Gamer GT">
      </div>
    </div>
  </div <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
  




  <div class="container-fluid">
    <div class="row align-items-center">
      <!-- Imagem na esquerda -->
      <div class="col-md-6">
        <img
          src="/src/assets/image/622326da-7c4f-4dcb-a21c-860519f5e43e71332318cadeiraboaebaratagamerkittecladomouseemousepad1kitcompleto903523104812600x600.webp"
          class="img-fluid" alt="Cadeira Gamer">
      </div>
      <!-- Texto na direita -->
      <div class="col-md-6">
        <div class="texto">
          <h2 style="color: #3CAB00 !important">Cadeira Gamer Hunter</h2>
          <p style="color: white !important">Descubra o máximo conforto e a ergonomia excepcional com a nossa Cadeira
            Gamer Hunter. Feita com materiais de alta qualidade, esta cadeira oferece o suporte ideal para longas
            sessões de jogo.</p>
          <p style="color: white !important">Com um design moderno e ajustes personalizáveis, você experimentará uma
            imersão no jogo como nunca antes. Garanta a sua agora!</p>
          <a href="#" class="btn btn-primary">Compre Agora</a>
        </div>
      </div>
    </div>
  </div>

  <footer class="footer bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Contato</h5>
          <p>Endereço: Unimar<br>Marília, SP<br>CEP: 12345-678</p>
          <p>Telefone: (99) 4002-8922<br>Email: contato.sac@bigbom.com</p>
        </div>
        <div class="col-md-4">
          <h5>Links Úteis</h5>
          <ul class="list-unstyled">
            <li><router-link class="text-white" to="/">Página Inicial</router-link></li>
            <li><router-link class="text-white" to="/produtos">Produtos</router-link></li>
            <li><router-link class="text-white" to="/sobre-nos">Sobre Nós</router-link></li>
            <li><router-link class="text-white" to="/contato">Contato</router-link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Redes Sociais</h5>
          <ul class="list-unstyled">
            <li><a class="text-white" href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
            <li><a class="text-white" href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
            <li><a class="text-white" href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
            <li><a class="text-white" href="#"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
            <img src="../assets/image/a.jpg" alt="Imagem Centralizada" class="img-fluid" style="height: 50px;">
        </div>
    </div>
    </div>
  </footer>
</template>
