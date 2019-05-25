<template>
  <div>
    <section>
      <div class="container text-left">
        <div class="row">
          <div class="col-md-12 text-left">
            <div class="row">
              
              <div class="col-md-6">
                <h2>¿Hablemos?</h2>
                <p class="sub">Escríbenos tu consulta y responderemos a la brevedad.</p>
                <img src="../assets/s10.svg" alt class="img-fluid">
              </div>

              <div class="col-md-6">
                <div class="row text-left form">
                  <!-- <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-6">
                        <label for>Nombre</label>
                        <input type="text" class="form-control">
                      </div>
                      <div class="col-md-6">
                        <label for>Teléfono</label>
                        <input type="text" class="form-control">
                      </div>
                      <div class="col-md-12">
                        <label for>Correo</label>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <br>
                    <label for>Mensaje</label>
                    <textarea name class="form-control" id cols="0" rows="6"></textarea>
                  </div>

                  <div class="col-md-12 text-right">
                    <br>
                    <button>Enviar</button>
                  </div> -->
                  <h2 style="margin-top:40px">hola@plumtech.ml</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  min-height: 500px;
  padding: 100px 0px 20px 0;
}

.form{padding: 100px 60px;}

h2 {
  font-size: 60px;
  text-align: left;
  color: #fcfcfc;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
}

button {
  border: none;
  background: #fcfcfc;
  color: #1a1f35;
  border-radius: 100px;
  padding: 10px 40px;
}

.form-control {
  border-radius: 3px;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  h2 {
    font-size: 25px;
    text-align: center;
  }

  p{text-align: center;}

  section {
    padding-top: 20px 20px;
  }

  .form {
    padding: 0px;
  }
}
</style>

