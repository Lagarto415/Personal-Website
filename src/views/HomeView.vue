<script setup>
import Header from '../components/MainHeader.vue'
import Footer from '../components/MainFooter.vue'
</script>

<template>
  <Header />
  <div class="main">
    <div class="header">
      <h1><img src="../assets/img/redLogo.png" alt="L" />agarto5.de</h1>
    </div>
    <div class="container">
      <div class="left">
        <p>Hello, I am</p>
        <h1>Yannick</h1>
        <p>I started learning webdevelopment {{ years }} years and {{ months }} months ago.</p>
      </div>
      <div class="right">
        <img src="../assets/img/redLogo.png" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
body,
html {
  background-color: var(--bg);
}

.main {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.container {
  width: 100%;
  background: var(--bg);
  color: var(--font);
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.header {
  color: var(--font);
  text-align: center;
  span {
    color: var(--rd);
    font-size: larger;
  }
  img {
    width: 35px;
  }
}

.right img {
  width: 100px;
}

.left {
  h1 {
    font-size: 50px;
    color: var(--rd);
  }
  p {
    font-size: 20px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      years: 0,
      months: 0
    }
  },
  mounted() {
    const currentDate = new Date() // Get current date
    const september2023 = new Date('September 1, 2023') // September 2023 date

    // Calculate the difference in years and months
    let yearsDiff = currentDate.getFullYear() - september2023.getFullYear()
    let monthsDiff = currentDate.getMonth() - september2023.getMonth()

    // Adjust the difference if the current month is before September
    if (monthsDiff < 0) {
      yearsDiff--
      monthsDiff += 12
    }

    this.years = yearsDiff
    this.months = monthsDiff
  }
}
</script>
