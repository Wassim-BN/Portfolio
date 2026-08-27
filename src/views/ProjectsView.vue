<script setup>
import { computed, ref } from 'vue'
import { PhArrowRight, PhFolderOpen } from '@phosphor-icons/vue'

import PageHeader from '../components/PageHeaderComponent.vue'
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
  <main role="main" class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
    <!-- En-tête -->
    <PageHeader
      eyebrow="Mes réalisations"
      title="Des idées transformées"
      :icon="PhFolderOpen"
      highlight="en projets."
      description="Une sélection de projets qui me permettent de mettre en pratique
      mes compétences, d'expérimenter et de progresser en développement
      web."
    />

    <!-- Filtres -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        class="rounded-xl border px-4 py-2.5 text-sm font-medium transition"
        :class="
          selectedCategory === category
            ? 'border-magenta bg-magenta text-slate-950'
            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:text-hotmagenta'
        "
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <!-- Nombre de projets -->
    <div class="mt-8 flex items-center justify-between">
      <p class="text-sm text-slate-500">
        {{ filteredProjects.length }}
        {{ filteredProjects.length > 1 ? 'projets' : 'projet' }}
      </p>
    </div>

    <!-- Projets -->
    <div
      class="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>

    <!-- Aucun résultat -->
    <div
      v-if="filteredProjects.length === 0"
      class="rounded-3xl border border-dashed border-slate-800 px-6 py-16 text-center"
    >
      <p class="font-medium text-white">
        Aucun projet trouvé.
      </p>

      <p class="mt-2 text-sm text-slate-500">
        Cette catégorie ne contient pas encore de projet.
      </p>
    </div>
  </main>
</template>
