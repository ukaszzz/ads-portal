<script setup>
import NavBar from "./components/layout/NavBar.vue";
</script>

<template>
  <NavBar/>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "monospace";
}
</style>
