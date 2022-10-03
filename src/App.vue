<script>
  import{ref} from "vue";
  
  export default{
    data(){
      return{
        counter: 0,
      };
    },

    methods: {
      increment(){
        this.counter++
      },
    },
  };
</script>

<template>
  <h1>APP</h1>
  <button @click="increment">{{counter}}</button>
</template>

<style>
  
</style>