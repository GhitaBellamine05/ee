<template>
  <div class="diets">
    <div class="container">
      <h1>Régimes alimentaires</h1>
      
      <div v-if="loading" class="loading">Chargement...</div>
      
      <div v-else class="diet-grid">
        <DietCard 
          v-for="diet in diets" 
          :key="diet.id" 
          :diet="diet" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import DietCard from '@/components/DietCard.vue'

export default {
  name: 'DietsView',
  components: { DietCard },
  setup() {
    const diets = ref([])
    const loading = ref(true)
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/regimes')
        diets.value = await response.json()
        loading.value = false
      } catch (error) {
        console.error('Error fetching diets:', error)
        loading.value = false
      }
    }
    
    onMounted(fetchData)
    
    return { diets, loading }
  }
}
</script>

<style scoped>
.diets {
  padding: 2rem 0;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.diet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
</style>