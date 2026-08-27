<script setup>
import { PhArrowUp, PhGithubLogo } from '@phosphor-icons/vue'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <footer role="contentinfo" class="border-t border-slate-800">
    <div class="mx-auto max-w-6xl px-6 py-12">
      <!-- Partie principale -->
      <div class="grid gap-10 md:grid-cols-[1.2fr_1fr_0.7fr]">
        <!-- Identité -->
        <div>
          <RouterLink
            to="/"
            class="text-xl font-bold tracking-tight text-white transition hover:text-lightmagenta active:text-hotmagenta"
          >
            Wassim<span class="text-magenta">.</span>
          </RouterLink>

          <p class="mt-4 max-w-sm leading-7 text-slate-400">
            Développeur web en apprentissage, passionné par la création
            d'expériences modernes et de projets concrets.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Navigation
          </p>

          <nav role="navigation" class="mt-4 flex flex-col items-start gap-3">
            <RouterLink
              to="/"
              class="text-sm text-slate-400 transition hover:text-lightmagenta active:text-hotmagenta"
              active-class="text-magenta"
            >
              Accueil
            </RouterLink>

            <RouterLink
              to="/projects"
              class="text-sm text-slate-400 transition hover:text-lightmagenta active:text-hotmagenta"
              active-class="text-magenta"
            >
              Projets
            </RouterLink>

            <RouterLink
              to="/skills"
              class="text-sm text-slate-400 transition hover:text-lightmagenta active:text-hotmagenta"
              active-class="text-magenta"
            >
              Compétences
            </RouterLink>

            <RouterLink
              to="/about"
              class="text-sm text-slate-400 transition hover:text-lightmagenta active:text-hotmagenta"
              active-class="text-magenta"
            >
              À propos
            </RouterLink>

            <RouterLink
              to="/contact"
              class="text-sm text-slate-400 transition hover:text-lightmagenta active:text-hotmagenta"
              active-class="text-magenta"
            >
              Contact
            </RouterLink>
          </nav>
        </div>

        <!-- Réseaux -->
        <div>
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            En ligne
          </p>

          <a
            href="https://github.com/Wassim-BN"
            target="_blank"
            rel="noreferrer"
            class="group mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-lightmagenta active:text-hotmagenta"
          >
            <PhGithubLogo
              :size="20"
              weight="bold"
              class="transition-transform group-hover:-translate-y-0.5"
            />

            GitHub
          </a>
        </div>
      </div>

      <!-- Partie basse -->
      <div
        class="mt-12 flex flex-col gap-5 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-sm text-slate-500">
          © {{ currentYear }} Wassim. Conçu et développé avec Vue.js.
        </p>

        <button
          type="button"
          aria-label="Retour en haut"
          class="group flex size-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:text-hotmagenta"
          @click="scrollToTop"
        >
          <PhArrowUp
            :size="19"
            weight="bold"
            class="transition-transform group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  </footer>
</template>
