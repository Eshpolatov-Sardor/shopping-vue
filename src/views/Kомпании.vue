<script setup lang="ts">
import Navbar from '../components/componiy/Navbar.vue'
import Sertifikat from '../components/componiy/Setifikat.vue'
import Sectionhouse from '../components/componiy/Sectionhouse.vue'
import Sectionfooter from '../components/componiy/Sectionfooter.vue'
</script>

<template>
  <div class="header_navbar">
    <Navbar />
    <Sertifikat />
    <h2 class="text-3xl mt-5 ml-5">Проект из наших стройматериалов</h2>
    <div class="flex flex-wrap gap-24 mt-10 pb-16">
      <Sectionhouse />
      <Sectionhouse />
      <Sectionhouse />
      <Sectionhouse />
      <Sectionhouse />
      <Sectionhouse />
    </div>
    <Sectionfooter />
  </div>
</template>
