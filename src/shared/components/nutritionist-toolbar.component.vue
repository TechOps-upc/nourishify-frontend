<template>
  <div class="flex space-x-2 justify-center">
    <pv-button class="bg-green-500 hover:bg-green-600 text-white" icon="pi pi-bars" @click="visibleLeft = true"></pv-button>
  </div>
  <div class="fixed inset-0 flex">

    <div class="fixed inset-0" @click="visibleLeft = false"></div>

    <pv-sidebar v-model:visible="visibleLeft" :show-close-icon="false" class="h-screen w-64 bg-green-800 shadow-xl overflow-y-auto text-white rounded-lg">

      <div class="flex items-center justify-between  p-4">
        <i class="pi pi-fast-backward cursor-pointer hover:bg-green-600 transition duration-300 p-4 text-5xl" @click="visibleLeft = false"></i>
      </div>

      <router-link
          :to="'/nutritionist-profile/' + nutritionistId"
          class="block mt-4 mb-2 p-3 rounded-lg  text-white font-semibold hover:bg-green-600 transition duration-300 no-underline" to="#">
        <i class="pi pi-user mr-3"></i>
        Profile
      </router-link>

      <router-link
          :to="'/appointments-for-nutritionist/' + nutritionistId"
          class="block mt-4 mb-2 p-3 rounded-lg text-white font-semibold hover:bg-green-600 transition duration-300 no-underline">
        <i class="pi pi-calendar mr-3"></i>
        My clients
      </router-link>




      <div class="logout-section  block  mt-8 p-3 font-semibold hover:bg-red-600 transition duration-300 cursor-pointer" @click="logout">
        <i class="pi pi-power-off mr-3"></i>
        Logout
      </div>

    </pv-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Nutritionist-Toolbar',
  computed: {
    nutritionistId() {
      return this.$route.params.id; // Asume que el ID está disponible como un parámetro "id" en la URL
    }
  },
  methods: {
    logout() {
      this.$router.push('/');
    }
  },
  data() {
    return {
      visibleLeft: false
    };
  }
}
</script>

<style scoped>

</style>
