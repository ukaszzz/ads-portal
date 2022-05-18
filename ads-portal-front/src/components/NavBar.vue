<script setup>
</script>

<template>
  <header>
    <h1><strong>adds </strong> portal</h1>
    <button class="add-button">Dodaj ogłoszenie</button>
    <div class="search">
      <input type="text" class="search-input">
      <button class="search-button">Szukaj</button>
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

.add-button, .search-button{
  background-color: #2d5d1c;
  border: 0;
  padding: 6px 22px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.7rem;
  border-radius: 3px;
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
