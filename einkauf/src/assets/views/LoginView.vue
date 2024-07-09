<template>
  <div class="main">
    <div class="panel">
      <p>Login</p>
      <input 
        type="text"
        placeholder="Dein Name"
        v-model="name"
      >
      <input
        type="text"
        placeholder="Passwort"
        v-model="password"
        @keyup.enter="checkPW(password)"
      />
      <a @click="checkPW(password)">Anmelden</a>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  height: 100vh;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
}

.panel {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 30px;
  background: linear-gradient(to right, var(--blue), var(--violet));
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    height: 30px;
    border-radius: 5px;
    font-size: 20px;
    padding: 10px;
    border: none;
    outline: none;
    text-align: center;
  }
  a {
    font-size: 20px;
    background-color: white;
    color: var(--violet);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  a:hover{
    transform: scale(105%);
    color: var(--blue);
  }
}
</style>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'ListView',
  data() {
    return {
      authorized: false,
      password: ''
    }
  },
  mounted() {
    console.log('Login component has been mounted!')
    this.getCookie()
    if (this.authorized) {
      this.$router.push('/liste')
    }
  },
  methods: {
    setCookie() {
      Cookies.set('login', true, { expires: 7 });
      Cookies.set('username', this.name, { expires: 7 }); 
    },
    getCookie() {
      // Get the value of the 'user' cookie
      this.authorized = Cookies.get('login')
    },
    checkPW(input) {
      if (input == 'eutelsat') {
        this.authorized = true
        this.setCookie()
        this.$router.push('/liste')
      }
    }
  }
}
</script>
