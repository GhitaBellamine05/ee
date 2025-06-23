<template>
  <div class="diet-card">
    <h3>{{ diet.name }}</h3>
    <p class="diet-description">{{ diet.description }}</p>
    
    <div class="diet-details">
      <div class="allowed">
        <h4>Aliments autorisés</h4>
        <ul>
          <li v-for="(item, index) in diet.allowed" :key="'allowed-' + index">{{ item }}</li>
        </ul>
      </div>
      <div class="forbidden">
        <h4>Aliments interdits</h4>
        <ul>
          <li v-for="(item, index) in diet.forbidden" :key="'forbidden-' + index">{{ item }}</li>
        </ul>
      </div>
    </div>
    
    <router-link to="/recipes" class="view-recipes-btn">
      Voir les recettes compatibles
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DietCard',
  props: {
    diet: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.diet-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.diet-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.diet-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.diet-description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.diet-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.allowed h4,
.forbidden h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.allowed ul,
.forbidden ul {
  list-style-type: none;
}

.allowed li {
  color: #42b983;
  margin-bottom: 0.25rem;
  position: relative;
  padding-left: 1rem;
}

.allowed li::before {
  content: "O";
  position: absolute;
  left: 0;
  color: #42b983;
}

.forbidden li {
  color: #e74c3c;
  margin-bottom: 0.25rem;
  position: relative;
  padding-left: 1rem;
}

.forbidden li::before {
  content: "X";
  position: absolute;
  left: 0;
  color: #e74c3c;
}

.view-recipes-btn {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.view-recipes-btn:hover {
  background-color: #3aa876;
}
</style>