<template>
  <div>
    <router-link :to="`/recipes/${recipe.id}`" class="recipe-card">
      <div class="recipe-image">
        <img :src="recipe.image" :alt="recipe.title">
      </div>
      <div class="recipe-content">
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.description }}</p>
      </div>
      <div class="diets">
        <span v-for="dietId in recipe.regimes" :key="dietId" class="diet-tag">
          {{ getDietName(dietId) }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true
    },
    diets: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getDietName(dietId) {
      const diet = this.diets.find(d => d.id === dietId)
      return diet ? diet.name : dietId
    }
  }
}
</script>

<style scoped>
.recipe-card {
  display: block;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  text-decoration: none;
  color: inherit;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-image {
  height: 200px;
  overflow: hidden;
}

.recipe-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.recipe-card:hover .recipe-image img {
  transform: scale(1.05);
}

.recipe-content {
  padding: 1rem;
}

.recipe-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #2c3e50;
}

.recipe-content p {
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.5;
}

.diets {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
}

.diet-tag {
  background-color: #e6f2ff;
  color: #2980b9;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>