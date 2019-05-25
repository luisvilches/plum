<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Servicios
            <br>Digitales
            <br>& IT
          </h2>
        </div>
        <div class="col-md-6">
          <img alt="" class="img-fluid" src="../assets/s7.svg">
        </div>
      </div>
    </div>
    <Service/>
    <section class="calltoaction">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3>Habla con uno de nuestros ejecutivos y solicita una cotización personalizada gratis.</h3>
            <br><br><br>
            <router-link to="/about"><button>Contacto</button></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Service from "@/components/servicios_home.vue";

export default {
  name: "home",
  components: {
    Service
  }
};
</script>


<style scoped>

section{padding: 60px 0;}
.home {padding-top: 200px;}
button {border: none;background: #fcfcfc;color: #1a1f35;border-radius: 100px;padding: 10px 40px;}

@media(max-width:768px){
    .home {padding-top: 100px;}
}
</style>
