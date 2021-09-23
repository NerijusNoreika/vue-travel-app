<template>
  <div>
    <div>
      <h2>{{ experience.name }}</h2>
      <transition name="slide" mode="out-in" appear="true">
        <div class="experience-details">
          <img :src="require(`../assets/${experience.image}`)" />
          <div class="experience-description">
            {{ experience.description }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import store from './../store.js';
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug == this.experienceSlug
      );
    },
  },
};
</script>

<style scoped>
.experience-details {
  display: flex;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
