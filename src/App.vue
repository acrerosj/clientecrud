<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">DAW</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/clientes" class="nav-link">Clientes</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/clientes/crear" class="nav-link">Crear cliente</router-link>
      </li>
      <li class="nav-item">

      </li>
    </div>
  </nav>
  <div class="container mt-3">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
