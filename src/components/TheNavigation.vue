<template>
  <nav id="id">
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="links"
        v-for="destination in destinations"
        :key="destination.id"
      >
        <router-link
          :to="{ name: 'destination', params: { slug: destination.slug } }"
        >
          <span>{{ destination.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from './../store';
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
  computed: {
    destination() {
      return store.find((destination) => destination.slug === this.slug);
    },
  },
};
</script>

<style scoped>
.nav-links {
  display: flex;
  list-style: none;
  gap: 15px;
  justify-content: center;
}
</style>
