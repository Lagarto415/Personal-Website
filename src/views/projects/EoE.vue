<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="head">
    <div class="title">
      <h1>Echoes of Eternity</h1>
    </div>
    <div class="navigation">
      <RouterLink to="/"><span>Home</span></RouterLink>
      <RouterLink to="/"><span>Features</span></RouterLink>
      <RouterLink to="/"><span>About</span></RouterLink>
    </div>
    <div class="socials">
      <img src="../../assets/img/eoe/EoeDiscord.png" alt="" />
      <img src="../../assets/img/eoe/EoeTwitter.png" alt="" />
      <img src="../../assets/img/eoe/EoeYouTube.png" alt="" />
    </div>
  </div>
  <div class="main">
    <div class="text">
      <p>
        Discover the vast world of Novaria <br /><br />
        Explore the endless landscapes, fight fearsome enemies and find hidden treasures in this
        captivating fantasy world. Be ready for an adventure full of discoveries and challenges!
      </p>
      <button>Get Access</button>
    </div>
    <div class="features">
      <p>Features</p>
      <div class="slideshow">
        <img src="../../assets/img/eoe/fighting.png" alt="" />
      </div>
    </div>
  </div>
  <div class="foot">
    <h1>Echoes of Eternity</h1>
    <div class="wishlist">
      <h2>WISHLIST NOW</h2>
      <button>
        <img src="../../assets/img/eoe/Steam.png" alt="" />
        <span>STEAM</span>
      </button>
    </div>
    <div class="socials">
      <img src="../../assets/img/eoe/EoeDiscord.png" alt="" />
      <img src="../../assets/img/eoe/EoeTwitter.png" alt="" />
      <img src="../../assets/img/eoe/EoeYouTube.png" alt="" />
    </div>
    <p>Echoes of Eternity © 2024 | Echo Inc.</p>
  </div>
</template>

<style scoped>
@import url(https://db.onlinewebfonts.com/c/e094574e8a1b556b3ccfc2a7a57b45c5?family=PentaGrams+Salemica);
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

.head {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 200;
  a {
    text-decoration: none;
  }
  padding-inline: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--EOEdarkBlue) !important;
  h1 {
    font-family: 'PentaGrams Salemica';
    background: linear-gradient(90deg, #dbdaca, #91abc8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 23px;
    font-weight: 600;
  }
  .navigation {
    display: flex;
    gap: 40px;
    span {
      color: var(--EOEfont);
    }
  }
  .socials {
    img {
      width: 25px;
    }
    display: flex;
    gap: 30px;
  }
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .text {
    margin-block: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    gap: 30px;
    width: 35%;
    align-self: flex-start;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    text-shadow: rgba(0, 0, 0, 0.5) 0.5px 0.5px 5px;
    font-size: 18px;

    button {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 500;
      width: 180px;
      font-size: 23px;
      background-color: var(--EOEbuttonBlue1);
      color: var(--EOEfont);
      border: 2px solid var(--EOEbuttonBlue2);
      padding-block: 15px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  .features {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 500;
    color: var(--EOEfont);
    font-size: 35px;
  }

  background-color: var(--EOEdarkBlue);
  background-image: url('../../assets/img/eoe/mainBg.png');
}

.foot {
  gap: 30px;
  background-color: var(--EOEdarkBlue) !important;
  background-image: url('../../assets/img/eoe/Footer.png');
  h1 {
    font-family: 'PentaGrams Salemica';
    background: linear-gradient(90deg, #dbdaca, #91abc8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 45px;
    font-weight: 400;
  }

  .wishlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    color: var(--EOEfont);
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 200;

    button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      text-align: center;
      border: 0;
      border-radius: 5px;
      img {
        width: 30px;
      }
      background-color: #01baef;
      color: white;
      width: 130px;
      font-family: 'Josefin Sans', sans-serif;
      height: 40px;
      font-size: 18px;
      cursor: pointer;
    }
  }

  .socials {
    display: flex;
    gap: 30px;
    img {
      width: 25px;
    }
  }

  p {
    font-family: 'Josefin Sans', sans-serif;
    color: var(--EOEfont);
    font-weight: 100;
    margin-bottom: 15px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
