<script setup>
  import { ref, reactive ,computed, onMounted, onUnmounted, watch } from 'vue';
  import ProductCard from './ProductCard.vue';
  import apiConnection from '../../apiConnection';
  
  const products = ref([]);
  
  onMounted(() => {
    fetchData().then(() => {
      console.log('Data fetched:', products.value);
    });
  });

  const fetchData = async () => {
  try {
    const response = await apiConnection.fetchData();
    console.log('API Response:', response.data);
    products.value = response.data.data.products;

    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

</script>

<template>
    <section class="product-list">
      <h2>Our Products</h2>
      <div class="products-container">
        <ProductCard v-for="product in products" :key="product._id" :product="product" />
      </div>
    </section>
</template>
  
  
  
<style scoped>
  .product-list {
    padding: 10rem;
    text-align: center;
  }
  
  .product-list h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
  }
  
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .product-list {
      padding: 1rem;
    }
  
    .product-list h2 {
      font-size: 2rem;
    }
  
    .products-container {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
  