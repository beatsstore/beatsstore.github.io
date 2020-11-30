<template>
  <div id="app" class="fill flex-shrink-0">
    <router-view v-bind:data="divisa"/>
  </div>
</template>
<script>

export default {
  
}
</script>
<style>
/** colores */

html,
body,
main {
    font-family: 'Asap', sans-serif;
    color: #fff;
    height: 100%;
    background-color: #0F0D0E;
    --color1: #CCCCCC;
    --color2: #AE85ED;
    --color3: #FEB808;
    --color4: #0F0D0E;
    --color5: #091358;
    --color6: #40059B;
}

.bg-color1 {
    background: var(--color1);
}

.bg-color2 {
    background: var(--color2);
}

.bg-color3 {
    background: var(--color3);
}

.bg-color4 {
    background: var(--color4);
}

.bg-color5 {
    background: var(--color5);
}

.bg-color6 {
    background: var(--color6);
}

.text-bg-color1 {
    color: var(--color1);
}

.text-bg-color2 {
    color: var(--color2);
}

.text-bg-color3 {
    color: var(--color3);
}

.text-bg-color4 {
    color: var(--color4);
}

.text-bg-color5 {
    color: var(--color5);
}

.text-bg-color6 {
    color: var(--color6);
}

h1 {
    color: var(--color2);
}

.container-fluid {
    width: 95%;
    min-height: 100%;
    display: block;
}

.fill {
    width: auto;
    min-height: 100%;
    height: 100%;
}

.margin-top {
    margin-top: 10%;
}

.card {
    margin: 5%;
}

.img-filter {
    transition: filter 0.5s;
    filter: grayscale(100%);
}

.img-filter:hover {
    filter: grayscale(0%);
}

.patrocinadores {
    width: 30%;
}

.nav-link,
a {
    color: var(--color2);
}

.nav-link:hover,
a:hover {
    color: var(--color2);
}

.btn-primary {
    color: var(--color1);
    background-color: var(--color6);
    border-color: var(--color6);
}

.btn-primary:hover {
    color: var(--color1);
    background-color: var(--color6);
    border-color: var(--color6);
}

.btn-outline-primary {
    border-color: #AE85ED;
    color: #AE85ED;
}

.btn-outline-primary:hover {
    background-color: #AE85ED;
    border-color: #AE85ED;
}

footer {
    position: static;
    margin-bottom: 0;
    left: 0;
    height: 50%;
}

footer p {
    margin: 5%;
}

.col a {
    text-decoration: none;
    color: black;
}

.col-redes,
.col-equipo {
    width: 30%;
}

.cuerpo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5%;
}

.cuerpo p {
    width: 95%;
}


/* audio*/

@media (max-width: 768px) {
    .img-filter {
        filter: grayscale(0%);
    }
}
</style>
