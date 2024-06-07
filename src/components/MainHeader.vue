<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <img src="../assets/img/redLogo.png" />
      <RouterLink
        v-for="link in nav"
        :key="link.index"
        :to="link.path"
        :class="{ active: $route.path === link.path }"
        >{{ link.name }}</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 10px;
  img {
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
      position: relative;
      --link-color: var(--font);
    }
    a:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px; /* Adjust to position the line below the text */
      width: 0; /* Initially, no underline */
      height: 2px; /* Adjust underline thickness */
      background-color: var(--link-color); /* Match your accent color */
      transition: width 0.3s ease; /* Smooth transition */
    }
    a:hover:after {
      width: 100%; /* Underline expands to full width on hover */
    }
    a.active {
      --link-color: var(--rd);
      color: var(--rd);
    }
    a.not(.active) {
      --link-color: var(--font);
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      nav: [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' }
      ]
    }
  }
}
</script>
