<script setup>
import {
  PhArrowUpRight,
  PhGithubLogo,
  PhMonitor,
} from '@phosphor-icons/vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group min-w-0 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-magenta/50"
  >
    <!-- Aperçu -->
    <div
      class="relative aspect-video overflow-hidden border-b border-slate-800 bg-slate-950"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`Aperçu du projet ${project.title}`"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <!-- Placeholder -->
      <div
        v-else
        class="flex h-full flex-col items-center justify-center"
      >
        <PhMonitor
          :size="42"
          weight="duotone"
          class="text-magenta"
        />

        <span
          class="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-600"
        >
          Preview
        </span>
      </div>

      <!-- Numéro -->
      <span
        class="absolute left-4 top-4 rounded-lg border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-400 backdrop-blur"
      >
        0{{ project.id }}
      </span>
    </div>

    <!-- Contenu -->
    <div class="p-6">
      <div class="flex items-start justify-between gap-4">
        <div class="min-w-0">
          <p class="text-xs font-medium uppercase tracking-[0.2em] text-magenta">
            {{ project.category }} · {{ project.year }}
          </p>

          <h3
            class="mt-2 truncate text-xl font-bold text-white"
          >
            {{ project.title }}
          </h3>
        </div>

        <PhArrowUpRight
          :size="22"
          weight="bold"
          class="shrink-0 text-slate-600 transition group-hover:text-magenta"
        />
      </div>

      <p class="mt-4 text-sm leading-7 text-slate-400">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="rounded-lg border border-slate-800 px-2.5 py-1 text-xs text-slate-400"
        >
          {{ technology }}
        </span>
      </div>

      <!-- Actions -->
      <div class="mt-7 flex items-center gap-3">
        <a
          :href="project.demo"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-xl bg-magenta px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta"
        >
          Voir le projet
          <PhArrowUpRight :size="17" weight="bold" />
        </a>

        <a
          :href="project.github"
          target="_blank"
          rel="noreferrer"
          aria-label="Voir le code source"
          class="flex size-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:text-hotmagenta"
        >
          <PhGithubLogo :size="19" weight="bold" />
        </a>
      </div>
    </div>
  </article>
</template>
