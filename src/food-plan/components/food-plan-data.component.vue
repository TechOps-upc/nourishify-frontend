<template>
  <tr>
    <td>{{ day }}</td>
    <td>{{ breakfast }}</td>
    <td>{{ lunch }}</td>
    <td>{{ dinner }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    day: String,
    breakfast: String,
    lunch: String,
    dinner: String
  }
}
</script>


<style scoped>

</style>