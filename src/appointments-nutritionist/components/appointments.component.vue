<template>
  <div class="flex items-center border p-4 my-4">
    <img :src="client.photo" alt="Client photo" class="w-24 h-24 rounded-full mr-4" />
    <div>
      <h2 class="text-xl">{{ client["full-name"] }}</h2>
      <p class="text-base mt-2 mb-4">{{ client.plan }}</p>
      <button @click="$emit('seeProgress')" class="bg-blue-500 text-white px-4 py-2 rounded">See progress</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['client'],
  methods: {
    // Puedes agregar métodos si es necesario
  }
}
</script>
