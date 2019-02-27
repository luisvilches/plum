<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-left">
          <div class="row">
              <div class="col-md-6">
                <h2>Outosurcing <br> IT</h2>
              </div>
              <div class="col-md-6">
                  <img src="../assets/support.png" alt="" class="img-fluid">
              </div>
          </div>
        </div>
      </div>


      <div class="divider"></div>


    </div>
  </section>
</template>


<script>
export default {
  name: "it",
  components: {}
};
</script>

<style scope>
section {
  padding: 200px 20px;
}

img {
  max-width: 100%;
  padding-top: 20px;
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
}

@media(max-width:768px){
    h2{
        font-size: 45px;
    }
}
</style>

