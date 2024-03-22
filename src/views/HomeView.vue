<script setup>

</script>

<template>
  <div class="header">
    <h1><span>L</span>agarto5.de</h1>
  </div>
  <div class="container">
    <div class="left">
      <p>Hello, I'm <h1>Yannick</h1></p>
      <p>I have {{years}}  years and {{months}}  months experience in Webdevelopment</p>
    </div>
    <div class="right">
      <img src="../assets/img/redLogo.png">
    </div>
  </div>
</template>

<style scoped>
@import url(../assets/var.css);

*{
  margin: 0;
  padding: 0;
}

.container{
  height: 50%;
  width: 100%;
  background: var(--bg);
  color: var(--font);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.header{  
  color: var(--font);
  text-align: center;
  margin-top: 100px;  
  span{
    color: var(--rd);
    font-size: larger;
  }
}

.right img{
  width: 100px;
}

.left{
  h1{
    font-size: 50px;
    color: var(--rd);
  }
  p{
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
    const currentDate = new Date(); // Get current date
    const september2023 = new Date('September 1, 2023'); // September 2023 date
    
    // Calculate the difference in years and months
    let yearsDiff = currentDate.getFullYear() - september2023.getFullYear();
    let monthsDiff = currentDate.getMonth() - september2023.getMonth();

    // Adjust the difference if the current month is before September
    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    this.years = yearsDiff;
    this.months = monthsDiff;
  }
}
</script>

