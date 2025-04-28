<template>
  <div class="home-view">
    <h1 class="banner">THE BEST GROCERY FOOD</h1>
    <div class="products">
      <h2 class="title">Product list:</h2>
      <ProductList :products="store.products" />
    </div>
  </div>
</template>

<style lang="scss">
.home-view{
  background: #ffffcc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
  margin: 0;

  .banner{
  font-size: 30px;
  color: #003300;
  padding: 20;
  }
  .title{
  font-size: 25px;
  color: #006600
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr;

    .card{
      border:2px dashed red;
      position:relative;
      
      &:nth-child(even){
        border:2px dashed green;
        top: -50px;
      }

    } 

  }
}
</style>

<script setup>
import { use_product_store } from '@/store/product_store'
import ProductList from '@/components/ProductList.vue'

const store = use_product_store()
</script>
