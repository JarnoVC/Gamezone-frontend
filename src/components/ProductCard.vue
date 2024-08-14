<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  product: Object,
});
</script>

<template>
    <div class="product-card" v-if="product">
      <img :src="product.image" alt="Product Image" v-if="product.image" />
      <div class="product-info">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">${{ product.price.toFixed(2) }}</p>
      </div>
    </div>
</template>
  

  
<style scoped>
  .product-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    margin: 1rem;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .product-info {
    padding: 1rem;
    text-align: center;
  }
  
  .product-info h3 {
    font-size: 1.5rem;
    color: #333;
    margin: 0.5rem 0;
  }
  
  .product-info p {
    font-size: 1rem;
    color: #666;
  }
  
  .price {
    font-size: 1.2rem;
    color: #904bff;
    font-weight: bold;
  }
</style>
  