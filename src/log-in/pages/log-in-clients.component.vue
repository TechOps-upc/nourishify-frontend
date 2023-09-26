<template>
  <div class="container">
    <div class="image-container">
      <img src="/log-in-images/food-log-in.png" alt="Description of the Image" class="login-image">
    </div>
    <div class="form-container">
      <log-in-form user-role="client"/>
    </div>
  </div>
</template>

<script>
import LogInForm from '@/log-in/components/log-in-form.component.vue';

export default {
  components: {
    LogInForm
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 70vh;
  margin-top: 5%;
}

.image-container, .form-container {
  flex: 1;  /* Ocupa la mitad del espacio disponible en el contenedor principal */
  display: flex;
  align-items: center; /* Centra el contenido verticalmente */
  justify-content: center; /* Centra el contenido horizontalmente */
}

.login-image {
  width: 80%;
}

.log-in-form {
  width: 80%; /* Ajusta según necesidad */
}
</style>