<script setup>
import { ref } from 'vue'
import { PhList, PhX } from '@phosphor-icons/vue'

const isMenuOpen = ref(false)
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header role="banner" class="border-b border-slate-800 bg-luxenoir backdrop-blur">
    <nav role="navigation" class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-xl font-bold tracking-tight text-softoat"
        @click="closeMenu"
      >
        Wassim<span class="text-softoat">.</span>
      </RouterLink>

      <!-- Navigation desktop -->
      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
          to="/"
          class="text-sm text-slate-300 transition hover:text-magenta"
          active-class="text-magenta"
        >
          Accueil
        </RouterLink>

        <RouterLink
          to="/projects"
          class="text-sm text-slate-300 transition hover:text-magenta"
          active-class="text-magenta"
        >
          Projets
        </RouterLink>

        <RouterLink
          to="/skills"
          class="text-sm text-slate-300 transition hover:text-magenta"
          active-class="text-magenta"
        >
          Compétences
        </RouterLink>

        <RouterLink
          to="/about"
          class="text-sm text-slate-300 transition hover:text-magenta"
          active-class="text-magenta"
        >
          À propos
        </RouterLink>

        <RouterLink
          to="/contact"
          class="rounded-lg bg-magenta px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta"
          active-class="text-magenta"
        >
          Contact
        </RouterLink>
      </div>

      <!-- Bouton mobile -->
      <button
        type="button"
        class="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 md:hidden"
        aria-label="Ouvrir le menu"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <PhX v-if="isMenuOpen" :size="24" />
        <PhList v-else :size="24" />
      </button>
    </nav>

    <!-- Navigation mobile -->
    <div
      v-if="isMenuOpen"
      class="border-t border-slate-800 md:hidden"
    >
      <div class="mx-auto flex max-w-6xl flex-col px-6 py-4">
        <RouterLink
          to="/"
          class="border-b border-slate-800 py-3 text-slate-300 hover:text-magenta"
          @click="closeMenu"
          active-class="text-magenta"
        >
          Accueil
        </RouterLink>

        <RouterLink
          to="/projects"
          class="border-b border-slate-800 py-3 text-slate-300 hover:text-magenta"
          @click="closeMenu"
          active-class="text-magenta"
        >
          Projets
        </RouterLink>

        <RouterLink
          to="/skills"
          class="border-b border-slate-800 py-3 text-slate-300 hover:text-magenta"
          @click="closeMenu"
          active-class="text-magenta"
        >
          Compétences
        </RouterLink>

        <RouterLink
          to="/about"
          class="border-b border-slate-800 py-3 text-slate-300 hover:text-magenta"
          @click="closeMenu"
          active-class="text-magenta"
        >
          À propos
        </RouterLink>

        <RouterLink
          to="/contact"
          class="py-3 text-magenta hover:text-hotmagenta"
          @click="closeMenu"
          active-class="text-magenta"
        >
          Contact
        </RouterLink>
      </div>
    </div>
  </header>
</template>
