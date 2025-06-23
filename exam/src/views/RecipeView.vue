<template>
  <div class="recipe-container">
    <RecipeFilter @filter="fetchRecipes" />
    
    <div v-if="loading" class="loading-message">Loading...</div>
    <div v-else class="recipes-row">
      <RecipeCard 
        v-for="recipe in filteredRecipes" 
        :key="recipe.id" 
        :recipe="recipe" 
        class="recipe-item"
      />
    </div>
  </div>
</template>

<script>
import RecipeFilter from '../components/RecipeFilter.vue'
import RecipeCard from '../components/RecipeCard.vue'

export default {
  components: { RecipeFilter, RecipeCard },
  data() {
    return {
      allRecipes: [],
      filteredRecipes: [],
      loading: false
    }
  },
  methods: {
    async fetchRecipes(filters) {
      this.loading = true
      
      try {
        const response = await fetch('http://localhost:3000/recipes')
        this.allRecipes = await response.json()
        
        this.filteredRecipes = this.allRecipes.filter(recipe => {
          const matchesSearch = !filters.search || 
            recipe.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            recipe.description.toLowerCase().includes(filters.search.toLowerCase())
          
          const matchesDiets = filters.diets.length === 0 || 
            filters.diets.some(diet => recipe.regimes.includes(diet))
          
          const matchesTime = !filters.time || 
            recipe.time <= filters.time
          
          const matchesDifficulty = !filters.difficulty || 
            recipe.difficulty.toLowerCase() === filters.difficulty.toLowerCase()
          
          return matchesSearch && matchesDiets && matchesTime && matchesDifficulty
        })
      } finally {
        this.loading = false
      }
    }
  },
  created() {
    this.fetchRecipes({ 
      search: '', 
      diets: [], 
      time: null, 
      difficulty: null 
    })
  }
}
</script>

<style scoped>
.recipe-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.loading-message {
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: #666;
}

.recipes-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.recipe-item {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.recipe-item:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transform: translateY(-2px);
  transition: all 0.2s ease;
}

</style>