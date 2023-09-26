<template>
  <div class="container">
    <div class="image-container">
      <img src="/log-in-images/food-log-in.png" alt="Description of the Image" class="login-image">
    </div>
    <div class="form-container">
      <log-in-form user-role="nutritionist"/>
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-image {
  width: 80%;
}


</style>