<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { PhGraduationCap, } from '@phosphor-icons/vue'

const element = ref(null)
const isVisible = ref(false)

let observer

onMounted(() => {  PhGraduationCap,

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    {
      threshold: 0.15,
    },
  )

  if (element.value) {
    observer.observe(element.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="element"
    class="reveal"
    :class="{ 'reveal-visible': isVisible }"
  >
    <slot />
  </div>
</template>
