<script setup>
  const name = 'Vue dinámico';
  const styleColor = "color: blue";
  const arrayColors = ["blue", "red", "green"];
  const activo = true;
  const encendido = true;
</script>

<template>
  <H1>Hola {{name}}</H1>

  <br>
  <h2 :style="styleColor">Azul</h2>

  <br>
  <h2 :style="`color: ${arrayColors[2]}`">No azul</h2>

  <h2>
    {{activo ? "Activo" : "Inactivo"}}
  </h2>

  <br>
  <h2 v-if="encendido === true">
    <span>Encendido</span>
    fadrg
  </h2>
  <h2 v-else-if="encendido === false">Apagado</h2>
  <h2 v-else>Indeciso</h2>

  <br>
  <h2 v-show="activo">Visible</h2>
</template>

<style>
  h1{
    color: red;
  }
</style>