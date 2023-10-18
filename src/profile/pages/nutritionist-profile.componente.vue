<template>
  <div class="flex-container">
    <nutritionist-toolbarComponent></nutritionist-toolbarComponent>
    <nutritionist-profile-dataComponent></nutritionist-profile-dataComponent>
  </div>
</template>

<script>

import NutritionistToolbarComponent from "@/shared/components/nutritionist-toolbar.component.vue";
import NutritionistProfileDataComponent from "@/profile/components/nutritionist-profile-data.component.vue";

export default {
  components: {
    NutritionistToolbarComponent,
    NutritionistProfileDataComponent
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
}
</style>
