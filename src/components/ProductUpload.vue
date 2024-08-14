<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import {createProduct}  from '../../apiConnection';
import apiConnection from '../../apiConnection';

const formData = reactive({

title: '',
description: '',
price: '',
image: null,
    // Add other form fields here
}); console.log('formData:', formData);

// Function to handle form submission
const handleFormSubmit = async () => {
    try {
        // Call the createAssortment function from apiService.js and pass formData.value

        const response = await createProduct(formData);
        console.log('Product created successfully:', response);

        console.log('Product created successfully:', formData.value);

        // Clear the form after successful submission
        formData.title = '';
        formData.description = '';
        formData.price = '';
        formData.image = null;
        alert('Product uploaded successfully!');
        } catch (error) {
        console.log('tried to upload:', formData);
        console.error('Error creating assortment:', error);
        
        // Handle error if needed
    }
};
</script>

<template>
  <section class="product-upload">
    <div class="content">
      <h3>Upload New Product</h3>
      <form @submit.prevent="handleFormSubmit">
        <div class="form-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" v-model="formData.title" required />
        </div>

        <div class="form-group">
          <label for="product-description">Product Description</label>
          <textarea id="product-description" v-model="formData.description" required></textarea>
        </div>

        <div class="form-group">
          <label for="product-price">Product Price</label>
          <input type="number" id="product-price" v-model="formData.price" required />
        </div>

        <div class="form-group">
          <label for="product-image">Product Image</label>
          <input type="file" id="product-image" @change="event => formData.image.value = event.target.files[0]" />
        </div>

        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
/* Inherit the vibe from the home page */

.product-upload {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 2rem;
}

.product-upload .content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-upload h3 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
}

.btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.5rem 3rem;
  font-size: 1.7rem;
  color: #fff;
  background: #904bff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

</style>
