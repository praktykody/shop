<template>
  <form @submit.prevent="submit">
    <input v-model="local_product.name" placeholder="Nazwa" />
    <input v-model.number="local_product.price" type="number" placeholder="Cena" />
    <input v-model="local_product.image" placeholder="URL obrazka" />
    <textarea v-model="local_product.description" placeholder="Opis" />
    <button type="submit">Zapisz</button>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({ modelValue: Object })
const emit = defineEmits(['update:modelValue', 'submit'])

const local_product = ref({ ...props.modelValue })

watch(() => props.modelValue, (val) => {
  local_product.value = { ...val }
}, { deep: true })

const submit = () => emit('submit', local_product.value)
</script>
