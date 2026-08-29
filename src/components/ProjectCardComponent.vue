<script setup>
import {
  PhArrowUpRight,
  PhGithubLogo,
  PhLinkSimple,
  PhCode,
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
    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-magenta/40 hover:bg-slate-900/80"
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

      <div
        v-else
        class="flex h-full items-center justify-center"
      >
        <div
          class="flex size-16 items-center justify-center rounded-2xl border border-magenta/20 bg-magenta/5"
        >
          <PhCode
            :size="30"
            weight="duotone"
            class="text-magenta"
          />
        </div>
      </div>

      <!-- Overlay -->
      <div
        class="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
      />
    </div>

    <!-- Contenu -->
    <div class="flex flex-1 flex-col p-6">
      <!-- Catégorie -->
      <p
        class="text-[10px] font-semibold uppercase tracking-[0.2em] text-magenta"
      >
        {{ project.category }}
      </p>

      <!-- Titre -->
      <div class="mt-3 flex items-start justify-between gap-4">
        <h2 class="text-xl font-bold text-white">
          {{ project.title }}
        </h2>

        <PhArrowUpRight
          :size="20"
          weight="bold"
          class="shrink-0 text-slate-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-magenta"
        />
      </div>

      <!-- Description -->
      <p class="mt-3 text-sm leading-7 text-slate-400">
        {{ project.description }}
      </p>

      <!-- Technologies -->
      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-400"
        >
          {{ technology }}
        </span>
      </div>

      <!-- Actions -->
      <div class="mt-auto flex flex-wrap gap-3 pt-6">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-magenta hover:text-magenta active:border-hotmagenta active:text-hotmagenta"
        >
          <PhGithubLogo :size="18" weight="fill" />
          GitHub
        </a>

        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl bg-magenta px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta"
        >
          <PhLinkSimple :size="18" weight="bold" />
          Voir le projet
        </a>
      </div>
    </div>
  </article>
</template>
