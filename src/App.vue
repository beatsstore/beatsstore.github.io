<template>
  <div id="app" class="fill flex-shrink-0">
    <router-view v-bind:data="divisa"/>
  </div>
</template>
<script>

export default {
  data(){
    return {
      divisa:[
        {
          "nombre" : "Chaos Best",
          "url":"Divisa/Caos_CHAOS_ULTIMATE_BEAT_CONTEST_8a8aabf812.mp3",
          "precio": "250",
          "linkCompra": "https://mpago.la/2jivmGP"
        }
      ]
    }
  }
}
</script>
