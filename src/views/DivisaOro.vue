<template>
    <div>
        <Menu></Menu>
        <div class="cuerpo">
            <h1 class="text-center">DiVisa Oro</h1>
            <p>
                Soy DiVisa un productor musical y beatmakers argentino, 
                trabajo con géneros de música urbanos. Estoy metido en la producción musical aproximadamente desde hace 5 años.
            </p>
            <p>
                Cuando conocí el dubstep por el 2010, de la mano de Skrillex, fue cuando me intereso producir música. 
                En 2016 tuve la oportunidad de poder acceder a un pc y saber cómo se hace. Cuando el trap llegó a España comencé 
                a escuchar a los artistas de ese entonces. El sonido era distinto a lo que escuchaba entonces, ya que escuchaba era 
                 música electrónica, EDM. En ese entonces no era beatmaker, solo era un oyente. Luego en este lado del mundo, los artistas 
                de las plazas, comenzaron a ir a estudios de producción y llegó el trap a la argentina. Fue en ese momento que comencé a 
                aprender para ser beatmaker.
            </p>
            <p>
                Me gusta ser beatmaker, ya que puedo transmitir emociones. Con una progresión de acordes o con una mezcla puedo 
                darle espacio a una canción, llevar al oyente donde quiero y proyectar los sentimientos que deseo, creo que esa 
                es la razón por la cual hago esto, por la expresión, y la libertad de crear cosas bonitas. 
            </p>
            <p>
                Mis aportes en cooking beats, son de la idea inicial del proyecto. Como productor me muevo en las comunidades de este rubro, 
                hablando y conociendo gente maravillosa. Pero con el tiempo me di cuenta del un problema en américa latina, ya que 
                nos vemos obligados a movernos a plataformas anglosajonas, pero eso no es el problema, el problema es las implicancias
                 legales de este acto. Es por esto que al charlarlo con mi primo (quien es el que dirige la programación del sitio), 
                 ddecidimos comenzar este proyecto. Dejamos el proyecto estacionado por un tiempo, y siempre con la intencion de retomarlo. 
                 Es ahora cuando este proyecto comienza a ver la luz.
            </p>
            <p>
                Mis aportes serán como usuario, y productor, probando la web sugiriendo cambios, y haciendo de interventor entre quien 
                programa el sitio, quien mira la parte legal y los productores. De forma que todo esté orientado a beatmaker, 
                pero no queremos dejar de lado a los diseñadores de audio en general. Otra de las cosas que me gustaría aportar es
                con tutoriales, tips, trucos, entre otros, como un pequeño aporte a la comunidad que me ayudó a crecer.
            </p>
            <p>
                Espero que mi historia les sea de ayuda para apoyar a este proyecto, que se que va a ayudar a muchas personas 
                como yo que quieren ganarse la vida con lo que les gusta.
            </p>
            <h2 class="text-bg-color2">Contribucion</h2>   
            <Reproductor v-bind:data="divisa"></Reproductor>
        </div>
    </div>
</template>
<script>
import Menu from "../components/Menu.vue";
import Reproductor from "../components/Reproductor.vue";

export default {
  name: "DivisaOro",
  data(){
    return {
      divisa:[
        {
          "nombre" : "GEE + Presets",
          "categoria" : "",
          "url":"Divisa/GEE - DiVisa Oro.mp3",
          "precio": "1000",
          "linkCompra": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=277413269-c21aad06-251c-4017-8715-9b759826d330"
        }
      ]
    }
  },
  components:{
    Menu,
    Reproductor
  }
}
</script>
<style>
    .cuerpo{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>