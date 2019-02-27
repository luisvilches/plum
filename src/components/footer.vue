<template>
    <footer>
        <div class="container text-left contact">
            <div class="row">
                
                <div class="col-md-4 pd">
                    <h5>VMService</h5>
                    <br>
                    <p>Somos un equipo de profesionales, comprometidos y preparados para las exigencias actuales del mercado, poniendo a disposición de nuestros clientes todas las herramientas necesarias para una gestión eficiente de su empresa.</p>
                </div>

                <div class="col-md-4">
                    <ul>
                        <li><h5>Contacto</h5></li>
                        <li><img src="../assets/send.png" alt=""> hola@vmservice.cl</li>
                        <li><img src="../assets/phone.png" alt=""> +56 9 84923552</li>
                        <li><img src="../assets/location.png" alt=""> San Antonio #19 - Piso 7 Of. 702</li>
                    </ul>
                </div>

                <div class="col-md-4 patners">
                    <ul>
                        <li><h5>Nuestros partners</h5></li>
                        <li><br><a href=""><img src="../assets/logo_plumtech.png" alt="" class="img-fluid plum"></a> <br><br><br> <a href=""><img src="../assets/logo_caverna.png" alt="" class="img-fluid caverna"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
    footer{padding: 100px 10px;}
    .patners .plum{max-width: 150px; position: relative; top:-4px;}
    .patners .caverna{max-width: 100px;margin-left: 10px;}

    .pd{padding-top:10px}

    .contact img{
        position: relative;
        top: -5px;
        margin-right: 10px;
    }

    ul li{
        list-style: none;
        padding: 10px 0;
    }

    @media(max-width:768px){
    ul{
        padding: 0px;
    }
}
</style>