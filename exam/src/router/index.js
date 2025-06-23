import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipesView from '../views/RecipeView.vue'
import RecipeDetailView from '../components/RecipeDetailSection.vue'
import DietsView from '../views/DietView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/recipes', name: 'recipes', component: RecipesView },
  { path: '/recipes/:id', name: 'recipe-detail', component: RecipeDetailView },
  { path: '/regimes', name: 'diets', component: DietsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router