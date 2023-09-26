<template>
  <div class="container">
    <h1>How would you like to log in?</h1>
    <div class="content">
      <div class="image-wrapper">
        <img class="image bordered" src="/public/how-would-sign-up-images/client-sign-up.png" alt="Left Image">
        <button @click="goToLogInClient" class="rounded-button">Client</button>
      </div>
      <div class="vertical-line"></div>
      <div class="image-wrapper">
        <img class="image bordered" src="/public/how-would-sign-up-images/nutritionist-sign-up.png" alt="Right Image">
        <button @click="goToLogInNutritionist" class="rounded-button">Nutritionist</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "how-sign-up",
    title: "How sign up",

    methods:{
      goToLogInClient(){
        this.$router.push('/log-in-clients');
      },

      goToLogInNutritionist(){
        this.$router.push('/log-in-nutritionist');
      }
    }




  };
</script>

<style scoped>
.container {
  text-align: center;
  width: 100%;
  padding-top: 80px;
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  margin: 0 0 50px;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 400px;
  height: auto;
}

.bordered {
  border: 1px solid black;
}

.rounded-button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #67E0A3;
  color: white;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.rounded-button:hover {
  background-color: #55C892;
}


.vertical-line {
  width: 1px;
  height: 500px;
  background-color: black;
  margin: 0 20px;
}



@media (max-width: 768px) {
  .image {
    display: none;
  }

  .content {
    flex-direction: column;
  }

  .image-wrapper {
    margin-bottom: 20px;
  }

  .rounded-button {
    padding: 15px 30px;
    font-size: 20px;
    margin: 10px auto;
  }


  .vertical-line {
    display: none
  }
}

</style>
