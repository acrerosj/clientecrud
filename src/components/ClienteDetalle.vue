<template>
  <h2>Editar cliente</h2>
  <div class="submit-form" v-if="cliente">
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
      @click="modificarCliente">Crear</button>
  </div>
</template>

<script>
import ClienteDataService from '@/services/ClienteDataService'
export default {
  name: 'cliente-detalle',
  data() {
    return {
      cliente: null,
    }
  },
  methods: {
    modificarCliente() {

    }
  },
  mounted() {
    ClienteDataService.get(this.$route.params.id)
    .then(response => {
          console.log(response);
          this.cliente= response.data.data;
        })
        .catch(e => console.log(e));
  }
}
</script>

<style>

</style>