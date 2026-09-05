<script setup>
import { ref } from 'vue'
import { PhList, PhX } from '@phosphor-icons/vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const navigation = [
  { name: 'Accueil', to: '/' },
  { name: 'Projets', to: '/projects' },
  { name: 'Compétences', to: '/skills' },
  { name: 'Expérience', to: '/experience' },
  { name: 'À propos', to: '/about' },
  { name: 'Contact', to: '/contact' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur"
  >
    <nav
      class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
    >
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-xl font-bold tracking-tight text-white transition hover:text-lightmagenta active:text-hotmagenta"
        @click="closeMenu"
      >
        Wassim<span class="text-magenta">.</span>
      </RouterLink>

      <!-- Navigation desktop -->
      <div class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:text-lightmagenta active:text-hotmagenta"
          active-class="bg-magenta/10 text-magenta"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- Bouton mobile -->
      <button
        type="button"
        class="flex size-10 items-center justify-center rounded-xl border border-slate-800 text-slate-300 transition hover:border-lightmagenta hover:text-lightmagenta active:border-hotmagenta active:text-hotmagenta md:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Ouvrir le menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <PhX
          v-if="isMenuOpen"
          :size="22"
          weight="bold"
        />

        <PhList
          v-else
          :size="22"
          weight="bold"
        />
      </button>
    </nav>

    <!-- Menu mobile -->
    <Transition name="mobile-menu">
      <div
        v-if="isMenuOpen"
        class="border-t border-slate-800 bg-slate-950 md:hidden"
      >
        <nav class="mx-auto max-w-6xl px-6 py-4">
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              class="rounded-xl px-4 py-3 font-medium text-slate-300 transition hover:bg-slate-900 hover:text-lightmagenta active:bg-hotmagenta/10 active:text-hotmagenta"
              active-class="bg-magenta/10 text-magenta"
              @click="closeMenu"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
