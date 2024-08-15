<script setup>

</script>

<template>
 
 <section class="home" id="home">

    <div class="content">
        <h3>The future of gaming</h3>
        <p>Level Up Your Game. Discover the latest gear and exclusive deals, all in one place. Ready to conquer?</p>
        <router-link to="/list"><a href="#" class="btn">Getting Started</a></router-link>
    </div>

</section>

</template>

<style scoped>


.btn{
    margin-top: 1rem;
    display: inline-block;
    padding:.5rem 3rem;
    font-size: 1.7rem;
    color:#fff;
    background: #904bff;
    cursor: pointer;
}
.home{
    min-height: 100vh;
    display: flex;
    align-items: center;
    background:url(../assets/home-img.jpeg) no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw; 

}

.home .content{
    max-width: 60rem;
    padding-left: 6rem;
}

.home .content h3{
    font-size: 6rem;
    text-transform: uppercase;
    color:#fff;
}

.home .content p{
    font-size: 2rem;
    font-weight: lighter;
    line-height: 1.8;
    padding:1rem 0;
    color:#eee;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .home {
    background-position: left;
    justify-content: center;
    text-align: center;
  }

  .home .content h3 {
    font-size: 4.5rem;
  }

  .home .content p {
    font-size: 1.5rem;
  }
}

</style>