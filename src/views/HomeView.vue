<template>
  <div class="home-view">
  <h1>THE BEST GROCERY FOOD</h1>
  <ProductList :products="store.products" />
  </div>
</template>

<style lang="scss">
.home-view{
  background: #ffffcc;

  h1{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 400;
  color: #cc0000
  }
}
</style>

<script setup>
import { use_product_store } from '@/store/product_store'
import ProductList from '@/components/ProductList.vue'

const store = use_product_store()
</script>
