<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Form state
const productName = ref('');
const productDescription = ref('');
const productPrice = ref('');
const productImage = ref(null);

// Function to handle form submission
const handleFormSubmit = async () => {
  const formData = new FormData();
  formData.append('name', productName.value);
  formData.append('description', productDescription.value);
  formData.append('price', productPrice.value);
  if (productImage.value) {
    formData.append('image', productImage.value);
  }

  // Here you would send the formData to your back end using fetch or axios
  console.log('Product uploaded:', formData);

  try {
    const response = await axios.post('http://localhost:3000/api/v1/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Product uploaded:', response.data);
    alert('Product uploaded successfully!');
    // Optionally, clear the form fields after successful submission
    productName.value = '';
    productDescription.value = '';
    productPrice.value = '';
    productImage.value = null;
  } catch (error) {
    console.error('Error uploading product:', error);
    alert('Failed to upload product.');
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
          <input type="text" id="product-name" v-model="productName" required />
        </div>

        <div class="form-group">
          <label for="product-description">Product Description</label>
          <textarea id="product-description" v-model="productDescription" required></textarea>
        </div>

        <div class="form-group">
          <label for="product-price">Product Price</label>
          <input type="number" id="product-price" v-model="productPrice" required />
        </div>

        <div class="form-group">
          <label for="product-image">Product Image</label>
          <input type="file" id="product-image" @change="event => productImage.value = event.target.files[0]" />
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
