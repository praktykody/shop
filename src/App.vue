<template>
  <div id="app">
    <router-view></router-view> <!-- To tutaj będą wyświetlane widoki -->
  </div>
  <Navbar />
</template>

<script>

import Navbar from './components/Navbar.vue' 

export default {
  name: 'App',
  components: {
    Navbar 
  }
}

</script>



<style>

body{
  margin:0;
}

#app {
  text-align: center;

}

.navbar{
  border: 1px solid red;
  margin-top: 10px;
}

</style>