<template>
  <toolbar-component></toolbar-component>
  <food-plan></food-plan>
</template>

<script>
import toolbarComponent from "@/shared/components/client-toolbar.component.vue";
import profileDataComponent from "@/profile/components/clients-profile-data.component.vue";
import FoodPlan from "@/food-plan/components/food-plan-data.component.vue";
export default {
  name: 'SimpleFoodTable',
  components:{
    FoodPlan,
    toolbarComponent
  }
}
</script>


<style>

</style>
