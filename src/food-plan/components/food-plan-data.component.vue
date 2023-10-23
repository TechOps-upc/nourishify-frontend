<template>

    <pv-data-table :value="tableData"  class="max-w-4xl mx-8 shadow-md mt-10 rounded" >
      <pv-column field="monday" header="Monday" class=" bg-green-500 text-white p-4 border border-gray-300"></pv-column>
      <pv-column field="tuesday" header="Tuesday" class="border border-gray-300 p-4"></pv-column>
      <pv-column field="wednesday" header="Wednesday" class="bg-green-500 text-white p-4 border border-gray-300"></pv-column>
      <pv-column field="thursday" header="Thursday" class="border border-gray-300 p-4"></pv-column>
      <pv-column field="friday" header="Friday" class="bg-green-500 text-white p-4 border border-gray-300"></pv-column>
      <pv-column field="saturday" header="Saturday" class="border border-gray-300 p-4"></pv-column>
      <pv-column field="sunday" header="Sunday" class=" bg-green-500 text-white p-4 border border-gray-300"></pv-column>
    </pv-data-table>

</template>

<script>
import { FoodPlanApiService } from '../service/food-plan-api.js';

  export default {
    data() {
      return {
        id: this.$route.params.id,
        foodPlan: {},
        tableData:[
          {



          },
        ],
      };
    },
    created() {
      this.fetchFoodPlanData();
    },
    methods: {
      async fetchFoodPlanData() {
        try {
          const response = await new FoodPlanApiService().getAll();
          this.foodPlan = response.data.find(plan => plan.id === Number(this.id)) || {};
          this.buildTableData();
        } catch (error) {
          console.error('Error obteniendo plan de comida:', error);
        }
      },
      buildTableData() {
        const meals = ['breakfast', 'lunch', 'dinner'];

        this.tableData = meals.map(meal => {
          return {
            monday: this.foodPlan.monday ? this.foodPlan.monday[meal] : '',
            tuesday: this.foodPlan.tuesday ? this.foodPlan.tuesday[meal] : '',
            wednesday: this.foodPlan.wednesday ? this.foodPlan.wednesday[meal] : '',
            thursday: this.foodPlan.thursday ? this.foodPlan.thursday[meal] : '',
            friday: this.foodPlan.friday ? this.foodPlan.friday[meal] : '',
            saturday: this.foodPlan.saturday ? this.foodPlan.saturday[meal] : '',
            sunday: this.foodPlan.sunday ? this.foodPlan.sunday[meal] : ''
          };
        });
      }
    },

  }
</script>