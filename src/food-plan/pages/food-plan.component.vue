<template>
  <toolbar-component></toolbar-component>
  <div class="food-plan-container">
    <div class="food-plan-table">
      <table>
        <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
        </tr>
        <tr>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
        </tr>
        <tr>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
          <td>COMIDA</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import toolbarComponent from "@/shared/components/client-toolbar.component.vue";
import profileDataComponent from "@/profile/components/clients-profile-data.component.vue";
export default {
  name: 'SimpleFoodTable',
  components:{
    toolbarComponent
  }
}
</script>


<style>
.food-plan-container {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%; /* Ajusta esto según lo que necesites */
  margin: -500px auto 0 auto; /* Esto centra el contenedor en el eje horizontal */
}


.food-plan-table {
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  max-width: 80%; /* Reducido para que la tabla no sea tan ancha */
}

th, td {
  border: 1px solid black;
  padding: 5px; /* Reducido para ocupar menos espacio vertical */
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>
