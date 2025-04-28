<script setup>

  import { useRoute } from 'vue-router'
  import { use_product_store } from '@/store/product_store'

  const route = useRoute()
  const store = use_product_store()

  const product = store.get_product_by_slug(route.params.slug)
  console.log({ product })

</script>

<template>
  <div class="product-view">

    <div class="image-wrapper">
      <img :src="product.image" :alt="product.name">
    </div>

    <header class="product-header">
      <div class="title">
        <h1>{{ product.name }}</h1>
        <div class="rate">
          ⭐⭐⭐⭐
        </div>
      </div>
      <div class="amount">
        2kg
      </div>
    </header>

    <article class="product-desc-wrapper">
      <h2>Description</h2>
      <p>
        {{ product.description }}
      </p>
    </article>

  </div>
</template>


<style lang="scss">
.product-view{
  padding:1rem;

  h1, h2, h3 {
    margin: unset;
  }

  .image-wrapper{

    img{
      width:80%;
    }

  }

  .product-header{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-desc-wrapper{
    margin-top:2rem;
    text-align: left;
  }

}
</style>