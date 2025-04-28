<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="#">About</router-link></li>
        <li><router-link to="#">Card</router-link></li>
        <li><router-link to="#">Profile</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped lang="scss">
 .navbar {
    display: flex;
    justify-content: center;
    background-color: hsl(71, 84%, 53%);
    padding: 1rem;
    margin: auto;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  li {
    color: rgb(73, 131, 131);
  }

  a {
    color: hsl(0, 0%, 3%);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
  </style>