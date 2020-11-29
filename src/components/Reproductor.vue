<template>
  <table class="table table-borderless border">
    <tbody>
        <tr class="align-middle" v-for="(pista, i) in data" v-bind:key="i">
            <td>
                <h4>{{pista.nombre}}</h4>
            </td>
            <td>
                <audio v-bind:src="pista.url" buffered controls></audio>
            </td>
            <td>
                #precio
            </td>
            <td>
                <a class="btn btn-success" v-bind:href="pista.linkCompra" type="button">Comprar</a>
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