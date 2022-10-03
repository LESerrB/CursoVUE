<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';
</script>

<template>
  <div class="container">
    <h1>APP</h1>
    
    <br>
    <ButtonCounter></ButtonCounter>
    <BlogPost 
      title="Post 2"
      id="2"
      body="description 2"
      colorText="primary"
    />
  </div>
</template>

<style>
  
</style>