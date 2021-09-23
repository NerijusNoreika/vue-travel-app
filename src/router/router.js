import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/details/:slug',
    name: 'destination',
    component: () => import('./../views/DestinationDetails.vue'),
    props: true,
    children: [
      {
        path: ':experienceSlug',
        name: 'experience',
        props: true,
        component: () => import('./../views/ExperienceDetails.vue'),
        beforeEnter: (to, from, next) => {
          const destination = store.destinations.find(
            (destination) => destination.slug === to.params.slug
          );
          console.log(destination);
          if (destination) {
            const experience = destination.experiences.find(
              (experience) => experience.slug === to.params.experienceSlug
            );
            if (experience) {
              next();
            } else {
              next({ name: '404' });
            }
          } else {
            next({ name: '404' });
          }
        },
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );

      if (exists) {
        next();
      } else {
        next({ name: '404' });
      }
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('./../views/NotFound.vue'),
  },
  {
    path: '*',
    name: 'notFound',
    redirect: '404',
  },
];

const router = new VueRouter({
  moded: 'history',
  routes,
});

export default router;
