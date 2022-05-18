<script setup>
import BasicButton from "../commons/BasicButton.vue";
</script>

<template>
  <header>
    <h1><strong>adds </strong> portal</h1>
    <BasicButton text="Dodaj ogłoszenie"/>
    <div class="search">
      <input type="text" class="search-input">
      <BasicButton text="Szukaj"/>
    </div>
  </header>
  <div class="map">

  </div>
</template>

<style scoped>
header {
  height: 50px;
  width: 100%;
  background-color: #2d7cb0;
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 22px;
  font-weight: 200;
  color: #fff;
}

.search{
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input{
  border-radius: 3px;
  margin-right: 5px;
  border: 0;
  padding:4px;
}
</style>
