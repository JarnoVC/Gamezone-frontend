<script setup>

</script>

<template>
  <header class="header">

<a href="#" class="logo">
    <h1>GAMEZONE</h1>
</a>

<nav class="navbar">
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#menu">menu</a>
    <a href="#products">products</a>
    <a href="#review">review</a>
    <a href="#contact">contact</a>
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
    background: var(--main-color);
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
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:1.5rem 7%;
    border-bottom: var(--border);
    position: fixed;
    top:0; left: 0; right: 0;
    z-index: 1000;
    background-color: black;
}

.header .logo img{
    height: 6rem;
}

.header .navbar a{
    margin:0 1rem;
    font-size: 1.6rem;
    color:#fff;
}

.header .navbar a:hover{
    color:var(--main-color);
    border-bottom: .1rem solid var(--main-color);
    padding-bottom: .5rem;
}

.header .icons div{
    color:#fff;
    cursor: pointer;
    font-size: 2.5rem;
    margin-left: 2rem;
}

.header .icons div:hover{
    color:var(--main-color);
}

#menu-btn{
    display: none;
}


</style>