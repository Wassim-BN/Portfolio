<script setup>
import { computed } from 'vue'
import {
  PhArrowDown,
  PhArrowRight,
  PhArrowUpRight,
  PhCode,
  PhGithubLogo,
  PhStar,
  PhRocketLaunch,
} from '@phosphor-icons/vue'

import ProjectCard from '../components/ProjectCardComponent.vue'
import { projects } from '../data/projects'

const technologies = ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Git']

const featuredProjects = computed(() =>
  projects.filter((project) => project.featured).slice(0, 2),
)

</script>

<template>
  <main role="main">
    <!-- Hero -->
    <section
      class="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-24"
    >
      <!-- Contenu principal -->
      <div class="min-w-0">
        <!-- Disponibilité -->
        <div
          class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-400"
        >
          <span class="relative flex size-2">
            <span
              class="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"
            />
            <span
              class="relative inline-flex size-2 rounded-full bg-green-400"
            />
          </span>

          Disponible pour apprendre et collaborer
        </div>

        <!-- Titre -->
        <h1
          class="mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Je transforme des idées en
          <span class="text-magenta">expériences web.</span>
        </h1>

        <!-- Description -->
        <p
          class="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
        >
          Je suis Wassim, étudiant en développement web.
          J'aime concevoir des interfaces modernes, apprendre de nouvelles
          technologies et transformer une idée en projet concret.
        </p>

        <!-- Boutons -->
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <RouterLink
            to="/projects"
            class="group inline-flex items-center justify-center gap-2 rounded-xl bg-magenta px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta"
          >
            Découvrir mes projets

            <PhArrowRight
              :size="19"
              weight="bold"
              class="transition-transform group-hover:translate-x-1"
            />
          </RouterLink>

          <RouterLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3.5 font-semibold text-slate-300 transition hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:text-hotmagenta"
          >
            Me contacter
          </RouterLink>
        </div>

        <!-- Technologies -->
        <div class="mt-12">
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Technologies que j'utilise
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              class="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-sm text-slate-400"
            >
              HTML
            </span>

            <span
              class="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-sm text-slate-400"
            >
              CSS
            </span>

            <span
              class="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-sm text-slate-400"
            >
              JavaScript
            </span>

            <span
              class="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-sm text-slate-400"
            >
              Vue.js
            </span>

            <span
              class="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-sm text-slate-400"
            >
              Git
            </span>
          </div>
        </div>
      </div>

      <!-- Carte latérale -->
      <div class="relative mx-auto w-full max-w-md lg:ml-auto">
        <!-- Effet décoratif -->
        <div
          class="absolute -inset-1 rounded-3xl bg-magenta/10 blur-2xl"
        />

        <div
          class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur"
        >
          <!-- En-tête -->
          <div class="flex items-center justify-between">
            <span
              class="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 font-mono text-xs text-magenta"
            >
              profile.js
            </span>

            <PhCode
              :size="24"
              weight="duotone"
              class="text-magenta"
            />
          </div>

          <!-- Faux code -->
          <div
            class="mt-8 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-5 font-mono text-sm leading-7"
          >
            <p>
              <span class="text-lightmagenta">const</span>
              <span class="text-slate-300"> developer </span>
              <span class="text-magenta">=</span>
              <span class="text-slate-300"> {</span>
            </p>

            <p class="pl-4">
              <span class="text-slate-500">name:</span>
              <span class="text-lightmagenta"> 'Wassim'</span>,
            </p>

            <p class="pl-4">
              <span class="text-slate-500">role:</span>
              <span class="text-lightmagenta">
                'Web Developer'
              </span>,
            </p>

            <p class="pl-4">
              <span class="text-slate-500">stack:</span>
              <span class="text-slate-300"> [</span>
            </p>

            <p class="pl-8 text-lightmagenta">
              'Vue.js', 'JavaScript'
            </p>

            <p class="pl-4">
              <span class="text-slate-300">],</span>
            </p>

            <p class="pl-4">
              <span class="text-slate-500">status:</span>
              <span class="text-magenta"> 'learning'</span>
            </p>

            <p>
              <span class="text-slate-300">}</span>
            </p>
          </div>

          <!-- Statut -->
          <div
            class="mt-6 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div
              class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-magenta/10"
            >
              <PhRocketLaunch
                :size="21"
                weight="duotone"
                class="text-magenta"
              />
            </div>

            <div class="min-w-0">
              <p class="text-sm font-semibold text-white">
                Toujours en progression
              </p>

              <p class="mt-1 text-xs leading-5 text-slate-500">
                Chaque projet est une occasion d'apprendre et de créer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-slate-800">
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <!-- En-tête -->
        <div
          class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
            >
              Sélection
            </p>

            <h2
              class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Projets
            </h2>

            <p class="mt-4 max-w-xl leading-7 text-slate-400">
              Une sélection de projets sur lesquels j'ai travaillé pour
              apprendre, expérimenter et développer mes compétences.
            </p>
          </div>

          <RouterLink
            to="/projects"
            class="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:text-hotmagenta"
          >
            Tous les projets

            <PhArrowRight
              :size="18"
              weight="bold"
              class="transition-transform group-hover:translate-x-1"
            />
          </RouterLink>
        </div>

        <!-- Projets -->
        <div class="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2">
          <ProjectCard
              v-for="project in featuredProjects"
              :key="project.id"
              :project="project"
            />
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section>
      <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div
          class="relative overflow-hidden rounded-3xl border border-magenta/30 bg-slate-900/60 px-6 py-12 sm:px-10 sm:py-16"
        >
          <!-- Effet décoratif -->
          <div
            class="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-magenta/10 blur-3xl"
          />

          <div class="relative max-w-2xl">
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
            >
              Et maintenant ?
            </p>

            <h2
              class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Une idée, un projet,
              <span class="text-magenta">une opportunité ?</span>
            </h2>

            <p
              class="mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"
            >
              Je suis toujours intéressé par de nouveaux projets, des opportunités
              d'apprentissage et des collaborations.<br>
              Je veux découvrir de nouveaux horizons. <br>
              N'hésite pas à me contacter.
            </p>

            <RouterLink
              to="/contact"
              class="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-magenta px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta sm:w-auto"
            >
              Me contacter

              <PhArrowRight
                :size="19"
                weight="bold"
                class="transition-transform group-hover:translate-x-1"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
