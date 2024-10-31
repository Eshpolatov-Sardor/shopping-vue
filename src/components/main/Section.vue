<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
</script>
<template>
  <div class="flex justify-between items-center h-[71px]">
    <button
      class="w-[300px] h-[40px] flex gap-5 items-center bg-[#5561CB] pl-10 pt-2 pb-2 rounded-lg text-white"
    >
      <img src="../../assets/svg/Group (2).svg" alt="Каталог" />
      Каталог
    </button>
    <p><RouterLink to="/aksiya">Акции</RouterLink></p>
    <button
      class="w-[248px] h-[40px] flex items-center border border-gray-300 rounded-lg px-3 py-1"
    >
      <input
        class="flex-grow outline-none text-sm placeholder-gray-500"
        type="text"
        placeholder="Введите название товара"
      />
      <img
        class="text-blue-500"
        src="../../assets/svg/Search.svg"
        alt="search"
      />
    </button>
    <p><RouterLink to="/kompanitiy">о компании</RouterLink></p>
    <p><RouterLink to="/kontakt">КОнтакты</RouterLink></p>
    <button class="w-[199px] h-[40px] bg-[#5561CB] rounded-lg text-white">
      Оптовый заказ
    </button>
  </div>
</template>
