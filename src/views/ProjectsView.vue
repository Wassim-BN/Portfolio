<script setup>
import { computed, ref } from 'vue'
import { PhArrowRight, PhFolderOpen } from '@phosphor-icons/vue'

import ProjectCard from '../components/ProjectCardComponent.vue'
import { projects } from '../data/projects'

const selectedCategory = ref('Tous')

const categories = computed(() => [
  'Tous',
  ...new Set(projects.map((project) => project.category)),
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return projects
  }

  return projects.filter(
    (project) => project.category === selectedCategory.value,
  )
})
</script>

<template>
  <main role="main" class="min-h-screen">
    <!-- En-tête -->
    <section class="mx-auto max-w-6xl px-6 pb-16 pt-24">
      <div class="max-w-3xl">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-magenta"
        >
          <PhFolderOpen :size="18" weight="bold" />
          Mes réalisations
        </div>

        <h1
          class="mt-8 text-5xl font-bold tracking-tight text-white md:text-6xl"
        >
          Des idées transformées
          <span class="text-magenta">en projets.</span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Une sélection de projets qui me permettent de mettre en pratique
          mes compétences, d'expérimenter et de progresser en développement
          web.
        </p>
      </div>
    </section>

    <!-- Filtres -->
    <section class="border-y border-slate-800">
      <div class="mx-auto max-w-6xl px-6 py-6">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="rounded-xl border px-4 py-2 text-sm font-medium transition"
            :class="
              selectedCategory === category
                ? 'border-magenta bg-magenta text-slate-950 active:bg-hotmagenta'
                : 'border-slate-700 text-slate-400 hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:text-hotmagenta'
            "
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Liste des projets -->
    <section class="mx-auto max-w-6xl px-6 py-20">
      <div class="mb-10 flex items-center justify-between">
        <p class="text-sm text-slate-500">
          {{ filteredProjects.length }}
          {{ filteredProjects.length > 1 ? 'projets' : 'projet' }}
        </p>

        <span class="flex items-center gap-2 text-sm text-slate-500">
          <span class="size-2 rounded-full bg-magenta" />
          En construction
        </span>
      </div>

      <div
        v-if="filteredProjects.length"
        class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- Aucun projet -->
      <div
        v-else
        class="rounded-3xl border border-dashed border-slate-700 p-12 text-center"
      >
        <p class="text-lg font-medium text-white">
          Aucun projet dans cette catégorie.
        </p>

        <button
          type="button"
          class="mt-5 text-sm font-semibold text-magenta transition hover:text-lightmagenta active:text-hotmagenta"
          @click="selectedCategory = 'Tous'"
        >
          Afficher tous les projets
          <PhArrowRight :size="18" class="ml-1 inline-block" />
        </button>
      </div>
    </section>
  </main>
</template>
