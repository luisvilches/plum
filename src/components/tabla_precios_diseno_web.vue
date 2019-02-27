<template>
  <section>

    <div class="container">
      <div class="row flex-items-xs-middle flex-items-xs-center">
        <div class="col-md-12">
          <h3 class="title">Diseño Web</h3>
        </div>
        <!-- Table #1  -->
        <div class="col-xs-12 col-lg-4">
          <div class="card text-xs-center">
            <div class="card-header">
              <h3 class="display-2">
                <span class="currency">$</span>99.990
                <span class="period">/Desde</span>
              </h3>
            </div>
            <div class="card-block">
              <h4 class="card-title">Landing Page</h4>
              <ul class="list-group">
                <li class="list-group-item">Dominio por un año</li>
                <li class="list-group-item">Hosting 500 MB por un año</li>
                <li class="list-group-item">Email corporativos</li>
                <li class="list-group-item">Formulario de contacto.</li>
                <li class="list-group-item">Conexión a redes sociales.</li>
                <li class="list-group-item">Tiempo de entrega entre 5 a 10 días hábiles</li>
                <li class="list-group-item">Hasta 3 Secciones</li>
              </ul>
              <a href="#" class="btn btn-gradient mt-2">Solicitar</a>
            </div>
          </div>
        </div>

        <!-- Table #1  -->
        <div class="col-xs-12 col-lg-4">
          <div class="card text-xs-center">
            <div class="card-header">
              <h3 class="display-2">
                <span class="currency">$</span>149.000
                <span class="period">/Desde</span>
              </h3>
            </div>
            <div class="card-block">
              <h4 class="card-title">One Page</h4>
              <ul class="list-group">
                <li class="list-group-item">Dominio por un año</li>
                <li class="list-group-item">Hosting 1 GB por un año</li>
                <li class="list-group-item">Formulario de contacto.</li>
                <li class="list-group-item">Conexión a redes sociales.</li>
                <li class="list-group-item">Tiempo de entrega entre 5 a 10 días hábiles</li>
                <li class="list-group-item">Diseño personalizado</li>
                <li class="list-group-item">Hasta 5 Secciones</li>
              </ul>
              <a href="#" class="btn btn-gradient mt-2">Solicitar</a>
            </div>
          </div>
        </div>

        <!-- Table #1  -->
        <div class="col-xs-12 col-lg-4">
          <div class="card text-xs-center">
            <div class="card-header">
              <h3 class="display-2">
                <span class="currency">$</span>199.000
                <span class="period">/Desde</span>
              </h3>
            </div>
            <div class="card-block">
              <h4 class="card-title">Sitio Web</h4>
              <ul class="list-group">
                <li class="list-group-item">Dominio por un año</li>
                <li class="list-group-item">Hosting 1 GB por un año</li>
                <li class="list-group-item">Formulario de contacto.</li>
                <li class="list-group-item">Conexión a redes sociales.</li>
                <li class="list-group-item">Tiempo de entrega entre 10 a 15 días hábiles</li>
                <li class="list-group-item">Diseño personalizado</li>
                <li class="list-group-item">Hasta 5 Paginas</li>
              </ul>
              <a href="#" class="btn btn-gradient mt-2">Solicitar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TablaPrecios"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");

h3.title{color: #FCFCFC;}

.row {
  min-height: 100vh;
}

.card {
  border: 0;
  border-radius: 3px;
  -webkit-box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  padding: 2.25rem 0;
  position: relative;
  will-change: transform;
}
.card:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 5px;
  background-color: #1A1F35;
  transition: 0.5s;
}
.card:hover {
  transform: scale(1.05);
  -webkit-box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);
}
.card:hover:after {
  width: 100%;
}
.card .card-header {
  background-color: white;
  padding-left: 2rem;
  border-bottom: 0px;
}
.card .card-title {
  margin-bottom: 1rem;
}
.card .card-block {
  padding-top: 0;
}
.card .list-group-item {
  border: 0px;
  padding: 0.25rem;
  color: #808080;
  font-weight: 300;
}

.display-2 {
  font-size: 4.5rem;
  letter-spacing: -0.5rem;
}
.display-2 .currency {
  font-size: 1.75rem;
  position: relative;
  font-weight: 400;
  top: -45px;
  letter-spacing: 0px;
}
.display-2 .period {
  font-size: 1rem;
  color: #b3b3b3;
  letter-spacing: 0px;
}

.btn {
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  color: #a6a6a6;
  border-radius: 0;
  padding: 0.75rem 1.25rem;
  letter-spacing: 1px;
}

.btn-gradient {
  background-color: #f2f2f2;
  transition: background 0.3s ease-in-out;
  border-radius: 100px;
}
.btn-gradient:hover {
  color: white;
  background-color: #1A1F35;
}
</style>
