<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';
import PaginatePost from './components/PaginatePost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

import { ref, computed, onMounted } from "vue";

const posts = ref([]);
const postXpage = 10
const inicio = ref(0)
const fin = ref(postXpage)
const loading = ref(true)

const favorito = ref("")

const cambiarFavorito = (title) => {
  favorito.value = title;
};

const next = () => {
  inicio.value += postXpage;
  fin.value += postXpage;
}

const prev = () => {
  inicio.value -= postXpage;
  fin.value -= postXpage;
}

onMounted(async() => {
  loading.value = true;

  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts.value = await res.json();
  }catch(error){
    console.log(error);
  }finally{
    loading.value = false;
  }
});

/*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>{
    posts.value = data;
  })
  .finally(() => loading.value = false)*/

const maxLenght = computed(() => posts.value.length)
</script>

<template>
  <LoadingSpinner v-if="loading"/>
  <div class="container" v-else>
    <h1>APP</h1>
    
    <br>
    <h2>Mis Posts Favoritos: {{favorito}}</h2>

    <PaginatePost
      @next="next"
      @prev="prev"
      :inicio="inicio"
      :fin='fin'
      :maxLenght="posts.length"
      class="mb-2"
    />

    <BlogPost
      v-for="post in posts.slice(inicio,fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      :cambiarFavorito = "cambiarFavorito"
      class="mb-2"
    >
    </BlogPost>
  </div>
</template>

<style>
  
</style>