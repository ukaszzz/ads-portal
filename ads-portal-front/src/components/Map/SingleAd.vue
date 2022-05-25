<script setup lang="ts">
import { AdEntity, SimpleAdEntity } from '../../types/ad-entity';
import { onMounted, reactive, ref } from 'vue';

const props = defineProps({
  id: String,
})

const ad = ref<AdEntity | null>(null)

async function getAd() {
  const response = await fetch(`http://localhost:3001/ad/${props.id}`);
  ad.value = await response.json();
}

onMounted(async () => {
  await getAd();
})
</script>

<template>
  <p v-if="ad === null">wczytywanie..</p>
  <div v-else>
    <p>Nazwa: {{ad.name}}</p>
    <p v-if="!!ad.price">Cena: {{ad.price}}</p>
    <p>Opis: {{ad.description}}</p>
    <a :href="ad.url" target="_blank">Zobacz</a>
  </div>
</template>

<style>


</style>
