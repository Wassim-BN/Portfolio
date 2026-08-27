<script setup>
import {
  PhBookOpen,
  PhLightbulb,
  PhTarget,
} from '@phosphor-icons/vue'

import RevealOnScroll from '../components/RevealOnScrollComponent.vue'
import PageHeader from '../components/PageHeaderComponent.vue'

</script>

<template>
  <main role="main" class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
    <!-- Introduction -->
    <RevealOnScroll>
      <PageHeader
        eyebrow="À propos de moi"
        title="Un développeur en"
        :icon="PhBookOpen"
        highlight="construction."
        description="Mon parcours, mes objectifs et la manière dont j'aborde l'apprentissage et la création de projets.
        Je suis Wassim, étudiant en développement web.
        J'aime comprendre comment les choses fonctionnent, expérimenter
        avec le code et transformer mes idées en projets concrets."
      />
    </RevealOnScroll>

    <!-- Qui je suis -->
    <RevealOnScroll>
      <section class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
          >
            Qui je suis
          </p>

          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Curieux par nature,
            <span class="text-magenta">créateur par passion.</span>
          </h2>
        </div>

        <div class="space-y-5 text-base leading-8 text-slate-400">
          <p>
            Je m'intéresse au développement web parce que j'aime comprendre
            comment les choses fonctionnent et surtout pouvoir les construire
            moi-même.
          </p>

          <p>
            Chaque projet est pour moi une occasion de découvrir une nouvelle
            technologie, de résoudre des problèmes et de progresser.
          </p>

          <p>
            Je cherche constamment à transformer mes connaissances
            théoriques en réalisations concrètes.
          </p>
        </div>
      </section>
    </RevealOnScroll>

    <!-- Parcours -->
    <RevealOnScroll>
      <section class="mt-24">
        <div class="max-w-2xl">
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
          >
            Mon parcours
          </p>

          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Une progression
            <span class="text-magenta">continue.</span>
          </h2>
        </div>

        <div class="mt-12 border-l border-slate-800 pl-6 sm:pl-8">

          <!-- Étape 1 -->
          <article class="relative pb-12">
            <span
              class="absolute -left-[31px] top-1 size-3 rounded-full border-2 border-slate-950 bg-magenta"
            />

            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
            >
              Aujourd'hui
            </p>

            <h3 class="mt-2 text-xl font-bold text-white">
              Développement web
            </h3>

            <p class="mt-3 max-w-2xl leading-7 text-slate-400">
              Je développe mes compétences en tant que développeur web
              à travers différents projets personnels.
            </p>
          </article>

          <!-- Étape 2 -->
          <article class="relative pb-12">
            <span
              class="absolute -left-7.75 top-1 size-3 rounded-full border-2 border-slate-950 bg-slate-700"
            />

            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              Formation
            </p>

            <h3 class="mt-2 text-xl font-bold text-white">
              BTS SIO — SLAM
            </h3>

            <p class="mt-3 max-w-2xl leading-7 text-slate-400">
              Mon parcours scolaire m'a permis de développer mon intérêt
              pour l'informatique, spécialement avec le développement web.
            </p>
          </article>

          <!-- Étape 3 -->
          <article class="relative">
            <span
              class="absolute -left-7.75 top-1 size-3 rounded-full border-2 border-slate-950 bg-slate-700"
            />

            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              Objectif
            </p>

            <h3 class="mt-2 text-xl font-bold text-white">
              Développeur
            </h3>

            <p class="mt-3 max-w-2xl leading-7 text-slate-400">
              Objectif : devenir développeur web et faire ce que j'aime.
            </p>
          </article>

        </div>
      </section>
    </RevealOnScroll>

    <!-- Philosophie -->
    <RevealOnScroll>
      <section class="mt-24">
        <div
          class="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10"
        >
          <div
            class="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-magenta/10 blur-3xl"
          />

          <div class="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-10">
            <div
              class="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-magenta/10"
            >
              <PhLightbulb
                :size="28"
                weight="duotone"
                class="text-magenta"
              />
            </div>

            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
              >
                Ma philosophie
              </p>

              <blockquote
                class="mt-4 max-w-4xl text-xl font-medium leading-9 text-white sm:text-2xl"
              >
                « Ce n'est pas parce que les choses sont difficiles que
                nous n'osons pas, c'est parce que nous n'osons pas qu'elles
                sont difficiles. »
              </blockquote>

              <div class="mt-5">
                <p class="font-semibold text-slate-200">
                  Sénèque
                </p>

                <p class="mt-1 text-sm text-slate-500">
                  Philosophe romain
                </p>
              </div>

              <p class="mt-6 max-w-2xl text-sm leading-7 text-slate-400">
                Cette idée représente ma manière d'aborder le développement :
                commencer, expérimenter, accepter les difficultés et
                progresser en construisant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <!-- Objectif -->
    <RevealOnScroll>
      <section class="mt-24">
        <div class="grid gap-6 sm:grid-cols-2">
          <div
            class="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
          >
            <PhTarget
              :size="28"
              weight="duotone"
              class="text-magenta"
            />

            <h3 class="mt-5 text-xl font-bold text-white">
              Mon objectif
            </h3>

            <p class="mt-3 leading-7 text-slate-400">
              Devenir développeur web et continuer à progresser à travers
              des projets toujours plus ambitieux.
            </p>
          </div>

          <div
            class="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
          >
            <PhBookOpen
              :size="28"
              weight="duotone"
              class="text-magenta"
            />

            <h3 class="mt-5 text-xl font-bold text-white">
              Ma méthode
            </h3>

            <p class="mt-3 leading-7 text-slate-400">
              Apprendre la théorie, expérimenter, construire des projets
              et apprendre de mes erreurs.
            </p>
          </div>

        </div>
      </section>
    </RevealOnScroll>
  </main>
</template>
