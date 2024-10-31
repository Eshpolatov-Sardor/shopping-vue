<script setup lang="ts">
import { ref } from 'vue'
import Xarita from '../components/kontakt/Xarita.vue'
import Sectionhouse from '../components/componiy/Sectionhouse.vue'
import Sectionmain from '../components/kontakt/MainSectionmain.vue'
</script>
<template>
  <Xarita />
  <div class="flex mt-10 items-center ml-6">
    <Sectionmain />
    <Sectionhouse class="-ml-6" />
  </div>
  <div class="flex flex-wrap gap-28 mt-10 pb-16 ml-12">
    <Sectionhouse />
    <Sectionhouse />
    <Sectionhouse />
    <Sectionhouse />
    <Sectionhouse />
    <Sectionhouse />
  </div>
</template>
