<template>
  <div id="app">
    <Airdrop />
  </div>
</template>

<script>
import Airdrop from './components/Airdrop.vue'

export default {
  name: 'app',
  components: {
    Airdrop
  }
}
</script>

<style>
#app, button, input {
  font-family: "Open Sans", "Source Han Sans", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  background-color: #fafafa;
  padding: 0;
  margin: 0;
}
</style>
