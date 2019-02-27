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

                <ul>
                  <li>
                    <img src="../assets/send.png" alt> hola@vmservice.cl
                  </li>
                  <li>
                    <img src="../assets/phone.png" alt> +56 9 84923552
                  </li>
                  <li>
                    <img src="../assets/location.png" alt> San Antonio #19 - Piso 7 Of. 702
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <img src="../assets/contact.png" alt class="img-fluid">
              </div>
            </div>
          </div>
        </div>
        <div class="row text-left form">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-4">
                <label for>Nombre</label>
                <input type="text" class="form-control">
              </div>
              <div class="col-md-4">
                <label for>Correo</label>
                <input type="text" class="form-control">
              </div>
              <div class="col-md-4">
                <label for>Teléfono</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <br>
            <label for>Mensaje</label>
            <textarea name class="form-control" id cols="30" rows="10"></textarea>
          </div>

          <div class="col-md-12 text-right">
            <br>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </section>
    <div class="embed-responsive embed-responsive-21by9">
      <iframe
        class="embed-responsive-item"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2536751207945!2d-70.64972478476786!3d-33.442696904500586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a1affafc83%3A0xe409d3affb8ae047!2sSan+Antonio+19%2C+Santiago%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses-419!2scl!4v1551293165117"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
section {
  min-height: 500px;
  padding: 150px;
}
iframe {
  width: 100% !important;
  margin-top: 80px;
}

.form {
  padding-top: 60px;
}

h2 {
  font-size: 60px;
  text-align: left;
  padding-top: 60px;
  color: #fcfcfc;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
}

p.sub {
  margin-bottom: 60px;
  font-size: 20px;
}

button {
  border: none;
  background: #fcfcfc;
  color: #1a1f35;
  border-radius: 100px;
  padding: 10px 40px;
}

.form-control {
  border-radius: 0;
}

ul li {
  list-style-type: none;
  margin: 60px 0;
}

ul li img{
  margin-right: 20px;
}

@media (max-width: 768px) {
  h2 {
    font-size: 45px;
  }

  section {
    min-height: 500px;
    padding: 30px;
  }

  .form {
    padding-top: 30px;
  }
}
</style>

