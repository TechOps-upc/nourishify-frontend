<template>

  <div class="flex-container">
    <toolbar-component></toolbar-component>
  </div>

  <div class="professional-profile">
    <div class="professional-header">
      <h1>Professional Profile</h1>
      <button class="p-button p-button-secondary">Schedule Appointment</button>
    </div>

    <div class="professional-info">
      <!-- Tarjeta con la foto y datos personales -->
      <div class="p-card professional-card">
        <div class="photo-box">
          <img :src="nutritionist.photo" alt="Nutritionist Photo" class="p-card-image" />
        </div>
        <div class="info-box">
          <div class="p-card-title">{{ nutritionist["full-name"] }}</div>
          <div class="p-card-content">
            <div>
              <i class="pi pi-calendar"></i> Age: {{ nutritionist.age }}
            </div>
            <div>
              <i class="pi pi-briefcase"></i> Experience: {{ nutritionist.experience_years }} years
            </div>
            <div>
              <i class="pi pi-users"></i> Number of Patients: {{ nutritionist.patients }}
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjeta con la educación -->
      <div class="p-card education-card">
        <div class="p-card-title">Education</div>
        <div class="p-card-content">
          {{ nutritionist.education }}
        </div>
      </div>
    </div>

    <div class="professional-review">
      <button class="p-button p-button-primary">See Review</button>
    </div>
  </div>
</template>

<script>

import toolbarComponent from "@/shared/components/client-toolbar.component.vue";






import httpSearchNutritionist from "@/cliente-sidebar/search-nutritionist/service/http-search-nutritionist.js";

export default {

    components: {
      toolbarComponent,

    },



  name: "ProfessionalProfile",
  data() {
    return {
      nutritionist: null,
    };
  },
  created() {
    const nutritionistId = this.$route.params.id;

    httpSearchNutritionist.get(`/nutritionists/${nutritionistId}`)
        .then((response) => {
          this.nutritionist = response.data;
        })
        .catch((error) => {
          console.error('Error loading nutritionist details:', error);
        });
  },
};

</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
}
</style>


<style scoped>
.professional-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5; /* Cambia el fondo a un color gris claro */
  border-radius: 10px; /* Añade bordes redondeados */
}

.professional-card,
.education-card {
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100%;
  border: 1px solid #ddd; /* Cambia el borde a un color más claro */
  border-radius: 10px;
  background-color: #fff; /* Fondo blanco para las tarjetas */
}

.p-card-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.p-card-title {
  font-size: 1.8rem; /* Tamaño de título más grande */
  font-weight: bold;
  margin: 0; /* Elimina el margen superior del título */
  color: #333; /* Cambia el color del título a un gris más oscuro */
}

.p-card-content {
  font-size: 1.2rem; /* Tamaño de contenido más grande */
}

.professional-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px; /* Espaciado superior para centrar */
}

button.p-button-secondary {
  background-color: #40e381; /* Color de botón secundario */
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left:80px;
}

button.p-button-secondary:hover {
  background-color: #2354b2; /* Color de botón secundario al pasar el mouse */
}

.professional-review button {
  background-color: #40e381;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.professional-review button:hover {
  background-color: #30c66c;
}



</style>
<script setup>
</script>