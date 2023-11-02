<template>
  <div class="main-container">
    <div class="appointments-container flex gap-6 overflow-x-auto">
      <appointment-component
          v-for="client in filteredClients"
          :key="client.id"
          :client="client"
          @seeProgress="viewProgress(client)"
      />
    </div>
    <nutritionist-toolbar></nutritionist-toolbar>
  </div>
</template>

<script>
import appointmentComponent from '../components/appointments.component.vue'
import http from '../service/appnutri-api.service.js'
import nutritionistToolbar from "@/shared/components/nutritionist-toolbar.component.vue";

export default {
  components: {
    nutritionistToolbar,
    appointmentComponent,

  },
  data() {
    return {
      nutritionist: {},
      clients: []
    }
  },
  computed: {
    filteredClients() {
      return this.clients.filter(client => this.nutritionist.patients.includes(client.id))
    }
  },
  methods: {
    viewProgress(client) {
      // Implementa aquí la lógica para visualizar el progreso del cliente
    },
    fetchNutritionistData() {
      const nutritionistId=this.$route.params.id;
      http.get(`/nutritionists/${nutritionistId}`).then(response => {
        this.nutritionist = response.data;
      })
    },
    fetchClientsData() {
      http.get('/clients').then(response => {
        this.clients = response.data;
      })
    }
  },
  created() {
    this.fetchNutritionistData();
    this.fetchClientsData();
  }
}
</script>

<style scoped>
.appointments-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto; /* Esto permite que la lista sea desplazable verticalmente si hay muchos elementos */
  /* Esto establece que el contenedor ocupe toda la altura de la vista */
  justify-content: center; /* Esto centra los elementos horizontalmente */
  align-items: center; /* Esto centra los elementos verticalmente */
  width: max-content;
  /* Esto ajustará el ancho del contenedor al ancho máximo de sus hijos */
  margin: 0 auto; /* Esto centrará el contenedor en el eje horizontal */
}

</style>
