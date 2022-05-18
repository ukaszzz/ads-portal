<script setup>
const props = defineProps({
  text: String
})
</script>

<template>
    <button class="basic-button">{{props.text}}</button>
</template>

<style scoped>
.basic-button{
  background-color: #2d5d1c;
  border: 0;
  padding: 6px 22px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.7rem;
  border-radius: 3px;
}
</style>
