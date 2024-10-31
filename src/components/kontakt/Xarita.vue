<template>
  <div id="map" class=""></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const map = L.map('map').setView([65.8, 38.866667], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors',
  }).addTo(map)

  const marker = L.marker([38.866667, 65.8]).addTo(map)
  marker.bindPopup('<b>Qarshi</b><br>Manzil').openPopup()
})
</script>

<style scoped>
#map {
  margin-left: 50px;
  height: 500px;
  width: 93%;
  margin-top: 50px;
}
</style>
