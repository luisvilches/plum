<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12 service">
          <div class="row">
            <div class="col-md-12">
              <h2>Servicios</h2>
            </div>
            <div class="col-md-6">
              <img src="../assets/s6.svg" alt class="img-fluid">
            </div>
            <div class="col-md-6 text-left">
              <h4>Diseño y desarrollo web</h4>
              <div class="service-body">
                <p>En <strong>Plumtech</strong> creamos modernas aplicaciones web en diversas tecnologias de acuerdo al giro de su negocio ofrecemos soluciones standart y personalizadas para diversas industrias. </p>
                <br>
              </div>
              <router-link to="/about"><button>Obtener más información</button></router-link>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="service">
            <div class="row">
              <div class="col-md-6 text-left">
                <h4>Desarrollo Movíl</h4>
                <div class="service-body">
                  <p>En <strong>Plumtech</strong> enfocamos nuestros desarrollos para que estén disponibles cross-platform a través de arquitecturas de diseño adaptativas disponibles para Android como también para iOS.</p>
                  <br>
                </div>
                <router-link to="/about"><button>Obtener más información</button></router-link>
              </div>
              <div class="col-md-6">
                <img src="../assets/s1.svg" alt class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="service">
            <div class="row">
              <div class="col-md-6">
                <img src="../assets/s3.svg" alt class="img-fluid">
              </div>
              <div class="col-md-6 text-left">
                <h4>Servicios Digitales</h4>
                <div class="service-body">
                  <p>En <strong>Plumtech</strong> tenemos todo lo que necesitas para impulsar tu negocio en Internet de una forma efectiva y profesional. Digitalizamos tu empresa y te ayudamos a llegar a millones de potenciales clientes que buscan tus servicios en la red.</p>
                  <br>
                </div>
                <router-link to="/about"><button>Obtener más información</button></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="service">
            <div class="row">
              <div class="col-md-6 text-left">
                <h4>Desarrollo de software</h4>
                <div class="service-body">
                  <p>En <strong>Plumtech</strong> dedicamos el tiempo necesario a escuchar a nuestros clientes con el fin de obtener una compresión clara y completa del negocio, objetivos, problemas, la cultura y los usuarios para poder ofrecer una solución integral a medida.</p>
                  <br>
                </div>
                <router-link to="/about"><button>Obtener más información</button></router-link>
              </div>
              <div class="col-md-6">
                <img src="../assets/s9.svg" alt class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="service">
            <div class="row">
              <div class="col-md-6">
                <img src="../assets/s8.svg" alt class="img-fluid">
              </div>
              <div class="col-md-6 text-left">
                <h4>Soporte Informatico</h4>
                <div class="service-body">
                  <p>Deja la mantención informática en manos de expertos y dale foco a las cosas importantes de tu negocio.</p>
                </div>
                <router-link to="/about"><button>Obtener más información</button></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiciosHome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr{border-top:1px solid rgba(255,255,255,.3)}
h2 {
  color: #fcfcfc;
  margin-bottom: 40px;
  font-size: 30px;
}

.service {
  padding: 80px 0;
}
.service img {
  /* max-width: 280px; */
  width: 100%;
}
.service .service-body {
  min-height: 100px;
}
.service .service-body p, .service .service-body ul li {
  color: #fcfcfc;
}
.service h4 {
  margin-top: 60px;
  margin-bottom: 10px;
  font-size: 30px;
  color: #fcfcfc;
}
.service button {
  border: none;
  background: #fcfcfc;
  color: #1a1f35;
  border-radius: 100px;
  padding: 10px 40px;
}
.service button:hover {
  border: 1px solid #fcfcfc;
  background: #1a1f35;
  color: #fcfcfc;
}


@media(max-width:768px){
    

    img{
        margin: 40px auto;
    }
}
</style>
