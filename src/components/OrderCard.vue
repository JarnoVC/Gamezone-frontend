<script setup>
import { defineProps, computed, defineEmits, ref, watch  } from 'vue';
import apiConnection from '../../apiConnection';
import {updateOrderStatus} from '../../apiConnection';

const props = defineProps({
  order: Object,
});

const status = ref(props.order.status);

// Watch the order's status and update the local status ref
watch(
  () => props.order.status,
  (newStatus) => {
    status.value = newStatus;
  }
);

const toggleStatus = async () => {
    const newStatus = props.order.status === 'unshipped' ? 'shipped' : 'unshipped';
    try {
        // Ensure that order._id is defined here
        console.log('Order ID:', props.order._id);
        await updateOrderStatus(props.order._id, newStatus);
        props.order.status = newStatus; // Update the local state
    } catch (error) {
        console.error('Error updating order status:', error);
    }
};

// Computed class for the button based on the status
const buttonClass = computed(() => {
  return status.value === 'unshipped' ? 'btn-unshipped' : 'btn-shipped';
});

</script>

<template>
    <div class="order-card">
        <h2>Order ID: {{ order._id }}</h2>
        <p><strong>Title:</strong> {{ order.title }}</p>
        <p><strong>Description:</strong> {{ order.description }}</p>
        <p><strong>Status:</strong> {{ order.status }}</p>

        <button :class="buttonClass" @click="toggleStatus">
            {{ status === 'unshipped' ? 'Mark as Shipped' : 'Mark as Unshipped' }}
        </button>
    </div>
</template>
  

  
<style scoped>
.order-card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 20rem;
  display: flex;
  flex-direction: column; /* Flexbox column layout */
  justify-content: space-between; /* Space between elements */
}

.order-card h2 {
  margin: 0 0 0.5rem 0;
}

.order-card p {
  margin: 0.5rem 0;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end; /* Align the button to the right */
}

.btn-unshipped {
  background-color: #4CAF50; /* Green for unshipped */
}

.btn-shipped {
  background-color: #f44336; /* Red for shipped */
}

button:hover {
  opacity: 0.8;
}
</style>