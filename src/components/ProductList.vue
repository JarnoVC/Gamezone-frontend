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

const removeProduct = (productId) => {
  products.value = products.value.filter(product => product._id !== productId);
};

</script>

<template>
    <section class="product-list">
      <h2>Our Products</h2>
      <div class="products-container">
        <ProductCard v-for="product in products" :key="product._id" :product="product" @productDeleted="removeProduct"/>
      </div>
    </section>
</template>
  
  
  
<style scoped>
.product-list {
  padding: 2rem;
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

/* Flex item sizing */
.product-card {
  flex: 1 1 calc(33.333% - 1.5rem); /* Three items per row with gap considered */
  max-width: calc(33.333% - 1.5rem);
  box-sizing: border-box; /* Includes padding and border in the element's total width and height */
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .product-card {
    flex: 1 1 calc(50% - 1.5rem); /* Two items per row */
    max-width: calc(50% - 1.5rem);
  }
}

@media (max-width: 768px) {
  .product-card {
    flex: 1 1 100%; /* One item per row */
    max-width: 100%;
  }
}

.product-card img {
  width: 100%; /* Ensures image takes up the full width of its container */
  height: auto;
  display: block;
  border-radius: 8px; /* Rounded corners for images */
}

.product-card h3 {
  margin: 1rem 0;
}

.product-card p {
  margin: 0.5rem 0;
}

.product-card button {
  margin-top: 1rem;
}
</style>

  