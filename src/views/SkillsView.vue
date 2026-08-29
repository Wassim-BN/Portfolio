<script setup>
import { ref } from 'vue'
import {
  PhBracketsCurly,
  PhDatabase,
  PhCode,
  PhGitBranch,
  PhRocket,
  PhGlobe,
  PhPaintBrush,
  PhTerminalWindow,
} from '@phosphor-icons/vue'

import RevealOnScroll from '../components/RevealOnScrollComponent.vue'
import PageHeader from '../components/PageHeaderComponent.vue'
import { skillGroups } from '../data/skills.js'

const icons = {
  'Développement web': PhGlobe,
  'Interface & design': PhPaintBrush,
  'Outils & environnement': PhTerminalWindow,
  'Autres domaines': PhDatabase,
}

</script>

<template>
  <main role="main" class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
    <!-- Hero -->
    <RevealOnScroll>
      <PageHeader
        eyebrow="Compétences & progression"
        title="Apprendre, construire,"
        :icon="PhRocket"
        highlight="évoluer."
        description="Je développe progressivement mes compétences à travers des projets
        concrets, en privilégiant la pratique et l'apprentissage continu."
      />
    </RevealOnScroll>

    <!-- Introduction -->
    <section class="max-w-3xl items-center">
      <p class="text-lg leading-8 text-slate-400">
        Je considère mes compétences comme quelque chose qui évolue
        constamment. Plutôt que de chercher à tout maîtriser, je préfère
        comprendre les bases, construire et progresser
        progressivement.
      </p>
    </section>

    <!-- Compétences -->
    <section class="mt-16 grid gap-5 md:grid-cols-2">
      <RevealOnScroll
        v-for="group in skillGroups"
        :key="group.title"
      >
        <article
          class="h-full rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-magenta/40 sm:p-8"
        >
          <!-- Icon -->
          <div
            class="flex size-12 items-center justify-center rounded-2xl bg-magenta/10"
          >
            <component
              :is="icons[group.title]"
              :size="25"
              weight="duotone"
              class="text-magenta"
            />
          </div>

          <h2 class="mt-6 text-xl font-bold text-white">
            {{ group.title }}
          </h2>

          <p class="mt-3 text-sm leading-7 text-slate-500">
            {{ group.description }}
          </p>

          <!-- Skills -->
          <div class="mt-6 space-y-3">
            <div
              v-for="skill in group.skills"
              :key="skill.name"
              class="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3"
            >
              <div class="flex min-w-0 items-center gap-3">
                <PhBracketsCurly
                  :size="18"
                  class="shrink-0 text-slate-600"
                />

                <span class="truncate text-sm font-medium text-slate-300">
                  {{ skill.name }}
                </span>
              </div>

              <span
                class="shrink-0 text-[10px] font-semibold uppercase tracking-wider"
                :class="{
                  'text-magenta': skill.level === 'Maîtrisé',
                  'text-lightmagenta': skill.level === 'En développement',
                  'text-slate-600': skill.level === 'À explorer',
                }"
              >
                {{ skill.level }}
              </span>
            </div>
          </div>
        </article>
      </RevealOnScroll>
    </section>

    <!-- Méthode -->
    <RevealOnScroll>
      <section
        class="mt-20 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-10"
      >
        <div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
            >
              Ma façon d'apprendre
            </p>

            <h2
              class="mt-3 text-3xl font-bold tracking-tight text-white"
            >
              Apprendre en
              <span class="text-magenta">créant.</span>
            </h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <div
              class="rounded-2xl border border-slate-800 bg-slate-950/50 p-5"
            >
              <PhCode
                :size="24"
                weight="duotone"
                class="text-magenta"
              />

              <h3 class="mt-4 font-semibold text-white">
                Comprendre
              </h3>

              <p class="mt-2 text-sm leading-6 text-slate-500">
                Comprendre les concepts avant de chercher à les appliquer.
              </p>
            </div>

            <div
              class="rounded-2xl border border-slate-800 bg-slate-950/50 p-5"
            >
              <PhGitBranch
                :size="24"
                weight="duotone"
                class="text-magenta"
              />

              <h3 class="mt-4 font-semibold text-white">
                Expérimenter
              </h3>

              <p class="mt-2 text-sm leading-6 text-slate-500">
                Tester différentes approches et apprendre de mes erreurs.
              </p>
            </div>

            <div
              class="rounded-2xl border border-slate-800 bg-slate-950/50 p-5"
            >
              <PhTerminalWindow
                :size="24"
                weight="duotone"
                class="text-magenta"
              />

              <h3 class="mt-4 font-semibold text-white">
                Construire
              </h3>

              <p class="mt-2 text-sm leading-6 text-slate-500">
                Transformer mes connaissances en projets concrets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <!-- Message interactif -->
    <RevealOnScroll>
      <section class="mx-auto max-w-6xl py-20">
        <div
          class="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-12"
        >
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-magenta">
            {{ selectedSkill ? 'Technologie sélectionnée' : 'Ma philosophie' }}
          </p>

          <template v-if="selectedSkill">
            <h2 class="mt-4 text-3xl font-bold text-white">
              {{ selectedSkill }}
            </h2>

            <p class="mt-4 max-w-2xl leading-7 text-slate-400">
              Cette technologie fait partie de mon parcours d'apprentissage et
              de développement. Je cherche à la mettre en pratique à travers
              des projets concrets.
            </p>
          </template>

          <template v-else>
            <h2 class="mt-4 text-3xl font-bold text-white">
              Apprendre une technologie, c'est bien. Construire avec, c'est mieux.
            </h2>

            <p class="mt-4 max-w-2xl leading-7 text-slate-400">
              Je préfère développer mes compétences en créant de vrais projets
              plutôt qu'en me limitant à la théorie. Cela dit, il ne faut pas pour autant la laisser de côté : au contraire, elle reste la clé de la compréhension.
            </p>
            <blockquote
              class="mt-8 border-l-2 border-magenta pl-6">
              <p class="max-w-3xl text-lg font-medium italic leading-8 text-slate-200">
                « Ce n'est pas parce que les choses sont difficiles que nous osons
                pas, c'est parce que nous n'osons pas qu'elles sont difficiles. »
              </p>

              <footer class="mt-4 text-sm font-medium text-magenta">
                — Sénèque
                <span class="text-slate-500">
                  · Philosophe romain
                </span>
              </footer>
            </blockquote>
          </template>
        </div>
      </section>
    </RevealOnScroll>
  </main>
</template>
