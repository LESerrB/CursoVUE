<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';
import { ref } from "vue";

const posts = ref([])

const favorito = ref("")

const cambiarFavorito = (title) => {
  favorito.value = title;
};

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>{
    post.value = data;
  });
</script>

<template>
  <div class="container">
    <h1>APP</h1>
    
    <br>
    <h2>Mis Posts Favoritos: {{favorito}}</h2>

    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @cambiarFavorito = "cambiarFavorito"
    ></BlogPost>
  </div>
</template>

<style>
  
</style>