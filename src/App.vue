<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './views/Footer.vue'
</script>

<template>
  <div class="container">
    <header>
    <nav>
      <img src="./assets/img/redLogo.png" />
      <RouterLink to="/" :class="{ active: $route.path === '/' }">Home</RouterLink>
      <RouterLink to="/projects" :class="{ active: $route.path === '/projects' }"
        >Projects</RouterLink
      >
      <RouterLink to="/about" :class="{ active: $route.path === '/about' }">About</RouterLink>
    </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
@import url(./assets/var.css);
* {
  margin: 0;
  padding: 0;
}

header {
  padding: 10px;
}

header img {
  width: 30px;
  margin-inline: 20px;
}

nav {
  font-size: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
}

nav a {
  color: var(--font);
  font-weight: bold;
  text-decoration: none;
  width: auto;
  transition: 0.3s ease;
}

nav a:hover {
  text-decoration: underline;
}

main {
  width: 100%;
  height: auto;
}

footer {
  position: fixed;
  width: 100%;
  margin-top: 50px;
  bottom: 0;
}

.container{
  height: 100vh;
}

.active {
  color: var(--rd);
}
</style>
