import { defineStore } from 'pinia'
import { ref } from 'vue'

export const use_product_store = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Koszulka', price: 79, image: '/placeholder.jpg', description: 'Wygodna bawełniana koszulka' },
    { id: 2, name: 'Spodnie', price: 129, image: '/placeholder.jpg', description: 'Klasyczne jeansy' }
  ])

  const get_product_by_id = (id) => products.value.find(p => p.id === parseInt(id))

  const update_product = (updated) => {
    const index = products.value.findIndex(p => p.id === updated.id)
    if (index !== -1) products.value[index] = { ...updated }
  }

  return { products, get_product_by_id, update_product }
})
