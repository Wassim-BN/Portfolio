import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import SkillsView from '../views/SkillsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Wassim — Développeur Web',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Mes Projets - Wassim',
      },
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
      meta: {
        title: 'Compétences - Wassim',
      },
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
      meta: {
        title: 'Expérience - Wassim',
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
      meta: {
        title: 'À propos - Wassim',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact - Wassim',
      },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Wassim — Développeur Web'
})

export default router
