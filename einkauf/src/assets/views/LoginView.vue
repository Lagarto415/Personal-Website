<template>
  <div class="main">
    <div class="panel">
      <p>Anmelden</p>
      <input
        type="text"
        placeholder="Passwort"
        v-model="password"
        @keyup.enter="checkPW(password)"
      />
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
  width: 300px;
  height: 150px;
  background: linear-gradient(to right, var(--blue), var(--violet));
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    border-radius: 5px;
    font-size: 20px;
    padding: 10px;
    border: none;
    outline: none;
    text-align: center;
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
      // Set a cookie named 'user' with the value 'John Doe' that expires in 7 days
      Cookies.set('login', true, { expires: 7 })
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
