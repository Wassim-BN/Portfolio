<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  icon: {
    type: Object,
    required: true,
  },

  highlight: {
    type: String,
    default: '',
  },

  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section>
    <div
      class="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24"
    >
      <div
        class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2"
      >
        <component
          :is="icon"
          v-if="icon"
          :size="16"
          weight="bold"
          class="text-magenta"
        />

        <p
          class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
        >
          {{ eyebrow }}
        </p>
      </div>

      <h1
        class="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        {{ title }}
        <span v-if="highlight" class="text-magenta">
          {{ highlight }}
        </span>
      </h1>

      <p
        class="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
      >
        {{ description }}
      </p>
    </div>
  </section>
</template>
