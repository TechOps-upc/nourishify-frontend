<template>
  <div class="flex">
    <div class="form m-5 w-max flex-wrap">
      <h1>{{ $t("payment.proceed") }}</h1>
      <h3>{{ $t("payment.titular-name") }}:</h3>
      <pv-input-text id="float-input" type="text" class="w-full" v-model="PaymentInfo.name"/>
      <h3>{{ $t("payment.card-number") }}:</h3>
      <pv-input-number id="float-input" class="w-full" v-model="PaymentInfo.cardNumber" :useGrouping="false" inputId="minmax" :min="1000000000000000" :max="9999999999999999"/>
      <div class="flex gap-3">
        <div class="flex-wrap">
          <h3>{{ $t("payment.expire-date") }}:</h3>
          <pv-input-text id="float-input" type="text" class="w-full" v-model="PaymentInfo.expirationDate" />
        </div>
        <div class="flex-wrap">
          <h3>{{ $t("payment.sec-code") }}:</h3>
          <pv-input-number id="float-input" class="w-full" v-model="PaymentInfo.cvv" :useGrouping="false" inputId="minmax" :min="100" :max="9999" />
        </div>
      </div>
      <h3>{{ $t("general.email") }}:</h3>
      <pv-input-text id="float-input" type="email" class="w-full" v-model="PaymentInfo.email"/>

      <router-link :to="'/register-form'">
        <pv-button class="btn w-max" label="Confirm" @click="logPaymentInfo" />
      </router-link>

    </div>
    <div class="card m-5 flex-wrap">
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
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import {PaymentApiService} from "../service/payment-api.service.js";
import {PaymentInformation} from "../model/payment-information.entity.js";

export default {
  name: 'payment',
  title: 'Payment',
  components: {},
  data() {
    return {
      PaymentInfo: new PaymentInformation(),
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
  methods:{
    logPaymentInfo() {
      console.log(this.PaymentInfo)
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: #67E0A3;
  color: #fff;
  margin-top: 2rem;
  font-weight: bold;
  max-width: 25vw;
}

.form {
  max-width: 50vw;
}

.card {
  max-width: 50vw;
}
</style>