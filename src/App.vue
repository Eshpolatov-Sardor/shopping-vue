<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Section from './components/main/Section.vue'
import Footer from './components/componiy/Footer.vue'
</script>

<template>
  <div class="contaner">
    <header>
      <div class="header_navbar border-b border-[#5661CB] pb-[7px]">
        <div
          class="flex justify-between items-center h-[111px] border-b border-[#5661CB]"
        >
          <div>
            <RouterLink to="/"
              ><img src="./assets/svg/germes_logo.svg" alt="germes_log"
            /></RouterLink>
          </div>
          <nav class="w-[560px] flex justify-between">
            <RouterLink to="/">Услуги</RouterLink>
            <RouterLink to="/about">Доставка</RouterLink>
            <RouterLink to="/oblata">Оплата</RouterLink>
            <RouterLink to="/prokty">Проекты</RouterLink>
          </nav>
          <span class="w-16 flex justify-between">
            <RouterLink to="/Star"
              ><img src="./assets/svg/Group.svg" alt="Star"
            /></RouterLink>
            <RouterLink to="/Main"
              ><img src="./assets/svg/Main.svg" alt="main"
            /></RouterLink>
          </span>
          <div class="w-[203px]">
            <b>8 (843) 203-93-43</b>
            <p class="text-[#5661CB] border-b border-[#5661CB]">
              заказать обратный звонок
            </p>
          </div>
        </div>
        <main>
          <Section />
        </main>
      </div>
    </header>
    <RouterView />
    <Footer />
    <footer class="bg-gray-100 py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-6">
          <div>
            <h3 class="text-lg font-bold mb-4">Организация</h3>
            <ul class="space-y-2 text-gray-600">
              <li><a href="#" class="hover:text-gray-800">О компании</a></li>
              <li><a href="#" class="hover:text-gray-800">Услуги</a></li>
              <li><a href="#" class="hover:text-gray-800">Статьи</a></li>
              <li><a href="#" class="hover:text-gray-800">Вакансии</a></li>
            </ul>
          </div>

          <!-- How to Buy Column -->
          <div>
            <h3 class="text-lg font-bold mb-4">Как купить</h3>
            <ul class="space-y-2 text-gray-600">
              <li><a href="#" class="hover:text-gray-800">Доставка</a></li>
              <li><a href="#" class="hover:text-gray-800">Оплата</a></li>
              <li><a href="#" class="hover:text-gray-800">Проекты</a></li>
              <li><a href="#" class="hover:text-gray-800">Контакты</a></li>
            </ul>
          </div>

          <!-- Contact Info Column -->
          <div>
            <h3 class="text-lg font-bold mb-4">Мы на связи</h3>
            <ul class="space-y-2 text-gray-600">
              <li>8 (843) 203-93-43</li>
              <li>
                <a href="mailto:info@td-germes.ru" class="hover:text-gray-800"
                  >info@td-germes.ru</a
                >
              </li>
              <li class="flex space-x-4">
                <a href="#"
                  ><img
                    src="./assets/img/Vector.png"
                    alt="WhatsApp"
                    class="w-5 h-5"
                /></a>
                <a href="#"
                  ><img
                    src="./assets/img/logos_telegram.png"
                    alt="Telegram"
                    class="w-5 h-5"
                /></a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">Наш адрес</h3>
            <ul class="space-y-2 text-gray-600">
              <li>Казань</li>
              <li>ул. Сары Садыковой 30, 2 этаж</li>
              <li>Пн - Пт с 8:30 до 17:30</li>
              <li>Суббота с 9:00 до 14:00</li>
            </ul>
          </div>
          <button
            class="mt-16 h-[50px] bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Оптовый заказ
          </button>
        </div>

        <div
          class="border-t border-gray-300 pt-4 text-gray-500 text-sm flex justify-between items-center"
        >
          <div>
            <p>© 2012 — 2020, ООО «ТК «Гермес»</p>
            <p>
              Сайт www.td-germes.ru носит исключительно информационный характер
              и ни при каких условиях не является публичной офертой. <br />
              Для получения информации о стоимости товаров, пожалуйста,
              обращайтесь в отдел продаж компании Гермес.
            </p>
          </div>

          <div class="flex justify-center mt-4 space-x-4">
            <img
              src="./assets/img/logos_visaelectron.png"
              alt="Visa"
              class="h-8"
            />
            <img
              src="./assets/img/logos_mastercard.png"
              alt="Mastercard"
              class="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
