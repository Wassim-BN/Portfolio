<script setup>
import { PhArrowUpRight, PhGithubLogo } from '@phosphor-icons/vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-magenta/50"
  >
    <!-- Numéro du projet -->
    <div class="flex items-start justify-between">
      <span
        class="text-sm font-medium tracking-widest text-slate-500"
      >
        PROJET 0{{ project.id }}
      </span>

      <div
        class="flex size-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition group-hover:border-magenta group-hover:text-magenta"
      >
        <PhArrowUpRight :size="20" weight="bold" />
      </div>
    </div>

    <!-- Contenu -->
    <div class="mt-12">
      <h3 class="text-2xl font-bold text-white">
        {{ project.title }}
      </h3>

      <p class="mt-4 leading-7 text-slate-400">
        {{ project.description }}
      </p>
    </div>

    <!-- Technologies -->
    <div class="mt-8 flex flex-wrap gap-2">
      <span
        v-for="technology in project.technologies"
        :key="technology"
        class="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300"
      >
        {{ technology }}
      </span>
    </div>

    <!-- Liens -->
    <div class="mt-auto flex items-center gap-3 pt-10">
      <a
        :href="project.demo"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 rounded-xl bg-magenta px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta"
      >
        Voir le projet
        <PhArrowUpRight :size="18" weight="bold" />
      </a>

      <a
        :href="project.github"
        target="_blank"
        rel="noreferrer"
        aria-label="Voir le code source sur GitHub"
        class="rounded-xl border border-slate-700 p-2.5 text-slate-300 transition hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:text-hotmagenta"
      >
        <PhGithubLogo :size="20" weight="bold" />
      </a>
    </div>
  </article>
</template>
