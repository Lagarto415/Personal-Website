<script setup></script>

<template>
  <div class="container">
    <div class="line">
      <router-link :to="route">
        <div class="item">
          {{ title }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>
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
