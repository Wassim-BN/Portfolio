<script setup>
import {
  PhArrowRight,
  PhBookOpen,
  PhCode,
  PhGraduationCap,
  PhTarget,
} from '@phosphor-icons/vue'
</script>

<template>
  <main role="main" class="min-h-screen">
    <!-- Introduction -->
    <section class="mx-auto max-w-6xl px-6 pb-20 pt-24">
      <div class="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div>
          <div
            class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-magenta"
          >
            <PhBookOpen :size="18" weight="bold" />
            À propos de moi
          </div>

          <h1
            class="mt-8 text-5xl font-bold tracking-tight text-white md:text-6xl"
          >
            Un développeur en
            <span class="text-magenta">construction.</span>
          </h1>
        </div>

        <p class="text-lg leading-8 text-slate-400">
          Je suis Wassim, étudiant en développement web.
          J'aime comprendre comment les choses fonctionnent, expérimenter
          avec le code et transformer mes idées en projets concrets.
        </p>
      </div>
    </section>

    <!-- Parcours -->
    <section class="border-y border-slate-800">
      <div class="mx-auto max-w-6xl px-6 py-20">
        <div class="mb-14">
          <p
            class="text-sm font-medium uppercase tracking-[0.2em] text-magenta"
          >
            Mon parcours
          </p>

          <h2 class="mt-3 text-3xl font-bold text-white md:text-4xl">
            De l'apprentissage à la création.
          </h2>
        </div>

        <div class="relative">
          <!-- Ligne -->
          <div
            class="absolute left-[19px] top-2 hidden h-[calc(100%-8px)] w-px bg-slate-800 sm:block"
          />

          <div class="space-y-12">
            <!-- Étape 1 -->
            <article class="relative flex gap-6">
              <div
                class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-magenta/40 bg-slate-950 text-magenta"
              >
                <PhGraduationCap :size="20" weight="bold" />
              </div>

              <div class="pb-2">
                <p class="text-sm font-medium text-magenta">
                  Formation
                </p>

                <h3 class="mt-2 text-xl font-bold text-white">
                  BTS SIO — spécialité SLAM
                </h3>

                <p class="mt-3 max-w-2xl leading-7 text-slate-400">
                  Mon parcours scolaire m'a permis de développer mon intérêt
                  pour l'informatique, spécialement avec le développement web.
                </p>
              </div>
            </article>

            <!-- Étape 2 -->
            <article class="relative flex gap-6">
              <div
                class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-magenta/40 bg-slate-950 text-magenta"
              >
                <PhCode :size="20" weight="bold" />
              </div>

              <div class="pb-2">
                <p class="text-sm font-medium text-magenta">
                  Découverte
                </p>

                <h3 class="mt-2 text-xl font-bold text-white">
                  Le développement web
                </h3>

                <p class="mt-3 max-w-2xl leading-7 text-slate-400">
                  J'ai commencé à m'intéresser au développement web et à
                  comprendre comment HTML, CSS et JavaScript permettent de
                  construire des interfaces interactives.
                </p>
              </div>
            </article>

            <!-- Étape 3 -->
            <article class="relative flex gap-6">
              <div
                class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-magenta/40 bg-slate-950 text-magenta"
              >
                <PhTarget :size="20" weight="bold" />
              </div>

              <div>
                <p class="text-sm font-medium text-magenta">
                  Aujourd'hui
                </p>

                <h3 class="mt-2 text-xl font-bold text-white">
                  Évoluer
                </h3>

                <p class="mt-3 max-w-2xl leading-7 text-slate-400">
                  Je développe mes compétences avec Vue.js, JavaScript,
                  Tailwind CSS en réalisant des projets personnels
                  et en expérimentant différentes approches.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision -->
    <section class="mx-auto max-w-6xl px-6 py-20">
      <div
        class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 md:p-12"
      >
        <div
          class="absolute -right-20 -top-20 size-64 rounded-full bg-magenta/10 blur-3xl"
        />

        <div class="relative max-w-3xl">
          <p
            class="text-sm font-medium uppercase tracking-[0.2em] text-magenta"
          >
            Ma vision
          </p>

          <h2 class="mt-4 text-3xl font-bold text-white md:text-4xl">
            Devenir un développeur capable de donner vie à ses idées.
          </h2>

          <p class="mt-6 text-lg leading-8 text-slate-400">
            Mon objectif est de continuer à progresser, d'acquérir de
            nouvelles compétences et de construire des projets dont je peux
            être fier. Pour moi, le développement est autant une discipline
            technique qu'une manière de résoudre des problèmes.
          </p>

          <RouterLink
            to="/contact"
            class="group mt-8 inline-flex items-center gap-2 font-semibold text-magenta transition hover:text-lightmagenta active:text-hotmagenta"
          >
            Parlons de votre projet

            <PhArrowRight
              :size="19"
              weight="bold"
              class="transition-transform group-hover:translate-x-1"
            />
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
