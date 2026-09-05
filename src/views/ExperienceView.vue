<script setup>
import {
  PhBriefcase,
  PhCode,
  PhGraduationCap,
  PhLightbulb,
} from '@phosphor-icons/vue'

import PageHeader from '../components/PageHeaderComponent.vue'
import RevealOnScroll from '../components/RevealOnScrollComponent.vue'
</script>

<template>
  <div>
    <PageHeader
      eyebrow="Expériences"
      title="Mon parcours"
      highlight="en pratique."
      description="Les expériences permettent de découvrir le monde professionnel, de développer mes compétences et de mieux comprendre le métier de développeur web."
      :icon="PhBriefcase"
    />

    <main class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">

      <!-- Introduction -->
      <RevealOnScroll>
        <section class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
            >
              Expérience professionnelle
            </p>

            <h2
              class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Apprendre en
              <span class="text-magenta">faisant.</span>
            </h2>
          </div>

          <div class="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Les expériences professionnelles permettent de confronter
              mes connaissances à des problématiques concrètes et de découvrir
              les méthodes de travail utilisées dans le développement web.
            </p>

            <p>
              Elles sont également l'occasion de travailler en équipe,
              d'échanger avec des professionnels et de mieux comprendre les
              attentes du monde de l'entreprise.
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <!-- Timeline -->
      <RevealOnScroll>
        <section class="mt-24">
          <div class="max-w-2xl">
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
            >
              Mon parcours professionnel
            </p>

            <h2
              class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Des expériences
              <span class="text-magenta">concrètes.</span>
            </h2>
          </div>

          <div class="mt-12 space-y-6">

            <!-- Expérience -->
            <article
              class="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-magenta/40 sm:p-8"
            >
              <div
                class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"
              >
                <div class="flex gap-5">
                  <div
                    class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-magenta/10"
                  >
                    <PhCode
                      :size="25"
                      weight="duotone"
                      class="text-magenta"
                    />
                  </div>

                  <div>
                    <p
                      class="text-xs font-semibold uppercase tracking-[0.15em] text-magenta"
                    >
                      Stage
                    </p>

                    <h3 class="mt-1 text-xl font-bold text-white">
                      Développement web
                    </h3>

                    <p class="mt-1 text-sm text-slate-500">
                      WeDev · Nantes
                    </p>
                  </div>
                </div>

                <span
                  class="w-fit rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-400"
                >
                  Juin — Juillet
                </span>
              </div>

              <div class="mt-7 border-t border-slate-800 pt-6">
                <p class="leading-7 text-slate-400">
                  Découverte du développement web au sein d'une équipe
                  professionnelle et conception d'une application web en utilisant le framework vue.js.
                  Durant ce stage j'y découvre plusieurs outils,
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Docker
                  </span>
                  un gestionnaire de projets,<br>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Phosphor Icons
                  </span>
                  une bibliothèque d'image en svg,<br>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Bruno
                  </span>
                  pour tester des requêtes sur notre site,<br>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    FastAPI
                  </span>
                  pour créer de mon back-end en python, découverte de
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Valkey
                  </span>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Redis
                  </span>
                </p>

                <div class="mt-5 flex flex-wrap gap-2">
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    HTML
                  </span>

                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    CSS
                  </span>

                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    JavaScript
                  </span>

                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Vue
                  </span>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Tailwind
                  </span>
                  <a
                  class="inline-flex items-center gap-2 rounded-xl bg-magenta px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta"
                  href="https://todo-list-tunisie.vercel.app/">
                    Voir le projet
                  </a>
                </div>
              </div>
            </article>

            <!-- Formation -->
            <article
              class="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-magenta/40 sm:p-8"
            >
              <div class="flex gap-5">
                <div
                  class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-magenta/10"
                >
                  <PhGraduationCap
                    :size="25"
                    weight="duotone"
                    class="text-magenta"
                  />
                </div>

                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.15em] text-magenta"
                  >
                    Formation
                  </p>

                  <h3 class="mt-1 text-xl font-bold text-white">
                    BTS SIO — SLAM
                  </h3>

                  <p class="mt-1 text-sm text-slate-500">
                    Formation scolaire
                  </p>
                </div>
              </div>

              <div class="mt-7 border-t border-slate-800 pt-6">
                <p class="leading-7 text-slate-400">
                  Formation qui m'a permis de développer mon intérêt pour
                  l'informatique, la cybersécurité et le
                  développement.
                </p>
                <div class="mt-5 flex flex-wrap gap-2">
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    HTML
                  </span>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    CSS
                  </span>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Javascript
                  </span>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    PHP
                  </span>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Java
                  </span>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Bash
                  </span>
                  <span
                    class="rounded-lg border border-slate-800 px-3 py-1.5 text-xs text-slate-400"
                  >
                    Shell
                  </span>
                </div>
              </div>
            </article>

          </div>
        </section>
      </RevealOnScroll>

      <!-- Ce que j'ai appris -->
      <RevealOnScroll>
        <section class="mt-24">
          <div
            class="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10"
          >
            <div class="flex items-start gap-5">
              <div
                class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-magenta/10"
              >
                <PhLightbulb
                  :size="25"
                  weight="duotone"
                  class="text-magenta"
                />
              </div>

              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.2em] text-magenta"
                >
                  Ce que j'en retiens
                </p>

                <h2 class="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Chaque expérience fait progresser.
                </h2>

                <p
                  class="mt-4 max-w-3xl leading-7 text-slate-400"
                >
                  Ces expériences m'ont permis de mieux comprendre le
                  développement web, mais aussi l'importance de la
                  communication, de l'organisation et de la capacité à
                  apprendre rapidement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

    </main>
  </div>
</template>
