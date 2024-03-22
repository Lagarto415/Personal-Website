<template>
  <div class="container">
    <div class="line" v-for="project in projects" :key="project.name">
      <router-link :to="project.link">
        <div class="item">
          {{ project.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 50px;
}

.item {
  display: flex; /* Use flexbox */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  width: 80vw;
  height: 200px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: 0.5s ease;
}

.item a,
.item {
  text-decoration: none;
  color: var(--rd);
  font-size: 30px;
  font-weight: bold;
}

.item:hover {
  background: rgba(242, 61, 76, 0.8);
  color: var(--font);
}

/* CSS to remove link text decoration */
.router-link,
.line a {
  text-decoration: none; /* Remove underline */
}
</style>

<script setup>
// Import RouterLink from vue-router
import { RouterLink } from 'vue-router'

// Define your projects data
const projects = [
  { name: 'LeBank', link: '/lebank' },
  { name: 'Galactic Citizens', link: '/gc' },
  { name: 'Europe Quiz', link: '/europequiz' },
  { name: 'Flag Quiz', link: '/flagquiz' }
]
</script>

<script>
// Expose RouterLink to the template
export default {
  components: {
    RouterLink
  },
  setup() {
    return {
      projects
    }
  }
}
</script>
