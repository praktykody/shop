<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/card">Card</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .navbar {

    background-color: hsl(71, 84%, 53%);
    padding: 1rem;
  }
  
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    justify-content: center;
  }
  
  .navbar li {
    color: rgb(73, 131, 131);
  }
  
  .navbar a {
    color: hsl(0, 0%, 3%);
    text-decoration: none;
    font-weight: bold;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>