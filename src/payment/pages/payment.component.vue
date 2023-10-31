<template>

  <div class="inline form">
    <div class="full m-5">
      <h1>Proceed with the payment</h1>
      <h3>Nombre del titular:</h3>
      <pv-input-text id="float-input" type="text" class="w-full"/>
    </div>
  </div>
  <div class="inline card m-5">
    <pv-card class="content p-5 w-max">
      <template #header>
        <h3>{{ PaymentPlan.name }}</h3>
        <h2>{{ formattedPrice(PaymentPlan.price) }}</h2>
        <pv-divider></pv-divider>
      </template>
      <template #content>
        <p v-for="perk in PaymentPlan.perks" :key="PaymentPlan.id"><i class="pi pi-check-square"></i>
          {{ perk }}
        </p>
        <router-link :to="'payment/' + PaymentPlan.id">
          <pv-button class="btn w-full" label="Comenzar prueba"></pv-button>
        </router-link>
      </template>
    </pv-card>
  </div>
</template>

<script>
import {PaymentApiService} from "../service/payment-api.service.js";

export default {
  name: 'payment',
  title: 'Payment',
  components: {},
  data() {
    return {
      PaymentPlan: {}
    }
  },
  async created() {
    this.PaymentPlan = new PaymentApiService()
    const planId = this.$route.params.planId;
    this.PaymentPlan.getById(planId).then((response) => {
      this.PaymentPlan = response.data
      console.log(response.data)
    })
  },
  computed: {
    formattedPrice() {
      return (price) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);
    },
  },
}
</script>

<style scoped>
.btn {
  background-color: #67E0A3;
  color: #fff;
  margin-top: 2rem;
  font-weight: bold;
}

.form {
  max-width: 50%;
}

.card {
  max-width: 50%;
}
</style>