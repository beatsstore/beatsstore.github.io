<template>
  <table class="table table-dark border table-responsive table-borderless">
    <tbody>
        <tr class="align-middle" v-for="(pista, i) in data" v-bind:key="i">
            <td>
                <h5>{{pista.nombre}}</h5>
            </td>
            <td>
                <audio v-bind:src="pista.url" buffered controls></audio>
            </td>
            <td>
                <a class="btn btn-primary d-inline-flex" v-bind:href="pista.linkCompra">
                    <span class="material-icons">
                        shopping_cart
                    </span>
                    <p class="">${{ pista.precio }}</p>
                </a>
            </td>
        </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "reproductor",
  props:{
      data: Array
  }
};
</script>