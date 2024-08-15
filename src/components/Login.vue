<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  
  const store = useStore();
  const router = useRouter();
  
  const handleLogin = async () => {
    try {
      await store.dispatch('login', { email: email.value, password: password.value });
      router.push('/'); // Redirect after successful login
    } catch (error) {
      alert('Login failed.');
    }
  };
</script>

<template>
    <section class="auth">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </section>
</template>
  
  
  
<style scoped>
/* Add styling similar to your previous design */
.auth {
text-align: center;
padding: 2rem;
}

.auth h2 {
font-size: 2rem;
margin-bottom: 1.5rem;
}

.auth input {
display: block;
width: 100%;
max-width: 300px;
margin: 0.5rem auto;
padding: 0.8rem;
font-size: 1rem;
border: 1px solid #ccc;
border-radius: 5px;
}

.auth button {
display: block;
margin: 1rem auto;
padding: 0.8rem 2rem;
font-size: 1.2rem;
color: #fff;
background-color: #904bff;
border: none;
border-radius: 5px;
cursor: pointer;
}
</style>
  