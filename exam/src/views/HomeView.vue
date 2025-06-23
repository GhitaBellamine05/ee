<template>
  <div class="home">
      <div class="container">
        <h1>Bienvenue sur notre application</h1>
      </div>

    <div class="popular">
      <div class="container">
        <h2>Recettes populaires</h2>
        <div class="recipe">
          <RecipeCard 
            v-for="recipe in popularRecipes" 
            :key="recipe.id" 
            :recipe="recipe"
            :diets="diets"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue'

export default {
  name: 'HomeView',
  components: { RecipeCard },
  data() {
    return {
      recipes: [],
      diets: [],
      popularRecipes: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const recipesResponse = await fetch('http://localhost:3000/recipes')
        this.recipes = await recipesResponse.json()
        
        const dietsResponse = await fetch('http://localhost:3000/regimes')
        this.diets = await dietsResponse.json()
        
        this.popularRecipes = [...this.recipes].sort(() => 0.5 - Math.random()).slice(0, 4)
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }
}
</script>

<style scoped>
.home {
  background-color: white;
  color: #2c3e50;
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 3rem;
}

.home h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2980b9;
}

.home p {
  font-size: 1.2rem;
  color: #4a5568;
}

.popular{
  padding-bottom: 3rem;
}

.popular h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #2c3e50;
}

.recipe {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
</style>