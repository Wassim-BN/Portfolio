<script setup>
</script>

<template>
  <main>
    <section class="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24">
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-medium uppercase tracking-widest text-magenta">
          Bienvenue sur mon portfolio
        </p>

        <h1 class="text-5xl font-bold tracking-tight md:text-7xl">
          Bonjour, je suis Wassim.
        </h1>

        <p class="mt-6 text-xl leading-relaxed text-slate-400">
          Développeur web, je crée des applications modernes,
          performantes et accessibles.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="/projects"
            class="rounded-lg bg-magenta px-6 py-3 font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta"
          >
            Voir mes projets
          </RouterLink>

          <RouterLink
            to="/contact"
            class="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-slate-500"
          >
            Me contacter
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
