<script setup>
  import { ref, reactive ,computed, onMounted, onUnmounted, watch } from 'vue';
  import OrderCard from './OrderCard.vue';
  import apiConnection from '../../apiConnection';
  import { fetchOrderCount }  from '../../apiConnection';

  
  
  const orders = ref([]);
  const orderCount = ref(0); // Ref to hold the order count
  
  

const fetchOrders = async () => {
  try {
    const response = await apiConnection.fetchOrders();
    console.log('API Response:', response.data);
    orders.value = response.data.data.orders;
    
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const updateOrderCount = async () => {
    try {
        const response = await apiConnection.fetchOrderCount();
        orderCount.value = response.data.count;
    } catch (error) {
        console.error('Error fetching order count:', error);
    }
};

onMounted(() => {
    fetchOrders().then(() => {
      console.log('Data fetched:', orders.value);
      updateOrderCount(); // Update the order count after fetching orders

    });
  });

fetchOrders();

// Watch for changes in orders and update the count accordingly
watch(orders, async (newOrders, oldOrders) => {
  console.log('Orders changed. Old:', oldOrders, 'New:', newOrders); // Debugging log
  await updateOrderCount();
}, { deep: true }); // Ensure deep watching of the array

</script>

<template>
    <section class="product-list">
      <h2>Our Orders</h2>
      <p><strong>Total Orders:</strong> {{ orderCount }}</p> <!-- Display the order count -->
      <div class="products-container">
        <OrderCard v-for="order in orders" :key="order._id" :order="order"/>
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
  