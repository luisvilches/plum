<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-left">
          <div class="row">
              <div class="col-md-6">
                <h2>¿Quienes <br> Somos?</h2>
                <br>
                <p>Somos un equipo de experto enfocados en satisfacer las necesidades de nuestros clientes basándonos en nuestro conocimiento y profesionalismo.</p>
              </div>
              <div class="col-md-6">
                  <img src="../assets/s11.svg" alt="" class="img-fluid">
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "nosotros",
  components: {}
};
</script>

<style scope>
section {
  padding: 100px 20px;
}
.divider {
  height: 100px;
}
.pd {
    padding-top: 100px;
}

h6 {
  margin-bottom: 60px;
}

.perfil img {border-radius: 100%; max-width: 250px;margin:0 auto;display: block;}
.perfil h4{margin-top: 60px;}
.fab{margin:0 20px;font-size: 20px;cursor: pointer;}

.fab:hover{
    color: #ccc;
}

h2 {
  font-size: 60px;
  text-align: left;
  padding-top: 60px;
  color: #FCFCFC;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

@media(max-width:768px){
    section{
        padding: 30px;
    }

    .perfil img {margin:30px auto;}
}

@media(max-width:768px){
    h2{
        font-size: 45px;
    }
}
</style>

