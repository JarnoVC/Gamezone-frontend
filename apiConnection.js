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



export default {
 
};
