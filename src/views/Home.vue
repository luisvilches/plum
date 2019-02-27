<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Servicios
            <br>Outsourcing
            <br>& IT
          </h2>
        </div>
        <div class="col-md-6">
          <img alt="Vue logo" class="img-fluid" src="../assets/head_vms_2.png">
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
            <button>Contacto</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Service from "@/components/servicios_home.vue";
import TablePrecios from "@/components/tabla_precios_diseno_web.vue";


export default {
  name: "home",
  components: {
    Service,
    TablePrecios
  }
};
</script>


<style scoped>
.home {
  padding-top: 200px;
  padding-bottom: 100px;
}
h2 {
  font-size: 60px;
  text-align: left;
  padding-top: 60px;
  color: #FCFCFC;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}
img {
  max-width: 100%;
  padding-top: 20px;
}

button {
  border: none;
  background: #fcfcfc;
  color: #1a1f35;
  border-radius: 100px;
  padding: 10px 40px;
}

.calltoaction{
  padding-top: 100px;
  padding-bottom: 50px;
}

@media(max-width:768px){
    h2{
        font-size: 45px;
    }
}
</style>
