<template>
  <h1 id="title">Select a Plan</h1>
  <div class="plan-card">
    <div v-for="plan in subscriptionPlans" :key="plan.id">
      <pv-card>
        <template #header>
          <h3>{{ plan.name }}</h3>
          <h2>{{plan.price}}</h2>
        </template>
        <template #content>
          <p v-for="perk in plan.perks" :key="perk.id">{{ perk }}</p>
        </template>
      </pv-card>
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
  }
}

</script>

<style scoped>
.plan-card {
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
}

#title  {
  margin: 2rem;
}
</style>