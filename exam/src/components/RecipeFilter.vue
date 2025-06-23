<template>
  <div class="recipe-filter">
    <div class="filter-group">
      <label for="search">Search Recipes</label>
      <input 
        id="search"
        type="text" 
        v-model="filters.search" 
        placeholder="Pasta, salad, etc..."
        @input="updateFilters"
      >
    </div>

    <div class="filter-group">
      <h4 class="filter-title">Dietary Preferences</h4>
      <div class="checkbox-group">
        <label v-for="diet in ['vegetarian', 'vegan', 'gluten-free', 'keto']" :key="diet">
          <input 
            type="checkbox" 
            v-model="filters.diets" 
            :value="diet" 
            @change="updateFilters"
          >
          <span class="checkmark"></span>
          {{ diet }}
        </label>
      </div>
    </div>

    <div class="filter-group">
      <h4 class="filter-title">Max Preparation Time: {{ filters.maxTime }} minutes</h4>
      <input
        type="range"
        v-model="filters.maxTime"
        min="0"
        max="120"
        step="5"
        @input="updateFilters"
        class="time-slider"
      >
      <div class="time-labels">
        <span>0 min</span>
        <span>120 min</span>
      </div>
    </div>


    <div class="filter-group">
      <h4 class="filter-title">Niveau de difficulté</h4>
      <div class="difficulty-buttons">
        <button
          v-for="level in ['Facile', 'Moyen', 'Difficile']"
          :key="level"
          :class="{ active: filters.difficulty === level }"
          @click="setDifficulty(level)"
        >
          {{ level }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        search: '',
        diets: [],
        time: '',
        difficulty: ''
      }
    }
  },
  methods: {
    updateFilters() {
      this.$emit('filter', this.filters)
    },
    setDifficulty(level) {
      this.filters.difficulty = this.filters.difficulty === level ? '' : level
      this.updateFilters()
    }
  }
}
</script>

<style scoped>
.recipe-filter {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.filter-group {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.filter-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.filter-title {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  color: #333;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #555;
}

input[type="text"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.2s;
}

input[type="text"]:focus {
  border-color: #4CAF50;
  outline: none;
}

/* Checkbox styling */
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  border: 1px solid #ddd;
}

label:hover input ~ .checkmark {
  background-color: #eee;
}

label input:checked ~ .checkmark {
  background-color: #4CAF50;
  border-color: #4CAF50;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

label input:checked ~ .checkmark:after {
  display: block;
}

label .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Time slider */
.time-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #e0e0e0;
  outline: none;
  -webkit-appearance: none;
}

.time-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}

.time-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #777;
}

/* Difficulty buttons */
.difficulty-buttons {
  display: flex;
  gap: 0.5rem;
}

.difficulty-buttons button {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  background: #f9f9f9;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.difficulty-buttons button:hover {
  background: #eee;
}

.difficulty-buttons button.active {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
}
</style>