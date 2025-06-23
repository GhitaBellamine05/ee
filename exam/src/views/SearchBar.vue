<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchTerm"
      @input="handleSearch"
      placeholder="Rechercher une recette..."
      class="search-input"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchTerm.toLowerCase())
    }
  }
}
</script>

<style scoped>
.search-bar {
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #42b983;
}
</style>