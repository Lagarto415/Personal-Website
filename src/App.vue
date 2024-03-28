<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './views/Footer.vue'
</script>

<template>
    <header>
    <nav>
      <img src="./assets/img/redLogo.png" />
      <RouterLink to="/" :class="{ active: $route.path === '/' }">Home</RouterLink>
      <RouterLink to="/projects" :class="{ active: $route.path === '/projects' }">Projects</RouterLink>
      <RouterLink to="/about" :class="{ active: $route.path === '/about' }">About</RouterLink>
    </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <Footer />
    </footer>
</template>

<style scoped>
@import url(./assets/var.css);

header {
  padding: 10px;
  img{
    width: 30px;
    margin-inline: 20px;
  }
  nav {
    font-size: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    a {
      color: var(--font);
      font-weight: bold;
      text-decoration: none;
      width: auto;
      transition: 0.1s ease;
    }
    a:hover{
      color: var(--rd);
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

footer {
  width: 100%;
  margin-block: 30px;
}

.active {
  color: var(--rd);
}
</style>
