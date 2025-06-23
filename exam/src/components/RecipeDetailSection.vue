<template>
  <div class="recipe-detail">
    <!-- Loading state -->
    <div v-if="loading" class="loading">
      Chargement en cours...
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <!-- Recipe content -->
    <div v-else-if="recipe">
      <div class="recipe-header">
        <h1>{{ recipe.title }}</h1>
        <div class="recipe-meta">
          <span class="prep-time">{{ recipe.time }} minutes de préparation</span>
          <div class="diets">
            <span v-for="diet in recipe.regimes" :key="diet" class="diet-tag">{{ diet }}</span>
          </div>
        </div>
      </div>
      
      <div class="recipe-image">
        <img :src="recipe.image" :alt="recipe.title" />
      </div>
      
      <div class="recipe-description">
        <h2>Description</h2>
        <p>{{ recipe.description }}</p>
      </div>
      
      <div class="recipe-ingredients">
        <h2>Ingrédients</h2>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
      </div>
      
      <div class="recipe-steps">
        <h2>Étapes de préparation</h2>
        <ol>
          <li v-for="(step, index) in recipe.steps" :key="index">{{ step }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetailSection',
  data() {
    return {
      recipe: null,
      loading: true,
      error: null
    }
  },
  async created() {
    try {
      const recipeId = this.$route.params.id
      const response = await fetch(`http://localhost:3000/recipes/${recipeId}`)
      
      if (!response.ok) {
        throw new Error('Recette non trouvée')
      }
      
      this.recipe = await response.json()
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
/* Keep your existing styles, just add these: */
.loading, .error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}

.error {
  color: #d32f2f;
}
</style>