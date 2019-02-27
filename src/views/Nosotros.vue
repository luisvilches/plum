<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-left">
          <div class="row">
              <div class="col-md-6">
                <h2>¿Quienes <br> Somos?</h2>
                <p>Somos un equipo de experto enfocados en satisfacer las necesidades de nuestros clientes basándonos en nuestro conocimiento y profesionalismo.</p>
              </div>
              <div class="col-md-6">
                  <img src="../assets/team.png" alt="" class="img-fluid">
              </div>
          </div>
        </div>
      </div>


      <div class="divider"></div>


      <div class="row pd">
        <div class="col-md-4 perfil text-center">
          <div class="row">
            <div class="col-md-12">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ApwVueltefGn8j_gJmKvGIPzQpqU4jJcUt2wGSHGqG_YsN7BTA"
                class="img-fluid"
                alt
              >
              <h4>Luis Vilches Abarca</h4>
              <h6>Gerente General</h6>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div class="col-md-4 perfil text-center">
          <div class="row">
            <div class="col-md-12">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ApwVueltefGn8j_gJmKvGIPzQpqU4jJcUt2wGSHGqG_YsN7BTA"
                class="img-fluid"
                alt
              >
              <h4>Cristhoper Morales</h4>
              <h6>Gerente de Operaciones</h6>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div class="col-md-4 perfil text-center">
          <div class="row">
            <div class="col-md-12">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ApwVueltefGn8j_gJmKvGIPzQpqU4jJcUt2wGSHGqG_YsN7BTA"
                class="img-fluid"
                alt
              >
              <h4>Mirianyelys Castro</h4>
              <h6>Administración y Finanzas</h6>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
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
  padding: 200px 20px;
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

/* .perfil{margin-bottom:80px;} */
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

