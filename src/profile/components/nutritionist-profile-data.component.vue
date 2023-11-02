<template>
  <div class="nutritionist-profile-container">
    <!-- Nutricionista Foto -->
    <img :src="nutritionist.photo" alt="Nutritionist Photo" class="nutritionist-photo">

    <!-- Datos del Nutricionista -->
    <div class="data-container">
      <div class="data-box"><strong>{{ $t("profile.full-name") }}</strong> {{ nutritionist["full-name"] }}</div>
      <div class="data-box"><strong>{{ $t("profile.address") }}</strong> {{ nutritionist.address }}</div>
      <div class="data-box"><strong>{{ $t("profile.address") }}</strong> {{ nutritionist.email }}</div>
      <div class="data-box"><strong>{{ $t("profile.phone") }}</strong> {{ nutritionist.phone }}</div>
      <div class="data-box"><strong>{{ $t("profile.plan") }}</strong> {{ nutritionist.specialist }}</div>
    </div>
  </div>
</template>

<script>
//import { getNutritionistById } from '../service/nutritionists-data-api.service.js';
import {getNutritionistById} from "@/profile/service/users-data-api.service.js";

export default {
  data() {
    return {
      nutritionist: {}
    };
  },
  computed: {
    nutritionistId() {
      return this.$route.params.id;
    }
  },
  async created() {
    try {
      const response = await getNutritionistById(this.nutritionistId);
      this.nutritionist = response.data;
    } catch (error) {
      console.error("Error obteniendo el nutricionista:", error);
    }
  }
};
</script>

<style scoped>
.nutritionist-profile-container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
}

.nutritionist-photo {
  width: 150px;
  height: 150px;
  border-radius: 25px;
  object-fit: cover;
  margin-bottom: 10px;
}

.data-container {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.data-box {
  background-color: #D1EEB4;
  padding: 20px;
  margin: 3px 0;
  border-radius: 5px;
  width: 100%;
}
</style>
