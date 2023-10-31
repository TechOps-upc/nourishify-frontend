<template>
  <div class="client-card bg-white border rounded-md shadow-md flex items-center">

    <!-- Columna de la imagen -->
    <div class="client-image-container flex-shrink-0">
      <img :src="client.photo" alt="Client photo" class="client-image" />
    </div>

    <!-- Columna de los datos y botón -->
    <div class="client-info flex-grow p-4">
      <h2 class="text-lg font-medium mb-2">{{ client["full-name"] }}</h2>
      <div class="text-sm mb-3">
        <p>{{ client.plan }}</p>
      </div>
      <div class="flex justify-end">
        <button @click="$emit('seeProgress')" class="btn-see-progress bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">See progress</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.client-card {
  margin: 16px;
  min-height: 120px;
  display: flex;
  align-items: center;
  border: 1px solid black; /* Añade un borde negro */
  border-radius: 10px; /* Curvatura del borde */
}


.client-image-container {
  width: 80px;
  height: 80px;
  margin: 16px; /* Margen alrededor del contenedor de imagen */
  border-radius: 50%;
  overflow: hidden;
}

.client-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-see-progress {
  border: 1px solid transparent;
  transition: all 0.3s; /* Agregamos una transición para suavizar el efecto hover */
}

.btn-see-progress:hover {
  border: 1px solid white;
  background-color: #117a45;
}
</style>

<script>
export default {
  props: ['client']

}
</script>
