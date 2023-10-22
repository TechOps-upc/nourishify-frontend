<template>
  <div class="a">
    <h1 id="title">Select a Plan</h1>
    <div class="plan-card">
      <div v-for="plan in subscriptionPlans" :key="plan.id">
        <pv-card class="content">
          <template #header>
            <h3>{{ plan.name }}</h3>
            <h2>{{ formattedPrice(plan.price) }}</h2>
            <pv-divider></pv-divider>
          </template>
          <template #content>
            <p v-for="perk in plan.perks" :key="perk.id" class="m-0 p-0"><i class="pi pi-check-square"></i> {{ perk }}
            </p>
            <pv-button label="Comenzar prueba" @click="" class="btn" rounded></pv-button>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script>
import {SubscriptionPlansApiService} from "../services/subscription-plans-api.service.js";

export default {
  name: 'subscription-plans',
  title: 'Subscription Plans',
  data() {
    return {
      subscriptionPlans: []
    }
  },
  async created() {
    this.subscriptionPlansService = new SubscriptionPlansApiService()
    this.subscriptionPlansService.getAll().then((response) => {
      this.subscriptionPlans = response.data
    })
  },
  computed: {
    formattedPrice() {
      return (price) => new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);
    },
  }
}

</script>

<style scoped>
.plan-card {
  display: flex;
  justify-content: space-between;
}

#title {
  margin: 0 2rem;
  padding: 2rem 0;
}

.content {
  padding: 0.5rem;
  margin: 0 2rem;
}

.a {
  height: 100vh;

  background-color: #D1EEB4;
}

.btn {
  background-color: #67E0A3;
  color: #fff;
  margin-top: 2rem;
  font-weight: bold;

}
</style>