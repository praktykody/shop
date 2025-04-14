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

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>