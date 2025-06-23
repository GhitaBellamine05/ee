<template>
  <div id="app">
  <Header />
  <router-view />
  <Footer />
  </div>
</template>

<script>
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'

export default {
  components: { Header, Footer }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>