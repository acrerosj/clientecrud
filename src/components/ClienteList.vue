<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Lista de Clientes</h1>
        <ul class="list-group">
          <li 
            class="list-group-item"
            v-for="(cliente, index) in clientes"
            :key="index"
            @click="seleccionaCliente(cliente)"
          >
            {{ cliente.nombre }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h1>Detalle del cliente</h1>
        <div v-if="currentCliente">
          <h2>Nombre: {{ currentCliente.nombre }}</h2>
          <h3>Apellidos: {{ currentCliente.apellidos }}</h3>
          <h3>Localidad: {{ currentCliente.direccion.localidad }}</h3>
          <h3 v-if="currentCliente.direccion.calle">Calle: {{ currentCliente.direccion.calle }}</h3>
          <h3 v-if="currentCliente.cuenta">Correo: {{ currentCliente.cuenta.email }}</h3>
          <button class="btn btn-danger" @click="eliminarCliente(currentCliente)">Eliminar</button>
          <router-link :to="/clientes/ + currentCliente.id" class="btn btn-secondary">Editar</router-link>
        </div>
        <div v-else>
          <h3>Selecciona un cliente</h3>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import ClienteDataService from "../services/ClienteDataService"

export default {
  name: 'cliente-list',
  data() {
    return {
      clientes: [],
      currentCliente: null,
    }
  },
  methods: {
    cargarClientes() {
      // fetch('http://localhost:3000/api/clientes')
      // .then(res => res.json())
      // .then(data => this.clientes= data.data.clientes)
      // .catch(e => console.log(e));
      ClienteDataService.getAll()
        .then(response => {
          console.log(response);
          this.clientes= response.data.data.clientes;
        })
        .catch(e => console.log(e));
    },
    seleccionaCliente(cliente) {      
      ClienteDataService.get(cliente.id)
      .then(response => {
          console.log(response);
          this.currentCliente= response.data.data;
        })
        .catch(e => console.log(e));
    },
    eliminarCliente(cliente) {
      ClienteDataService.delete(cliente.id)
        .then(response => {
          console.log(response);
          this.currentCliente=null;
          this.cargarClientes();
        })
        .catch(e => console.log(e));
    }
  },
  mounted() {
    this.cargarClientes();
  }
}
</script>

<style>

</style>