<template>
  <div>
    <header-content-component></header-content-component>
    <router-view></router-view>
  </div>
</template>

<script >
  import HeaderContentComponent from "@/shared/components/header-content.component.vue";
  export default {
    name:"App",
    components:{HeaderContentComponent},
  }
</script>

<style >
  body, html, div, header {
    margin: 0;
    padding: 0;
  }
</style>
