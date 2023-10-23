<template>
  <div class="container">
    <div class="image-container">
      <img src="/register-form-images/register-form.png" alt="Description of the Image" class="register-image">
    </div>
    <div class="form-container">
      <registerFormComponent user-role="client"/>
    </div>
  </div>
</template>

<script>
import registerFormComponent from "@/register-form/components/register-form.component.vue";
export default {
  components: {
    registerFormComponent
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
.register-image{
  width: 65%;
}


</style>
