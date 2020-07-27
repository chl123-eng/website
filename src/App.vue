<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <home/> -->
    <router-view/>
  </div>
</template>

<script>
import Home from './views/home/home'
export default {
  components: {
    Home
  },
  name: 'App'
}
</script>
