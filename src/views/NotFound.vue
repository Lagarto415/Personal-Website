<script setup>
import MainHeader from '@/components/MainHeader.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <MainHeader />
  <div class="container">
    <h1>
      <span>Oops! The page "{{ $route.path }}" doesn't exist.</span>
    </h1>
    <img src="../assets/img/technical-difficulties.png" @click="router.push('/')" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  h1 {
    color: var(--font);
  }
  a {
    color: var(--rd);
    text-decoration: underline;
    font-weight: bold;
    font-size: 20px;
  }
  img {
    width: 50vw;
    border: 3px solid var(--rd);
    cursor: pointer;
  }
  span {
    color: var(--rd);
  }
}
</style>
