<template>
    <div class="container">
        <h1>SITE NOT FOUND</h1>
        <RouterLink to="/">Home</RouterLink>
    </div>
</template>

<style scoped>
@import url(../assets/var.css);

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        color: var(--font);
    }
    a{
        color: var(--rd);
        text-decoration: underline;
        font-weight: bold;
        font-size: 20px;
    }
}
</style>

<script setup>
import { RouterLink } from 'vue-router'
</script>