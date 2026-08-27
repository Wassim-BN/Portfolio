<script setup>
import { ref } from 'vue'
import {
  PhCode,
  PhGitBranch,
  PhGraduationCap,
  PhRocket,
} from '@phosphor-icons/vue'

import RevealOnScroll from '../components/RevealOnScrollComponent.vue'
import PageHeader from '../components/PageHeaderComponent.vue'

const skillGroups = [
  {
    id: 'frontend',
    title: 'Développement',
    description:
      'Créer des interfaces modernes, responsives et agréables à utiliser.',
    icon: PhCode,
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Vue.js', 'Tailwind CSS'],
  },
  {
    id: 'tools',
    title: 'Outils & environnement',
    description:
      'Les outils que j’utilise pour développer, organiser et versionner mes projets.',
    icon: PhGitBranch,
    skills: ['GitHub', 'npm', 'Vite', 'Zed', 'Ubuntu'],
  },
  {
    id: 'learning',
    title: 'En apprentissage',
    description:
      'Les technologies et concepts que je souhaite approfondir à travers mes futurs projets.',
    icon: PhGraduationCap,
    skills: ['Java', 'PHP', 'Back-end', 'Déploiement'],
  },
]

const selectedSkill = ref(null)

const selectSkill = (skill) => {
  selectedSkill.value = selectedSkill.value === skill ? null : skill
}
</script>

<template>
  <main role="main" class="min-h-screen">
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

    <!-- Compétences -->
    <RevealOnScroll>
      <section class="border-y border-slate-800">
        <div class="mx-auto max-w-6xl px-6 py-16">
          <div class="grid gap-6 lg:grid-cols-3">
            <article
              v-for="group in skillGroups"
              :key="group.id"
              class="flex min-h-[360px] flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-lightmagenta/60"
            >
              <!-- Icône -->
              <div
                class="flex size-12 items-center justify-center rounded-2xl bg-magenta/10 text-magenta"
              >
                <component :is="group.icon" :size="26" weight="bold" />
              </div>

              <!-- Texte -->
              <div class="mt-8">
                <h2 class="text-xl font-bold text-white">
                  {{ group.title }}
                </h2>

                <p class="mt-3 leading-7 text-slate-400">
                  {{ group.description }}
                </p>
              </div>

              <!-- Technologies -->
              <div class="mt-auto pt-8">
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="skill in group.skills"
                    :key="skill"
                    type="button"
                    class="rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-300 transition hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:bg-hotmagenta/10"
                    :class="{
                      'border-magenta bg-magenta/10 text-magenta':
                        selectedSkill === skill,
                    }"
                    @click="selectSkill(skill)"
                  >
                    {{ skill }}
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </RevealOnScroll>

    <!-- Message interactif -->
    <RevealOnScroll>
      <section class="mx-auto max-w-6xl px-6 py-20">
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
