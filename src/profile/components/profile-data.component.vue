<script>
import { getUserById } from '../service/users-data-api.service.js';

    export default {
      data() {
        return {
          user: {}
        };
      },
      computed: {
        userId() {
          return this.$route.params.id;
        }
      },
      async created() {
        try {
          const response = await getUserById(this.userId);
          this.user = response.data;
        } catch (error) {
          console.error("Error obteniendo el usuario:", error);
        }
      }
    };

</script>

<template>
  <div class="profile-container">
    <!-- Cliente Foto -->
    <img :src="user.photo" alt="User Photo" class="user-photo">

    <!-- Datos del Cliente -->
    <div class="data-container">
      <div class="column-container">
        <div class="data-box"><strong>Full Name:</strong> {{ user["full-name"] }}</div>
        <div class="data-box"><strong>Address:</strong> {{ user.address }}</div>
        <div class="data-box"><strong>Email:</strong> {{ user.email }}</div>
      </div>
      <div class="column-container">
        <div class="data-box"><strong>Phone:</strong> {{ user.phone }}</div>
        <div class="data-box"><strong>Plan:</strong> {{ user.plan }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>/* ... tu CSS anterior ... */

.profile-container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Limita el ancho y asegura que se centre */
  max-width: 500px;
  margin: 0 auto;

  /* Quitamos la definición de altura */
  /* height: 70vh; */
}

.user-photo {
  width: 200px;
  height: 200px;
  border-radius: 25px;
  object-fit: cover;
  margin-bottom: 10px;  /* Reducimos el margen */
}

.data-container {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.data-box {
  background-color: #D1EEB4;
  padding: 20px;  /* Reducimos el padding */
  margin: 3px 0;  /* Reducimos el margen */
  border-radius: 5px;
  width: 100%;
}
.data-container {
  display: flex; /* Establece el diseño en flex */
  flex-direction: row; /* Alinea los contenedores de columnas en horizontal */
  width: 100%;
  justify-content: space-between; /* Espacio entre columnas */
}

.column-container {
  display: flex;
  flex-direction: column;
  width: 45%; /* Establece el ancho para dar espacio entre las dos columnas */
}

/* ... Resto de tu CSS ... */


</style>

