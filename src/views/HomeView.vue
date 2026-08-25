<script setup>
import {
  PhArrowDown,
  PhArrowUpRight,
  PhCode,
  PhGithubLogo,
  PhStar,
} from '@phosphor-icons/vue'

import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const technologies = ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Git']

const featuredProjects = projects.filter((project) => project.featured)
</script>

<template>
  <main role="main">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <!-- Éléments décoratifs -->
      <div
        class="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-magenta/10 blur-3xl"
      />

      <div
        class="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-6 py-20"
      >
        <div class="grid w-full gap-16 lg:grid-cols-[1fr_0.65fr] lg:items-center">
          <!-- Texte principal -->
          <div>
            <div
              class="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300"
            >
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"
                />
                <span
                  class="relative inline-flex size-2 rounded-full bg-emerald-400"
                />
              </span>

              Disponible pour de nouveaux projets
            </div>

            <p
              class="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-magenta"
            >
              <PhStar :size="18" weight="fill" />
              Développeur web
            </p>

            <h1
              class="max-w-3xl text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              Je transforme des
              <span class="relative whitespace-nowrap text-magenta">
                idées
                <span
                  class="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-magenta/30"
                />
              </span>
              en expériences web.
            </h1>

            <p
              class="mt-8 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl"
            >
              Je suis Wassim, futur développeur web, ce que j'aime c'est créé
              des interfaces modernes, intuitives et performantes.
            </p>

            <div class="mt-10 flex flex-wrap items-center gap-4">
              <RouterLink
                to="/projects"
                class="group inline-flex items-center gap-2 rounded-xl bg-magenta px-5 py-3 font-semibold text-slate-950 transition duration-200 hover:-translate-y-1 hover:bg-lightmagenta"
              >
                Découvrir mes projets

                <PhArrowUpRight
                  :size="19"
                  weight="bold"
                  class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </RouterLink>

              <RouterLink
                to="/contact"
                class="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                Me contacter
              </RouterLink>

              <a
                href="https://github.com/Wassim-BN"
                target="_blank"
                rel="noreferrer"
                aria-label="Voir mon profil GitHub"
                class="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-slate-600 hover:text-white"
              >
                <PhGithubLogo :size="22" weight="bold" />
              </a>
            </div>
          </div>

          <!-- Bloc identité -->
          <aside
            class="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
          >
            <div
              class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur"
            >
              <!-- Ligne décorative -->
              <div
                class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-magenta to-transparent opacity-70"
              />

              <div class="flex items-center justify-between">
                <div
                  class="flex size-12 items-center justify-center rounded-2xl bg-magenta text-slate-950"
                >
                  <PhCode :size="26" weight="bold" />
                </div>

                <span
                  class="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-400"
                >
                  Portfolio 2026
                </span>
              </div>

              <div class="mt-12">
                <p class="text-sm text-slate-500">Actuellement</p>

                <h2 class="mt-2 text-2xl font-semibold text-white">
                  En apprentissage continu.
                </h2>

                <p class="mt-3 leading-7 text-slate-400">
                  J'apprends, je construis et j'améliore mes compétences à
                  travers des projets concrets.
                </p>
              </div>

              <!-- Technologies -->
              <div class="mt-10 border-t border-slate-800 pt-6">
                <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Stack actuelle
                </p>

                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="technology in technologies"
                    :key="technology"
                    class="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300"
                  >
                    {{ technology }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Badge flottant -->
            <div
              class="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-3 shadow-xl sm:flex"
            >
              <div
                class="flex size-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400"
              >
                <PhCode :size="20" weight="bold" />
              </div>

              <div>
                <p class="text-xs text-slate-500">Objectif</p>
                <p class="text-sm font-medium text-slate-200">
                  Apprendre. Créer. Évoluer.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <!-- Indication scroll -->
        <div
          class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-slate-500 md:flex"
        >
          <span>Découvrir</span>
          <PhArrowDown :size="18" class="animate-bounce" />
        </div>
      </div>
    </section>
    <section class="border-t border-slate-800">
      <div class="mx-auto max-w-6xl px-6 py-24">
        <!-- En-tête -->
        <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div class="max-w-2xl">
            <p
              class="text-sm font-medium uppercase tracking-[0.25em] text-magenta"
            >
              Réalisations
            </p>

            <h2 class="mt-4 text-4xl font-bold text-white md:text-5xl">
              Quelques projets sur lesquels j'ai travaillé.
            </h2>
          </div>

          <RouterLink
            to="/projects"
            class="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-lightmagenta active:text-hotmagenta"
          >
            Tous les projets

            <ArrowRight
              :size="18"
              weight="bold"
              class="transition-transform group-hover:translate-x-1 group-active:translate-x-0.5"
            />
          </RouterLink>
        </div>

        <!-- Grille -->
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>
  </main>
</template>
