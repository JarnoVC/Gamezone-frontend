// src/apiService.js
import axios from 'axios';

// Zet de basis URL van de API
const apiClient = axios.create({
  baseURL: 'https://gamezone-mis8.onrender.com/', // zet hier de webservice url
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiClient2 = axios.create({
    baseURL: 'http://localhost:3000/', // zet hier de webservice url
    headers: {
      'Content-Type': 'application/json',
    }, 
});

export async function createProduct(ProductData) {
    try {
      const response = await apiClient2.post('/api/v1/products', ProductData);
      return response.data;
    } catch (error) {
      throw error;
    }
}

export async function deleteProduct(ProductId) {
  try {
    const response = await apiClient2.delete(`/api/v1/products/${ProductId}`);
    return response.data;

  } catch (error) {
    console.error('Error removing item from products:', error);
    throw error;
  }
}

export async function createOrder(productId, title, description) {
  try {
    const response = await apiClient2.post('/api/v1/orders', { productId, title, description });
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error.response?.data || error.message);
    throw error;
  }
}

export const updateOrderStatus = async (orderId, newStatus) => {
  try {
      // Ensure orderId is not undefined
      if (!orderId) {
          throw new Error('orderId is undefined');
      }
      const response = await apiClient2.put(`/api/v1/orders/${orderId}/status`, { status: newStatus });
      return response.data;
  } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
  }
};

export const fetchOrderCount = async () => {
  try {
      const response = await apiClient2.get(`/api/v1/orders/count`);
      return response.data;
  } catch (error) {
      console.error('Error fetching order count:', error.response?.data || error.message);
      throw error;
  }
};

export default {
    fetchData() {
      return apiClient2.get('/api/v1/products');
    },
    fetchOrders() {
      return apiClient2.get('/api/v1/orders');
    },
    updateOrderStatus(orderId, status) {
      return apiClient2.put(`/api/v1/orders/${orderId}/status`, { status });
    },
    fetchOrderCount() {
      return apiClient2.get('/api/v1/orders/count');
    },
    
   
};
  