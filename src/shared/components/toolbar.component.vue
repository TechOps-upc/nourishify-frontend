<template>
  <div class="toolbar">
    <router-link class="section" to="#">Profile</router-link>
    <router-link class="section" to="#">My Appointments</router-link>
    <router-link class="section" to="#">My Food Plans</router-link>
    <router-link class="section" to="#">Search a Date</router-link>
    <div class="logout-section" @click="logout">Logout</div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    logout() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.toolbar {
  box-shadow: 15px 0 20px 5px rgba(0, 0, 0, 0.2);
  border-radius:15px;
  margin-top:60px;
  font-family: 'Poppins', sans-serif;
  background-color: #67E0A3;
  width: 20%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size:20px;
}

.section {
  padding: 10px 10px;
  color: #000000;
  cursor: pointer;

  text-decoration: none;
}

.logout-section {
  padding: 20px 15px;
  background-color: #D1EEB4;
  color: black;
  cursor: pointer;
}
</style>
