<template>
  <div class="register-container">
    <div class="register-box">
      <h2 class="register-title" >{{ $t("lines.begin-journey") }}</h2>

      <label for="username">{{ $t("general.username") }}</label>
      <input id="username" v-model="username" placeholder="Username">

      <label for="email">{{ $t("general.email") }}</label>
      <input id="email" v-model="email" placeholder="Email">

      <label for="phonenumber">{{ $t("general.phone") }}</label>
      <input id="phonenumber" v-model="phonenumber" placeholder="Phone Number">

      <label for="password">{{ $t("general.password") }}</label>
      <input id="password" type="password" v-model="password" placeholder="Password">
      <div class="button-message-container">

        <div class="button-container">
          <button @click="register">{{ $t("general.register-user") }}</button>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>
      <div class="message-container">
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      phonenumber: '',
      password: ''
    };
  },
  methods: {
    register() {

    }
  }
};
</script>

<style scoped>
.register-container {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: calc(95vh - 60px);
  width: 50vw;
  position: absolute;
  padding-right: 25px;
  right: 0;
}


.register-box {
  width: 50vw;
  height: 90%;
  padding: 30px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow-y: auto;
}

.register-title {
  text-align: left;
  margin-bottom: 20px;
  font-size: 50px;
  color:#0E7B0B;
  font-weight: 2000;
}
label{
  font-size:30px;
  color:#9EB0A3;
}
input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #67E0A3;
  color: #9EB0A3;
}

input::placeholder {
  font-size: 20px;
  color: #FFFFFF;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  display: block;
  width: 25%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #67E0A3;
  color: white;
  cursor: pointer;
  font-size:20px;
  margin-top: 50px;
}
.error-message {
  color: red;
  margin-top: 20px;
}
.button-message-container .error-message {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.button-container {
  flex-shrink: 0;
}

.success-message {
  color: green;
  margin-top: 20px;
}
</style>
