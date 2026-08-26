<script setup>
import { computed, ref } from 'vue'
import {
  PhArrowUpRight,
  PhCheckCircle,
  PhEnvelopeSimple,
  PhGithubLogo,
  PhPaperPlaneTilt,
} from '@phosphor-icons/vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSent = ref(false)

const mailtoLink = computed(() => {
  const subject = encodeURIComponent(
    `Message de ${form.value.name || 'visiteur'} depuis mon portfolio`,
  )

  const body = encodeURIComponent(
    `Bonjour Wassim,

${form.value.message}

---
Nom : ${form.value.name}
Email : ${form.value.email}`,
  )

  return `mailto:bennaceur.wassim01@gmail.com?subject=${subject}&body=${body}`
})

const sendMessage = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    return
  }

  isSent.value = true
  window.location.href = mailtoLink.value
}
</script>

<template>
  <main role="main" class="min-h-screen">
    <!-- Introduction -->
    <section class="mx-auto max-w-6xl px-6 pb-16 pt-24">
      <div class="max-w-3xl">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-magenta"
        >
          <PhPaperPlaneTilt :size="18" weight="bold" />
          Me contacter
        </div>

        <h1
          class="mt-8 text-5xl font-bold tracking-tight text-white md:text-6xl"
        >
          Une idée commence souvent par
          <span class="text-magenta">une conversation.</span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Vous avez une question, une idée de projet ou simplement envie
          d'échanger autour du développement web ? N'hésitez pas à m'écrire.
        </p>
      </div>
    </section>

    <!-- Zone principale -->
    <section class="mx-auto max-w-6xl px-6 pb-24">
      <div class="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <!-- Informations -->
        <aside
          class="rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
        >
          <h2 class="text-2xl font-bold text-white">
            Restons en contact.
          </h2>

          <p class="mt-4 leading-7 text-slate-400">
            Vous pouvez me contacter directement ou retrouver mon travail
            sur GitHub.
          </p>

          <div class="mt-10 space-y-4">
            <!-- Email -->
            <a
              href="mailto:ton-email@example.com"
              class="group flex items-center gap-4 rounded-2xl border border-slate-800 p-4 transition hover:border-lightmagenta active:border-hotmagenta"
            >
              <div
                class="flex size-11 items-center justify-center rounded-xl bg-magenta/10 text-magenta"
              >
                <PhEnvelopeSimple :size="22" weight="bold" />
              </div>

              <div>
                <p class="text-xs text-slate-500">Email</p>

                <p
                  class="mt-1 text-sm font-medium text-slate-200 group-hover:text-lightmagenta"
                >
                  bennaceur.wassim01@gmail.com
                </p>
              </div>

              <PhArrowUpRight
                :size="18"
                class="ml-auto text-slate-600 transition group-hover:text-lightmagenta"
              />
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/Wassim-BN"
              target="_blank"
              rel="noreferrer"
              class="group flex items-center gap-4 rounded-2xl border border-slate-800 p-4 transition hover:border-lightmagenta active:border-hotmagenta"
            >
              <div
                class="flex size-11 items-center justify-center rounded-xl bg-magenta/10 text-magenta"
              >
                <PhGithubLogo :size="22" weight="bold" />
              </div>

              <div>
                <p class="text-xs text-slate-500">GitHub</p>

                <p
                  class="mt-1 text-sm font-medium text-slate-200 group-hover:text-lightmagenta"
                >
                  github.com/Wassim-BN
                </p>
              </div>

              <PhArrowUpRight
                :size="18"
                class="ml-auto text-slate-600 transition group-hover:text-lightmagenta"
              />
            </a>
          </div>

          <div class="mt-10 border-t border-slate-800 pt-6">
            <p class="text-sm text-slate-500">
              Basé à Nantes, ouvert aux opportunités et aux nouveaux projets.
            </p>
          </div>
        </aside>

        <!-- Formulaire -->
        <section
          class="rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <p
                class="text-sm font-medium uppercase tracking-[0.2em] text-magenta"
              >
                Nouveau message
              </p>

              <h2 class="mt-2 text-2xl font-bold text-white">
                Écrivez-moi.
              </h2>
            </div>

            <PhCheckCircle
              v-if="isSent"
              :size="28"
              weight="fill"
              class="text-magenta"
            />
          </div>

          <form class="mt-10 space-y-6" @submit.prevent="sendMessage">
            <div class="grid gap-6 sm:grid-cols-2">
              <!-- Nom -->
              <label class="block">
                <span class="text-sm font-medium text-slate-300">
                  Votre nom
                </span>

                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Votre nom"
                  class="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-magenta"
                />
              </label>

              <!-- Email -->
              <label class="block">
                <span class="text-sm font-medium text-slate-300">
                  Votre email
                </span>

                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="vous@example.com"
                  class="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-magenta"
                />
              </label>
            </div>

            <!-- Message -->
            <label class="block">
              <span class="text-sm font-medium text-slate-300">
                Votre message
              </span>

              <textarea
                v-model="form.message"
                required
                rows="7"
                placeholder="Bonjour Wassim, je souhaiterais..."
                class="mt-2 w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-magenta"
              />
            </label>

            <!-- Bouton -->
            <button
              type="submit"
              class="group inline-flex items-center gap-2 rounded-xl bg-magenta px-5 py-3 font-semibold text-slate-950 transition hover:bg-lightmagenta active:bg-hotmagenta"
            >
              Envoyer le message

              <PhPaperPlaneTilt
                :size="19"
                weight="bold"
                class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </form>

          <p
            v-if="isSent"
            class="mt-6 text-sm text-slate-400"
          >
            Votre application de messagerie devrait maintenant s'ouvrir.
          </p>
        </section>
      </div>
    </section>
  </main>
</template>
