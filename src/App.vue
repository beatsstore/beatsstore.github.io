<template>
  <div id="app" class="fill flex-shrink-0">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="logo.png" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="#">Sobre</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Caracteristicas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Blog</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");
body {
  padding: 0%;
  margin: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(113.96deg, #091358 0%, #40059b 100%);
  color: #fff;
  font-family: "Asap", sans-serif;
}
.nav-link {
  color: #fff;
}
</style>
