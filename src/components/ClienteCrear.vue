<template>
  <h1>Crear cliente</h1>
  <h2 v-if="mensaje">{{ mensaje }}</h2>
  <div class="submit-form">
    <div class="form-group">
      <label for="nombre">nombre</label>
      <input type="text" name="nombre" id="nombre" v-model="cliente.nombre" required>
    </div>
    <div class="form-group">
      <label for="apellidos">apellidos</label>
      <input type="text" name="apellidos" id="apellidos" v-model="cliente.apellidos" required>
    </div>
    <div class="form-group">
      <label for="localidad">localidad</label>
      <input type="text" name="localidad" id="localidad" v-model="cliente.direccion.localidad" required>
    </div>
    <button class="btn btn-success"
      @click="crearCliente">Crear</button>
  </div>
</template>

<script>
import ClienteDataService from '@/services/ClienteDataService';

export default {
  name: 'cliente-crear',
  data() {
    return {
      cliente: {
          "nombre": "",
          "apellidos": "",
          "direccion": {
              "localidad": ""
          }
      },
      mensaje: "",
    }
  },
  methods: {
    crearCliente() {
      ClienteDataService.create(this.cliente)
        .then(response => {
          console.log(response);
          console.log(response.data.data);
          if (response.status == 201) {
            this.mensaje = "Cliente creado"
          } else {
            this.mensaje = "Problemas al crear Cliente"
          }
        })
        .catch(e => console.log(e));
    }
  }
}
</script>

<style>

</style>