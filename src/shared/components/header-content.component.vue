<template>
  <header class="header">
    <router-link to="/link" class="logo-link">
      <img class="logo" src="../../../public/header-content-images/nourishify-logo.png" alt="Nourishify Logo" />
    </router-link>
    <router-link to="/link" class="profile-link">
      <img class="profile-icon" src="../../../public/header-content-images/icon-profile.png" alt="Profile Icon" />
    </router-link>
  </header>
</template>

<script>
  export default {
    name: 'HeaderContentComponent'
  };
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: whitesmoke;
    padding: 10px 20px;
    box-sizing: border-box;
    margin: 0;
    border-bottom: 1px solid black;
  }

  .logo-link, .profile-link {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .logo, .profile-icon {
    display: block;
    height: auto;
  }

  .logo {
    width: 200px;
  }

  .profile-icon {
    width: 70px;
  }
</style>
