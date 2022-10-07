<script setup>
//import axios from 'axios';
//import {ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useGetData} from '@/composables/getData'

const route = useRoute();
const router = useRouter();
//const poke = ref({});
const {getData, data, loading, errorData} = useGetData()

const back = () => {
    router.push('/nueva')
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
    <p v-if="loading">Cargando</p>
    <alert class="alert alert-danger mt-2" v-if="errorData">{{errorData}}</alert>
    <div v-if="data">
        <h1>Nombre: {{$route.params.name}}</h1>
        <img :src="data.sprites?.front_default" alt="">
    </div>

    <div>
        <button @click="back" class="btn btn-outline-primary">Regresar</button>
    </div>    
</template>