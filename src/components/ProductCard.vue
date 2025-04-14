<template>
  <div class="card">
    <img :src="product.image" alt="" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <strong>{{ product.price }} zł</strong>
    <router-link :to="`/edit/${product.id}`">Edytuj</router-link>
  </div>
</template>

<script setup>
defineProps({ product: Object })
</script>
