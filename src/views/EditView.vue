<template>
  <ProductForm :modelValue="product" @submit="handle_save" />
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { use_product_store } from '@/store/product_store'
import ProductForm from '@/components/ProductForm.vue'

const route = useRoute()
const router = useRouter()
const store = use_product_store()

const product = store.get_product_by_id(route.params.id)

const handle_save = (updated) => {
  store.update_product(updated)
  router.push('/')
}
</script>
