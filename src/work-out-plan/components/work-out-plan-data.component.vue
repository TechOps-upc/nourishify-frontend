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
import { WorkOutPlanApiService } from "../service/work-out-plan-api.js";

export default {
  data(){
    return{
      id: this.$route.params.id,
      workOutPlan:{},
      tableData:[
        {

        },
      ],
    };
  },
  created(){
    this.fetchWorkOutPlanData();
  },
  methods: {
    async fetchWorkOutPlanData(){
      try{
        const response = await new WorkOutPlanApiService().getAll();
        this.workOutPlan = response.data.find(plan => plan.id === Number(this.id)) || {};
        this.buildTableData();
      } catch (error) {
        console.error('Error obteniendo plan de entrenamiento:', error);
      }
    },

    buildTableData(){
      const rows = ['muscle-group', 'exercises']

      this.tableData = rows.map(row => {
        return {
          monday: this.workOutPlan.monday ? this.workOutPlan.monday[row] : '',
          tuesday: this.workOutPlan.tuesday ? this.workOutPlan.tuesday[row] : '',
          wednesday: this.workOutPlan.wednesday ? this.workOutPlan.wednesday[row] : '',
          thursday: this.workOutPlan.thursday ? this.workOutPlan.thursday[row] : '',
          friday: this.workOutPlan.friday ? this.workOutPlan.friday[row] : '',
          saturday: this.workOutPlan.saturday ? this.workOutPlan.saturday[row] : '',
          sunday: this.workOutPlan.sunday ? this.workOutPlan.sunday[row] : ''
        };
      });

    }



  },
}

</script>
