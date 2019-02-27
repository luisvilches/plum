<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Servicios</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 service">
          <div class="row">
            <div class="col-md-6">
              <img src="../assets/rrhh.png" alt class="img-fluid">
            </div>
            <div class="col-md-6 text-left">
              <h4>Outsourcing RRHH</h4>
              <div class="service-body">
                <p>Implementamos servicios de externalización para la ejecución de funciones específicas, relacionadas con recursos humanos al negocio de nuestros clientes.</p>
              </div>
              <button>Ver mas</button>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="service">
            <div class="row">
              <div class="col-md-6 text-left">
                <h4>Outsourcing IT</h4>
                <div class="service-body">
                  <p>Deja la informática en manos de expertos y dale foco a las cosas importantes de tu negocio.</p>
                  <ul class="text-left">
                    <li>Soporte Técnico</li>
                    <li>Soporte de Usuarios</li>
                    <li>Personal de Apoyo</li>
                  </ul>
                </div>
                <button>Ver mas</button>
              </div>
              <div class="col-md-6">
                <img src="../assets/support.png" alt class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="service">
            <div class="row">
              <div class="col-md-6">
                <img src="../assets/socialmedia.png" alt class="img-fluid">
              </div>
              <div class="col-md-6 text-left">
                <h4>Servicios Digitales</h4>
                <div class="service-body">
                  <p>Tenemos todo lo que necesitas para impulsar tu negocio en Internet de una forma efectiva y profesional. Digitalizamos tu empresa y te ayudamos a llegar a millones de potenciales clientes que buscan tus servicios en la red.</p>
                </div>
                <button>Ver mas</button>
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
section {
  padding: 100px;
}
h2 {
  color: #fcfcfc;
  margin-bottom: 80px;
  font-size: 30px;
}

.service {
  padding: 60px 0;
}
.service img {
  max-width: 280px;
  width: 100%;
}
.service .service-body {
  min-height: 160px;
}
.service .service-body p, .service .service-body ul li {
  color: #fcfcfc;
}
.service h4 {
  margin-bottom: 20px;
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
    section{
        padding: 30px;
    }

    img{
        margin: 40px auto;
    }
}
</style>
