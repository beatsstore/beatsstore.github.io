<template>
  <div class="about">
    <Menu></Menu>
      <div class="cuerpo">
          <h1 class="text-center">Cooking Beats</h1>
          <p>
            Si estas leyendo esto seguramente quieres saber más sobre como y por que queremos hacer este marketplace de instrumentales. 
            Bien, cuando uno comienza en el mundo del diseño de sonido y la producción musical se encuentra con algunos problemas legales. 
            Como el de vender en plataformas extranjeras, y cobrando en dólares, para luego hacer el cambio a la moneda del propio país. 
            Pero teniendo en cuenta que hay ciertas restricciones a las importaciones y ventas al exterior son temas a tener en cuenta. 
            Muchas veces se recurre a buscar otros medios de venta para poder generar algunas ganancias con este rubro.
          </p>
          <p>
            Es por esto que nos propusimos solucionar este problema, ya que son muchos los productores de audio, cantantes, sonidistas, 
            que buscan alguna plataforma donde vender y comprar audio se ven en el dilema de no saber que se hace con sus obras y adoptar 
            estrategias que toman mucho tiempo y son poco eficientes.
          </p>
          <p>
            Bien cooking beats es esto, un emprendimiento para poder poner solución a este problema.
          </p>
          <h1 class="text-center">Plataforma</h1>
          <p>
            Teniendo en cuenta lo rápido que avanzan las tecnologías, y lo decidimos usar algunos de los lenguajes modernos, y algunas de las
             plataformas más estables. De esta manera vamos a poder tener una plataforma estable, y escalable. No queremos tener que estar 
             parados por un año cambiando muchas cosas o no tener fallos que no podemos arreglar. Es por eso que el desarrollo va a llevar 
             tiempo, pero como no queremos dejarlos a la espera escribiremos un blog de desarrollo, por que nos gustaría compartir cómo crece 
             este proyecto. 
          </p> 
          <h1 class="text-center">El plan</h1>
          <p>
            El plan es el siguiente, la mayoría de todos los proyectos necesitan capital para poder comenzar, para luego poder crecer, 
            en nuestro caso crecer más rápido. Pero nos da un poco de cosa pedir capital sin dar nada a cambio, eso hiere nuestro orgullo. 
            Es por eso que estamos dando a cambio de una contribución beneficios en nuestro caso, beats, samples y el mejor un sample mas 
            membresía por 6 meses, la cual otorga ventajas extras sobre la freemium.
          </p>
          <p>
            De esta manera en estos meses podemos seguir avanzando cubriendo los costos del diseño de las licencias, el sistema de ecommerce, 
            y algunas personitas que nos ayudaran con el diseño del sitio.
          </p>
          <h1 class="text-center">Patrocinadores</h1>
          <p>
            El patrocinio es una de las mejores formas de ayuda con un proyecto como este, ya que significa que hay un aporte monetario, 
            o de trabajo. En el segundo caso es el que más nos conviene, ya que las personas que den una mano en el desarrollo se sentirán 
            como parte del proyecto y de hecho los son. ¿Cómo puede volverte patrocinador? Bueno primero tienes que contactar con nosotros 
            vía mail, y segundo tienes que decirnos en que puede ayudar, que es lo que esperas a cambio, y mostrarnos algunos ejemplos tuyos 
            de trabajos.
          </p>
          <p>
            ¿Por qué toda esta formalidad? Simplemente queremos saber de tus habilidades, de forma de entender si es necesaria tu ayuda o
            si es lo que te conviene a ti. Es importante para nosotros esta parte ya que como queremos ayudar lo antes posibles a productores
            , cantantes y diseñadores de audio, tenemos que crecer rápidamente.
          </p>
      </div>
    
    <Footer></Footer>
  </div>
</template>
<script>
import Menu from "../components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Sobre",
  components:{
    Menu,
    Footer
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