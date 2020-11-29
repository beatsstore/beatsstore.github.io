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
          "nombre" : "GEE + Presets",
          "url":"Divisa/GEE - DiVisa Oro.mp3",
          "precio": "1000",
          "linkCompra": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=277413269-c21aad06-251c-4017-8715-9b759826d330"
        }
      ]
    }
  }
}
</script>
