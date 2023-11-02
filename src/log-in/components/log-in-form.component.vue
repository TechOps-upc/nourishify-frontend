<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title" >{{ $t("log-in-form.log-in") }}</h2>

      <label for="email">{{ $t("log-in-form.user-email") }}</label>
      <input id="email" v-model="email" placeholder="Email">

      <label for="password">{{ $t("log-in-form.password") }}</label>
      <input id="password" type="password" v-model="password" placeholder="Password">
      <div class="button-message-container">
        <div class="button-container">
          <button @click="login">{{ $t("log-in-form.log-in") }}</button>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>

      <a href="#" class="forgot-link">{{ $t("log-in-form.forgot-password") }}</a>
      <a href="/how-sign-up" class="signup-link">{{ $t("log-in-form.create-account") }}</a>

      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script>
import { fetchClientByCredentials as fetchClient } from '@/log-in/services/users-api.service.js';
import { fetchNutritionistByCredentials as fetchNutritionist } from '@/log-in/services/users-api.service.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      successMessage: ''
    };
  },
  props: {
    userRole: {
      type: String,
      required: true
    }
  },
  methods: {
    async login() {
      try {
        let response;

        if (this.userRole === 'client') {
          response = await fetchClient(this.email, this.password);
        } else if (this.userRole === 'nutritionist') {
          response = await fetchNutritionist(this.email, this.password);
        }

        if (response.data.length === 0) {
          this.error = 'Invalid email or password';
          this.successMessage = '';
        } else {
          this.error = '';
         // this.$router.push(`/clients-profile/${response.data[0].id}`);
          if(this.userRole==='client'){
            this.$router.push(`/clients-profile/${response.data[0].id}`);

          }
          
          else if (this.userRole==='nutritionist'){
            this.$router.push(`/nutritionist-profile/${response.data[0].id}`);

          }

        }
      } catch (err) {
        this.error = 'Error logging in';
        this.successMessage = '';
      }
    }
  }
};
</script>




<style scoped>
.login-container {
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


.login-box {
  width: 50vw;
  height: 90%;
  padding: 30px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow-y: auto;
}

.login-title {
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
  background-color: #D1EEB4;
  color: #9EB0A3;
}

input::placeholder {
  font-size: 20px;
  color: #93b494;
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
  background-color: #0F371F;
  color: white;
  cursor: pointer;
  font-size:20px;
  margin-top: 50px;
}

a {
  display: block;
  margin: 45px 0;
  text-align: center;
  color: #007BFF;
  font-size:20px;
  text-decoration: none;
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


