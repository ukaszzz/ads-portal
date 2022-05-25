<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
//@ts-ignore
import { LMap, LMarker, LTileLayer, LTooltip } from '@vue-leaflet/vue-leaflet';
import { useSearchInputStore } from '../../store/search';
import { onMounted, ref, watch } from 'vue';
import { SimpleAdEntity } from '../../types/ad-entity';

const zoom = 3;
const minZoom = 3;
const maxZoom = 18;
const searchValueStore = useSearchInputStore();
const ads = ref<SimpleAdEntity[]>([])

async function getAds() {
  const response = await fetch(`http://localhost:3001/ad/search/${searchValueStore.searchInput}`);
  ads.value = await response.json();
}

onMounted(() => {
  getAds()
});

watch(searchValueStore, async () => {
  await getAds();
})
</script>

<template>
  <p class="search-result">Search for: {{searchValueStore.searchInput}}</p>
  <div class="map">
    <l-map
        v-model="zoom"
        :zoom="zoom"
        :minZoom="minZoom"
        :maxZoom="maxZoom"
        :center="[50.063947,19.9517065]"
    >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy;<a href='https://www.openstreetmap.org/copyright'> OpenStreetMap & contributors"
      ></l-tile-layer>
        <l-marker  v-for="ad in ads" :lat-lng="[ad.lat, ad.lon]">
          <l-tooltip>
            {{ad.id}}
          </l-tooltip>
        </l-marker>
    </l-map>
  </div>
</template>

<style scoped>
.search-result {
  font-size: 16px;
  font-family: "monospace";
  padding: 4px;
}
.map{
  background-color: #ddd;
  height: calc(100vh - 80px);
  max-height: 100vh;
}

</style>
