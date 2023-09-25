<template>
  <div>
    <header-content></header-content>
    <router-view></router-view>
  </div>
</template>

<script >
  import HeaderContent from '@/shared/components/header-content.component.vue'
  export default{
    name:"App",
    components:{HeaderContent},
  }

</script>

<style >
  body, html, div, header {
    margin: 0;
    padding: 0;
  }
</style>
