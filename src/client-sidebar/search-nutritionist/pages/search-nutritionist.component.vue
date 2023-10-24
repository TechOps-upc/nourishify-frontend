<template>
  <div class="flex-container">
    <toolbar-component></toolbar-component>
    <search-nutritionist-data-component></search-nutritionist-data-component>
  </div>
</template>

<script>
import SearchNutritionistDataComponent from "@/client-sidebar/search-nutritionist/components/search-nutritionist-data.component.vue";
import toolbarComponent from "@/shared/components/client-toolbar.component.vue";

export default {
  components: {
    toolbarComponent,
    SearchNutritionistDataComponent,
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
}
</style>
