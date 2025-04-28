<template>
  <div id="app">
    <router-view></router-view> <!-- To tutaj będą wyświetlane widoki -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body{
  margin:0;
}

#app {
  text-align: center;
}

</style>