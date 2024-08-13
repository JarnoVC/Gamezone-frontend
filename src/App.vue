<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue';
</script>

<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view></router-view>
    </main>
    
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

:root{
    --main-color:#904bff;
    --black:#13131a;
    --bg:#010103;
    --border:.1rem solid rgba(255, 255, 255, 0.3);
}

*{
    font-family: 'Roboto', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    outline: none; border:none;
    text-decoration: none;
    text-transform: capitalize;
    transition: .2s linear;
}

#app {
  overflow-x: hidden; /* prevent horizontal scrolling */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes full viewport height */
}

.content {
  flex: 1; /* Allow content to grow and take up available space */
  
  padding-bottom: 20px; /* Space between content and footer */
}

Header, Footer {
    position: relative; /* or absolute, depending on your layout */
    z-index: 2; /* ensure the header and footer are in front of the popup */
}

footer {
  margin-top: auto; /* Push the footer to the bottom */
  z-index: 2; /* Ensure the footer is on top */
}
</style>
