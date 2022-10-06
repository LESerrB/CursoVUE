<script setup>
import axios from 'axios';
import {ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const poke = ref({});

const back = () => {
    router.push('/nueva')
}

const getData = async () =>{
    try {
        const data = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
        );
        poke.value = data.data;
    } catch (error) {
        console.log(error);
    }
};

getData();
</script>

<template>
    <div>
        <h1>Nombre: {{$route.params.name}}</h1>
        <img :src="poke.sprites.front_default" alt="">
    </div>
    
    <div>
        <button @click="back">Regresar</button>
    </div>    
</template>