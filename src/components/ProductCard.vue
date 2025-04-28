<template>
  <router-link class="card" :to="'/product/' + product.slug">
    <img :src="product.image" alt="" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <strong>{{ product.price }} zł</strong>
    <router-link :to="`/edit/${product.id}`">Edytuj</router-link>
  </router-link>
</template>

<script setup>
defineProps({ product: Object })
</script>

<style>
.card{
  text-decoration: none;
  color:inherit;
}
</style>
