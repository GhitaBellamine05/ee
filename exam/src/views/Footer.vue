<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Liens</h3>
          <ul>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Réseaux sociaux</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <p>Tous les droits réservés </p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #e6f2ff; 
  color: #2c3e50; 
  padding: 3rem 0 1rem;
  margin-top: 3rem;
  border-top: 1px solid #cce0ff; 
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 1.5rem;
}

.footer-title {
  color: #2980b9; 
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
}

.footer-text {
  line-height: 1.6;
  color: #4a5568; 
}


.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #3498db; 
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  display: inline-block;
}

.bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #cce0ff; 
}


</style>