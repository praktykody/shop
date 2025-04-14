<template>
  <ProductList :products="store.products" />
</template>

<script setup>
import { use_product_store } from '@/store/product_store'
import ProductList from '@/components/ProductList.vue'

const store = use_product_store()
</script>
