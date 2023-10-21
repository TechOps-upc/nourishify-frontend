<template>
  <h1 id="title">Select a Plan</h1>
  <div class="plan-card">
    <div v-for="plan in subscriptionPlans" :key="plan.id">
      <pv-card class="content">
        <template #header>
          <h3>{{ plan.name }}</h3>
          <h2>{{plan.price}}</h2>
          <pv-divider></pv-divider>
        </template>
        <template #content>
          <p v-for="perk in plan.perks" :key="perk.id"><i class="pi pi-check-square"></i> {{ perk }}</p>
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
}

#title  {
  margin: 2rem;
}

.content {
  padding: 0.5rem;
  margin: 0 2rem;
}

</style>