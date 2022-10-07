<script setup>
import {ref} from 'vue';
import { RouterLink } from 'vue-router';
import {useGetData} from '@/composables/getData'

const pokemons = ref([])
const {data, getData, loading, errorData} = useGetData()

getData("https://pokeapi.co/api/v2/pokemon/");
</script>

<template>
    <h1>Nueva Vista</h1>
    <p v-if="loading">Cargando</p>
    <alert class="alert alert-danger mt-2" v-if="errorData">{{errorData}}</alert>
    <div v-if="data">
        <ul>
            <li v-for="poke in data.results">
                <router-link :to="`/nueva/${poke.name}`">
                    {{poke.name}}
                </router-link>
            </li>
        </ul>
        <button 
            class="btn btn-warning me-2"
            @click="getData(data.previous)"
            :disabled="!data.previous"
        >
            Prev
        </button>
        <button
            class="btn btn-primary"
            @click="getData(data.next)"
            :disabled="!data.next"
        >
            Sig
        </button>
    </div>
</template>