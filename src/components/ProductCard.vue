<script setup>
import { defineProps, computed, defineEmits, ref  } from 'vue';
import { useStore } from 'vuex';
import apiConnection from '../../apiConnection';
import {deleteProduct, createOrder}  from '../../apiConnection';

import axios from 'axios';

const emit = defineEmits(['productDeleted', 'productOrdered']);


const props = defineProps({
  product: Object,
});

let products = ref([]);

const store = useStore();
const isLoggedIn = computed(() => store.getters.isLoggedIn);



const removeItem = async (id) => {
    const productID = id;
    const itemIndex = products.value.findIndex(item => item.id === id);

    console.log("product id", productID);
    try {
        const response = await deleteProduct(productID);
        const data = response.data;
        products.value.splice(itemIndex, 1);
    } catch (error) {
        console.log(error);
    }

    // return data;
}

const orderProduct = async (productId) => {
  if (!props.product) {
    console.error('No product data available.');
    return;
  }

  const { title, description } = props.product;
  console.log('Creating order with:', { productId, title, description });
  try {
    await createOrder(productId, title, description);
    alert('Order placed successfully!');
    emit('productOrdered', productId);
  } catch (error) {
    console.error('Failed to place order:', error.response?.data || error.message);
  }
};
</script>

<template>
    <div class="product-card" v-if="product">
      <img :src="product.image" alt="Product Image" v-if="product.image" />
      <div class="product-info">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">${{ product.price.toFixed(2) }}</p>
        <button v-if="isLoggedIn" @click="removeItem(product._id)" class="delete-btn">
          Delete
        </button>
        <button v-if="!isLoggedIn" @click="orderProduct(product._id)" class="bestel-btn">
          Bestellen
        </button>
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

  .delete-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: absolute;
}

.delete-btn:hover {
  background-color: darkred;
}

.bestel-btn {
  background-color: greenyellow;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: absolute;
}

.bestel-btn:hover {
  background-color: green;
}
</style>
  