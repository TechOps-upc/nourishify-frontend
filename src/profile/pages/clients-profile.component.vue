<script>
  import profileDataComponent from "@/profile/components/clients-profile-data.component.vue";
  import toolbarComponent from "@/shared/components/client-toolbar.component.vue";


  export default {
    components: {
      toolbarComponent,
      profileDataComponent,

    }
  };
</script>

<template>
  <div class="flex-container">
    <toolbar-component></toolbar-component>
    <profile-data-component></profile-data-component>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex; /* Establece el diseño en flex */
  align-items: center; /* Alinea los componentes verticalmente en el centro */
}
</style>
