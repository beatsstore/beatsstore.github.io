<template>
  <div class="container">
    <div class="row completo">
      <div class="col-sm d-flex align-items-center">
        <div>
          <h1><b>Cooking Beats</b></h1>
          <p class="size: 24px">
            la menera mas facil de vender y comprar audio en latinoamerica.
          </p>
        </div>
      </div>
      <div class="col-sm d-flex align-items-center">
        <img src="imagen1.png" alt="" style="width: auto%; height: 100%;" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Reproductor from "@/components/Reproductor.vue";
export default {
  name: "Home",
};
</script>
<style>
.completo,
.container {
  position: absolute;
  height: 85%;
  width: 95%;
  top: 10%;
  right: 5%;
}

.completo {
  background: rgba(204, 204, 204, 0.5);
  backdrop-filter: blur(30px);
  border-radius: 20px;
}

.completo .col-sm {
  width: 50%;
  vertical-align: center;
}
</style>
