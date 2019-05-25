<template>
    <footer>
        <div class="container text-left contact">
            <div class="row">
                
                <div class="col-md-4 pd">
                    <h5>¿Qué es Plumtech?</h5>
                    <br>
                    <!-- <p>Somos una Software Factory especializada en el desarrollo de software y aplicaciones a medida</p> -->
                    <P><strong>Plumtech</strong> es una empresa especializada en el desarrollo de Software a Medida y Aplicaciones Móviles.</P>
                </div>

                <div class="col-md-4">
                    <ul>
                        <li><h5>Contacto</h5></li>
                        <li><img src="../assets/send.png" alt=""> hola@plumtech.nl</li>
                        <li><img src="../assets/phone.png" alt=""> +56 9 84923552</li>
                    </ul>
                </div>

                <div class="col-md-4 patners">
                    <ul>
                        <li><h5>Nuestros partners</h5></li>
                        <li><a href=""><img src="../assets/logo_caverna.png" alt="" class="img-fluid caverna"></a></li>
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