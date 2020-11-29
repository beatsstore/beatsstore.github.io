<template>
    <main>
        <div class="container-fluid" id="cookingbeat">
          <div class="row margin-top">
              <div class="col-sm">
  
              </div>
              <div class="col-md ">
                  <h1 class="text-center"> Cooking Beats </h1>
                  <p>¿Donde vendo mis instrumentales?¿Hay alguna aplicación donde hacerlo?
                      ¿Salgo ganando si uso alguno de estos sistemas? 
                      Estas y muchas otras preguntas se escuchan en los rincones donde se reúnen los músicos y productores. </p>
                  <p>
                      Es por eso que nosotros estamos planificando 
                      poner en funcionamiento una plataforma para vender 
                      tus samples subidos a soundcloud.
                  </p>
                  <p>
                      Somos <b>Cooking Beats</b> 
                      un emprendimiento para ofrecer una solución a estos problemas, 
                      para poder ayudar a quienes están comenzando o quienes quieren darse a conocer, y por qué no hacer amigos.
                  </p>
                  <p class="text-center">
                      <router-link class="btn btn-primary align-middle" to="/sobre">Ver Mas</router-link>
                  </p>
              </div>
          </div>
        </div>
        <div class="container-fluid" id="plataforma">
          <div class="row margin-top">
            <div class="col-sm">
                <h1 class="text-center">
                    Plataforma
                </h1>
                <p>
                    Unos de los problemas principales que tiene mucho productores es el medio por donde vender.
                     Otro es el registro de sus obras los cual es complicado y no hace facil la creacion de obras
                    derivadas.
                </p>
                <p>
                    Nosotros estamos pensando en todos los aspectos  legales y estamos diseñando licencias de uso, 
                    lo cual facilita mas la venta y el uso de las pistas. 
                </p>
                <p>
                    Nos gustaria que nos dejes comentarios sobre cosas que quizas te preocupan y quisieras saber si estamos al tanto. 
                    Te dejamos nuestras redes abajo.
                </p>
                <p>
                    Blog de Desarrollo
                </p>
              </div>
              <div class="col-sm">
              </div>
          </div>
        </div>
        <div class="container-fluid" id="constribucion">
          <div class="row margin-top">
            <div class="col-sm">
              <h1 class="text-center">Constribucion</h1>
              <ul class="nav justify-content-center text-center" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#divisa" role="tab" aria-controls="divisa"
                    aria-selected="true">
                      <img src="divisa.jpeg" alt="" width="100px" class="rounded-circle">
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="" data-toggle="tab" href="#franco" role="tab" aria-controls="franco" aria-selected="false">
                      <img src="francoPerfil.jpg" alt="" width="100px" class="rounded-circle">
                  </a>
                </li>
              </ul>
              <hr>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="divisa" role="tabpanel" aria-labelledby="franco-tab">
                  <div class="row">
                    <p>Soy DiVisa un productor musical y beatmakers argentino, 
                trabajo con géneros de música urbanos, espero que nos apolles :)</p>
                    <Reproductor v-bind:data="data"></Reproductor>
                  </div>
                </div>
                
                <div class="tab-pane fade" id="franco" role="tabpanel" aria-labelledby="franco-tab">Food truck fixie
                  locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,
                  blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
                  Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                  PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS
                  salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                  sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester
                  stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
                <!--
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape
                  wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack
                  lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
                  locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify
                  squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie
                  etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog
                  stumptown. Pitchfork sustainable tofu synth chambray yr.</div>
                  -->
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
    </main>
</template>

<script>
import Footer from "@/components/Footer.vue";
// @ is an alias to /src
import Reproductor from "@/components/Reproductor.vue";
export default {
  name: "Home",
  components:{
    Reproductor,
    Footer
  },
  props:{
    data: Array,
  }
};
</script>
