<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

// Get the logged-in state
const isLoggedIn = computed(() => store.getters.isLoggedIn);

// Handle logout
const logout = () => {
  store.dispatch('logout');
  router.push('/login'); // Redirect to login page after logout
};
</script>

<template>
  <header class="header">

<a href="#" class="logo">
    <router-link to="/"><h1>GAMEZONE</h1></router-link> 
</a>

<nav class="navbar">
    <router-link to="/"><a href="">home</a></router-link> 
    <router-link to="/sell"><a href="">post</a></router-link> 
    <router-link to="/list"><a href="">products</a></router-link>
    <router-link to="/orders" v-if="isLoggedIn"><a href="" >orders</a></router-link> 
    <router-link to="/signup" v-if="!isLoggedIn"><a  href="">Signup</a></router-link> 
    <router-link to="/login" v-if="!isLoggedIn"><a  href="">Login</a></router-link>
    <a v-if="isLoggedIn" @click="logout" href="">Logout</a>
</nav>

<div class="icons">
    <div class="fa fa-search" id="search-btn"></div>
    <div class="fa-solid fa-cart-shopping" id="cart-btn"></div>
    <div class="fas fa-bars" id="menu-btn"></div>
</div>

</header>
</template>

<style scoped>
  .btn{
    margin-top: 1rem;
    display: inline-block;
    padding:.9rem 3rem;
    font-size: 1.7rem;
    color:#fff;
    background: #904bff;
    cursor: pointer;
}

.btn:hover{
    letter-spacing: .2rem;
}

#search-btn{
    cursor: pointer;
    color: #fff;
}

.header{
    background: #010103;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1.5rem 7%;
    border-bottom: .1rem solid rgba(255, 255, 255, 0.3);
    position: fixed;
    top:0; left: 0; right: 0;
    z-index: 1000;
}

.header .logo img{
    height: 4rem;
}

.header .navbar a{
    margin:0 1rem;
    font-size: 1.6rem;
    color:#fff;
}

.header .navbar a:hover{
    color:#904bff;
    border-bottom: .1rem solid #904bff;
    padding-bottom: .5rem;
}

.header .icons div{
    color:#fff;
    cursor: pointer;
    font-size: 2.5rem;
    margin-left: 2rem;
}

.header .icons div:hover{
    color:#904bff;
}

#menu-btn{
    display: none;
}


</style>