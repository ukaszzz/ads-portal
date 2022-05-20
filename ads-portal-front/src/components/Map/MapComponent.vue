<script setup>
import "leaflet/dist/leaflet.css";
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import {useSearchInputStore} from "../../store/search";
const zoom = 13;
const minZoom = 13;
const maxZoom = 18;
const searchValueStore = useSearchInputStore();
</script>

<template>
  <h1>{{searchValueStore.searchInput}}</h1>
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
      <l-marker :lat-lng="[50.063947,19.9517065]" draggable>
        <l-tooltip>
          lol
        </l-tooltip>
      </l-marker>
      <l-marker :lat-lng="[50, 50]" draggable>
        <l-popup>
          lol
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style scoped>
.map{
  background-color: #ddd;
  height: calc(100vh - 50px);
  max-height: 100vh;
}

</style>
