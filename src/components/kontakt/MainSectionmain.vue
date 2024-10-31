<script setup lang="ts">
import { ref } from 'vue'
</script>
<template>
  <div class="flex">
    <div class="container mx-auto p-6">
      <h2 class="text-xl font-bold mb-4">Контакты</h2>
      <p class="mb-4">
        На кирпич и камень керамические общие технические условия и стандарты
        качества, установленные ГОСТ. Эти <br />
        материалы обладают высокой прочностью, морозостойкостью, негорючестью,
        небольшая теплопроводность.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-semibold">Адрес офиса:</h3>
          <p>420087, г. Казань, ул. Сары Садыковой 30</p>
          <a href="#" class="text-blue-500 hover:underline"
            >Имеется бесплатная парковка</a
          >
        </div>

        <div>
          <h3 class="font-semibold">Время работы:</h3>
          <p>Пн-Пт: 8:30–17:30</p>
          <p>Сб: 9:00–14:00</p>
        </div>

        <div>
          <h3 class="font-semibold">E-mail:</h3>
          <p>
            <a
              href="mailto:vavilonkzn@yandex.ru"
              class="text-blue-500 hover:underline"
              >vavilonkzn@yandex.ru</a
            >
            (для заказа строительных материалов)
          </p>
          <p>
            <a
              href="mailto:germescom@mail.ru"
              class="text-blue-500 hover:underline"
              >germescom@mail.ru</a
            >
            (для заказа отделочных материалов)
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Телефон:</h3>
          <p>8 (843) 558-36-23</p>
          <a href="#" class="text-blue-500 hover:underline">Заказать звонок</a>
        </div>
      </div>
    </div>
  </div>
</template>
