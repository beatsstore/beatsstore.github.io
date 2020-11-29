<template>
    <div>
        <Menu></Menu>
        <div class="container-fluid">
            
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Menu from "../components/Menu.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "FinalizarCompra",
    components:{
        Menu, 
        Footer
    }
}
</script>