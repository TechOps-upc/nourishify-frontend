<template>
  <div class="register-container">
    <div class="register-box">
      <h2 class="register-title">{{ $t("lines.begin-journey") }}</h2>

      <label for="userType">{{ $t("general.user-type") }}</label>
      <select id="userType" v-model="userType" @change="handleUserTypeChange">
        <option value="client">{{ $t("general.client") }}</option>
        <option value="nutritionist">{{ $t("general.nutritionist") }}</option>
      </select>
      <br>

      <!-- Campos comunes -->

      <label for="username">{{ $t("general.username") }}</label>
      <input id="username" v-model="username" placeholder="Username">

      <label for="email">{{ $t("general.email") }}</label>
      <input id="email" v-model="email" placeholder="Email">

      <label for="phonenumber">{{ $t("general.phone") }}</label>
      <input id="phonenumber" v-model="phonenumber" placeholder="Phone Number">

      <label for="password">{{ $t("general.password") }}</label>
      <input id="password" type="password" v-model="password" placeholder="Password">

      <label for="address">{{ $t("general.address") }}</label>
      <input id="address" v-model="address" placeholder="Address">


      <!-- Campos específicos para nutricionistas -->
      <div v-show="userType === 'nutritionist'">
        <label for="description">{{ $t("general.description") }}</label>
        <input id="description" v-model="description" placeholder="Description">

        <label for="specialist">{{ $t("general.specialist") }}</label>
        <input id="specialist" v-model="specialist" placeholder="Specialist">

        <label for="experience">{{ $t("general.experience") }}</label>
        <input id="experience" v-model="experience" placeholder="Experience">

        <label for="education">{{ $t("general.education") }}</label>
        <input id="education" v-model="education" placeholder="Education">

        <label for="age">{{ $t("general.age") }}</label>
        <input id="age" v-model="age" placeholder="Age">

        <!-- Agrega otros campos específicos para nutricionistas aquí -->

      </div>

      <!-- Campos específicos para clientes -->

      <div v-show="userType === 'client'">
        <label for="plan">{{ $t("general.plan") }}</label>
        <input id="plan" v-model="plan" placeholder="Plan">

        <!-- Agrega otros campos específicos para nutricionistas aquí -->

      </div>

      <!-- Botón de registro -->
      <div class="button-message-container">
        <div class="button-container">
          <button @click="register">{{ $t("general.register-user") }}</button>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>

      <!-- Mensaje de éxito -->
      <div class="message-container">
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      userType: 'client',
      username: '',
      email: '',
      phonenumber: '',
      password: '',
      address: '',
      description: '',  // Campo específico para nutricionistas
      specialist: '',   // Campo específico para nutricionistas
      experience: '',   // Campo específico para nutricionistas
      education: '',    // Campo específico para nutricionistas
      age: '',          // Campo específico para nutricionistas
      patients: [],          // Campo específico para nutricionistas
      plan: '',               // Campo específico para clientes
      error: '',
      successMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        // Obtén el siguiente id disponible del tipo de usuario
        const nextId = await this.getNextId();

        // Construye los datos del usuario con el nuevo id
        const userData = {
          id: nextId,
          username: this.username,
          email: this.email,
          phonenumber: this.phonenumber,
          password: this.password,
          address: this.address,
        };

        if (this.userType === 'nutritionist') {
          // Agrega campos específicos para nutricionistas al objeto userData
          userData.description = this.description;
          userData.specialist = this.specialist;
          userData.experience = this.experience;
          userData.education = this.education;
          userData.age = this.age;
          userData.patients = this.patients;

          // Agrega otros campos específicos para nutricionistas aquí
        }

        if (this.userType === 'client') {
          // Agrega campos específicos para client al objeto userData
          userData.plan = this.plan;

          // Agrega otros campos específicos para nutricionistas aquí
        }

        // Realiza la solicitud HTTP para registrar al usuario
        await axios.post(`http://localhost:3000/${this.userType}s`, userData);

        // Limpiar los campos después de un registro exitoso
        this.username = '';
        this.email = '';
        this.phonenumber = '';
        this.password = '';
        this.description = '';
        this.specialist = '';
        this.address = '';
        this.experience = '';
        this.education = '';
        this.patients = '';
        this.age = '';
        this.plan = '';
            // Limpia otros campos específicos para nutricionistas aquí

        // Muestra un mensaje de éxito
        this.successMessage = 'User registered successfully!';
      } catch (error) {
        // Maneja errores de la solicitud HTTP
        console.error('Error al registrar el usuario', error);
        // Puedes mostrar un mensaje de error al usuario si lo prefieres
        this.error = 'Error registering user. Please try again.';
      }
    },
    async getNextId() {
      try {
        // Realiza una solicitud GET para obtener los usuarios existentes del tipo correspondiente
        const response = await axios.get(`http://localhost:3000/${this.userType}s`);
        const users = response.data;

        // Encuentra el id más alto entre los usuarios existentes
        const highestId = users.reduce((maxId, user) => (user.id > maxId ? user.id : maxId), 0);

        // Devuelve el siguiente id disponible (id más alto + 1)
        return highestId + 1;
      } catch (error) {
        console.error('Error al obtener el siguiente id', error);
        throw error;
      }
    },
    handleUserTypeChange() {
      // Puedes agregar lógica adicional si es necesario cuando cambia el tipo de usuario
    }
  },
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
