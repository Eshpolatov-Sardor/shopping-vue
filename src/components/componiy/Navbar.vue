<script setup lang="ts">
import { ref } from 'vue'
interface CarouselItem {
  id: number
  image: string
  title: string
}

const items = ref<CarouselItem[]>([
  {
    id: 1,
    image:
      'https://storage.kun.uz/source/6/y3QJ3HPQnwgCyETdGB812uRFKsOwbxpg.png',
    title: 'Image 1',
  },
  {
    id: 2,
    image:
      'https://storage.kun.uz/source/6/y3QJ3HPQnwgCyETdGB812uRFKsOwbxpg.png',
    title: 'Image 2',
  },
  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1r8yGT5vCm7LKXINhgi-EkMSbpcLGDnX57k8684tLnQamnMJ7o7NzioTrmYDBokhdPmE&usqp=CAU',
    title: 'Image 3',
  },
  {
    id: 4,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1r8yGT5vCm7LKXINhgi-EkMSbpcLGDnX57k8684tLnQamnMJ7o7NzioTrmYDBokhdPmE&usqp=CAU',
    title: 'Image 3',
  },
])

const currentIndex = ref(0)

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + items.value.length) % items.value.length
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}

const setCurrentIndex = (index: number) => {
  currentIndex.value = index
}
</script>
<template>
  <section class="flex flex-col gap-8 p-8">
    <div class="">
      <h2 class="text-3xl font-bold ml-5">О компании</h2>
    </div>

    <div class="flex flex-col md:flex-row items-center gap-8">
      <div class="w-[406px] h-[315px]">
        <div class="carousel-container relative">
    <div class="overflow-hidden relative w-[431px] h-[261px] rounded-lg">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        :class="[
          'carousel-item transition-transform duration-500',
          {
            'translate-x-0': currentIndex === index,
            'translate-x-full': currentIndex < index,
            '-translate-x-full': currentIndex > index,
          },
        ]"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div
          class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold"
        ></div>
      </div>
    </div>

    <div class="flex justify-center space-x-2 -mt-12 absolute ml-48">
      <button
        v-for="(item, index) in items"
        :key="item.id"
        @click="setCurrentIndex(index)"
        :class="[
          'w-3 h-3 rounded-full',
          {
            'bg-blue-500': currentIndex === index,
            'bg-gray-300': currentIndex !== index,
          },
        ]"
      ></button>
    </div>
  </div>
      </div>

      <div class="w-[884px] ml-24">
        <p class="text-gray-700 text-lg font-semibold mb-2">
          Специализируемся на поставках строительных материалов. <br />
          Работаем по всей России.
        </p>

        <div class="flex flex-wrap gap-4 text-blue-600 font-bold py-5">
          <div class="flex-1">
            <p class="text-2xl">> 15</p>
            <p class="text-sm text-black">лет на рынке</p>
          </div>
          <div class="flex-1">
            <p class="text-2xl">> 100</p>
            <p class="text-sm text-black">товарных направлений</p>
          </div>
          <div class="flex-1">
            <p class="text-2xl">> 10 000</p>
            <p class="text-sm text-black">товарных позиций</p>
          </div>
          <div class="flex-1">
            <p class="text-2xl">> 100</p>
            <p class="text-sm text-black">товарных поставщиков</p>
          </div>
        </div>

        <p class="mt-4 text-black">
          Полнотелый кирпич – это популярный строительный материал, который был
          изобретен столетия назад, но до сих пор пользуется большим спросом. До
          наших времен дошло множество исторических построек, которые служат
          живым примером прочности и долговечности этого материала. Несмотря на
          появление новой разновидности кирпича с полостями внутри, полнотелый
          кирпич до сих пор пользуется большой популярностью.
        </p>
        <p class="mt-2 text-black">
          На кирпич и камень керамические общие технические условия и стандарты
          качества, установленные ГОСТ. Эти материалы обладают высокой
          прочностью, морозостойкостью, негорючестью, небольшим
          теплопроводностью.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .carousel-item {
  position: absolute;
  width: 450px;
  height: 450px;
  top: 0;
}
.carousel-container {
  max-width: 450px;
  margin: 0 auto;
}
</style>


