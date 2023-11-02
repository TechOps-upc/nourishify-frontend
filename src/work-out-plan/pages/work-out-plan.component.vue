<template>
  <toolbar-component></toolbar-component>
  <work-out-plan></work-out-plan>
</template>

<script>
import toolbarComponent from "@/shared/components/client-toolbar.component.vue";
import profileDataComponent from "@/profile/components/clients-profile-data.component.vue";
import workOutPlan from '@/work-out-plan/components/work-out-plan-data.component.vue'

export default {
  name: "SimpleWorkOutTable",
  components:{
    workOutPlan,
    toolbarComponent
  }
}
</script>

<style scoped>

</style>