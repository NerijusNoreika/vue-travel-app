<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.id">
        <router-link
          :to="{ name: 'destination', params: { slug: destination.slug } }"
        >
          {{ destination.name }}
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'destination', params: { slug: destination.slug } }"
          >
            <img :src="require(`../assets/${destination.image}`)" />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store.js';

export default {
  name: 'Home',
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style lang=""></style>
