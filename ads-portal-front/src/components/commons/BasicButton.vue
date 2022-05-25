<script setup>
const props = defineProps({
  text: String,
  to: String
})
</script>

<template>
  <router-link class="basic-button" v-if="props.to" :to="props.to">{{props.text}}</router-link>
  <button v-else class="basic-button">{{props.text}}</button>

</template>

<style scoped>
.basic-button{
  background-color: #2d5d1c;
  border: 0;
  padding: 6px 22px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.7rem;
  border-radius: 3px;
  text-decoration: none;
}
</style>
