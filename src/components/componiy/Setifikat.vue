<script lang="ts" setup>
import { ref, computed } from 'vue'
import img from '../../assets/img/image 5.png'

const testimonials = ref([
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
  { img: img },
])

const currentIndex = ref(0)
const visibleCount = 5

const visibleTestimonials = computed(() => {
  return testimonials.value.slice(
    currentIndex.value,
    currentIndex.value + visibleCount,
  )
})

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) %
    testimonials.value.length
}
</script>

<template>
  <section class="py-8">
    <div class="container mx-auto flex">
      <div>
        <div class="flex justify-center space-x-4">
          <div
            v-for="(testimonial, index) in visibleTestimonials"
            :key="index"
            class="w-64 rounded-lg transition-transform duration-500 ease-in-out"
          >
            <img
              :src="testimonial.img"
              alt="Testimonial Image"
              class="w-full h-auto rounded-md"
            />
          </div>
        </div>
        <div class="mt-8 flex justify-center space-x-4">
          <button @click="prevSlide" class="text-blue-700">&larr;</button>
          <button @click="nextSlide" class="text-blue-700">&rarr;</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
