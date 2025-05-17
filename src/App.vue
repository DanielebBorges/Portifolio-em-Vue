<template>
  <div class="bg-zinc-900 min-h-screen">
    <navbar/>
    <div class="main container mx-auto px-4 py-6">
      <router-view/>
    </div>
  </div> 
  <Footer />
</template>

<script setup>
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>