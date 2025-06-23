<template>
  <div class="header">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="logo">Recette & Régime Application</router-link>
        <ul class="navbarLinks">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/recipes">Recettes</router-link></li>
          <li><router-link to="/regimes">Régimes</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background-color: #e6f2ff;
  color: #2c3e50; 
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  color: #2980b9; 
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.navbarLinks {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navbarLinks a {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.navbarLinks a:hover {
  color: #2980b9; 
}

.navbarLinks .router-link{
  color: #2c3e50; 
  border-bottom: 2px solid #3498db; 
}
</style>