<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo_plumtech.png" class="img-fluid" alt> 
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/nosotros">¿Quienes Somos?</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Gugi|Nunito|Poppins');
img {
  max-width: 200px;
  padding-top:0; 
}
nav {
  padding: 20px 0;
  background: #1A1F35;
}

.navbar-brand{font-size: 30px; font-family: 'Nunito', sans-serif;}

ul li .nav-link a,ul li .nav-link{color: #ffffff!important;}
.nav-item{margin: 0 20px;}

@media(max-width:768px){
    nav{
        padding: 20px;
    }
}
</style>
