<script lang="ts" setup>
import { ref, computed } from 'vue'
import img from '../../assets/img/Снимок экрана 2020-12-06 в 17.10.jpg'
import img1 from '../../assets/img/Снимок экрана 2020-12-06 в 17.10.png'
import img2 from '../../assets/img/Снимок экрана 2020-12-06 в 17.09 (1).png'
import img3 from '../../assets/img/Снимок экрана 2020-12-06 в 17.09 (1).png'
import img4 from '../../assets/img/Снимок экрана 2020-12-06 в 17.09 (3).png'
import img5 from '../../assets/img/Снимок экрана 2020-12-06 в 17.09 (4).png'

const testimonials = ref([
  { img: img },
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
])

const currentIndex = ref(0)
const visibleCount = 5 // Number of images visible at a time

const visibleTestimonials = computed(() => {
  return testimonials.value.slice(
    currentIndex.value,
    currentIndex.value + visibleCount,
  )
})

function nextSlide() {
  if (currentIndex.value + visibleCount < testimonials.value.length) {
    currentIndex.value += visibleCount
  } else {
    currentIndex.value = 0 // Loop back to the start
  }
}

function prevSlide() {
  if (currentIndex.value - visibleCount >= 0) {
    currentIndex.value -= visibleCount
  } else {
    currentIndex.value = testimonials.value.length - visibleCount // Loop to the end
  }
}
</script>

<template>
  <section class="py-8">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Previous Button -->
      <button
        @click="prevSlide"
        class="text-blue-700 border border-blue-800 rounded-full h-8 w-8 flex items-center justify-center"
      >
        &lt;
      </button>

      <!-- Testimonials Images -->
      <div class="flex space-x-4 items-center justify-center">
        <div
          v-for="(testimonial, index) in visibleTestimonials"
          :key="index"
          class="transition-transform duration-500 ease-in-out"
        >
          <img
            :src="testimonial.img"
            alt="Testimonial Image"
            class="w-[253px] h-[84px] rounded-md"
          />
        </div>
      </div>

      <!-- Next Button -->
      <button
        @click="nextSlide"
        class="text-blue-700 border border-blue-800 rounded-full h-8 w-8 flex items-center justify-center"
      >
        &gt;
      </button>
    </div>
  </section>
</template>

<style scoped></style>
