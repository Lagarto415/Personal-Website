<script setup>
import Header from '../components/MainHeader.vue'
import Item from '../components/ProjectItem.vue'
</script>

<template>
  <Header />
  <div class="container">
    <Item v-for="item in projects" :title="item.name" :route="item.link" :key="item.index" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-block: 15px;
}
</style>

<script>
// Expose RouterLink to the template
export default {
  data() {
    return {
      projects: [
        //{ name: 'LeBank', link: '/projects/lebank' },
        //{ name: 'Galactic Citizens', link: '/projects/gc' }
        //{ name: 'Europe Quiz', link: '/projects/europequiz' },
        //{ name: 'Flag Quiz', link: '/projects/flagquiz' }
        { name: 'Echoes of Eternity', link: '/projects/eoe' }
      ]
    }
  }
}
</script>
