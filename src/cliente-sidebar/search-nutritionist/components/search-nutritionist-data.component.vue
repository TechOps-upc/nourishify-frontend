<template>
  <div class="search-nutritionist">
    <h1>{{ $t("general.nutritionist") }}</h1>

    <!-- Campo de búsqueda -->
    <div class="p-fluid p-formgroup-inline">
      <div class="p-field">
        <input
            id="searchQuery"
            type="text"
            v-model="searchQuery"
            placeholder="Search..."
            class="p-inputtext"
        />
      </div>
    </div>

    <!-- Lista de resultados de nutricionistas en forma de tarjetas -->
    <div class="p-grid nutritionist-cards">
      <div v-for="nutritionist in filteredNutritionists" :key="nutritionist.id" class="p-col-12 p-md-6 p-lg-4 p-xl-3">
        <div class="p-card p-card-horizontal p-card-sm">
          <img :src="nutritionist.photo" alt="Nutritionist Photo" class="p-card-image" />

          <div class="p-card-body p-card-content-gray">
            <div class="p-card-title">{{ nutritionist["full-name"] }}</div>
            <div class="p-card-content">
              <p>{{ $t("general.specialist")}} : {{ nutritionist.specialist }}</p>
              <p>{{nutritionist.description}}</p>
            </div>
          </div>


          <div class="p-card-actions">
            <!-- Usamos una estructura similar para pasar el ID del nutricionista como parámetro -->
            <router-link :to="{ name: 'ProfessionalProfile', params: { id: nutritionist.id } }">
              <button class="p-button p-button-primary">{{ $t("general.see-more") }}</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import httpSearchNutritionist from "@/cliente-sidebar/search-nutritionist/service/http-search-nutritionist.js";
export default {
  name: "SearchNutritionistData",
  data() {
    return {
      searchQuery: "",
      nutritionists: [],
    };
  },
  computed: {
    filteredNutritionists() {
      // Filtrar nutricionistas según la cadena de búsqueda
      return this.nutritionists.filter((nutritionist) =>
          nutritionist["full-name"].toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  mounted() {
    // Cargar datos de nutricionistas desde la API
    httpSearchNutritionist.get("/nutritionists")
        .then((response) => {
          this.nutritionists = response.data;
        })
        .catch((error) => {
          console.error("Error loading nutritionist data:", error);
        });
  },
};
</script>

<style scoped>
.search-nutritionist {
  padding: 20px;
}

.p-formgroup-inline {
  display: flex;
  align-items: center;
  gap: 140px;
  margin-bottom: 20px;
}

.p-inputtext {
  width: 150%;
}

.p-card-horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #000;
}

.p-card-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 80px;
  margin-right: 100px;
}

.p-card-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.p-card-content {
  font-size: 1rem;
}

.p-button-primary {
  background-color: #40e381;
}


</style>
