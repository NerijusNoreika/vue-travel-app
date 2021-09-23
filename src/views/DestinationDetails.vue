<template>
  <div>
    <section class="destination">
      <GoBack />
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          class="destination-img"
          :src="require(`../assets/${destination.image}`)"
        />
        <p class="destination-description">{{ destination.description }}</p>
      </div>
    </section>
    <section>
      <h2>Top experiences in {{ destination.name }}</h2>
      <transition name="slide" mode="in-out">
        <div class="cards">
          <div
            v-for="experience in destination.experiences"
            :key="experience.id"
            class="card"
          >
            <router-link
              :to="{
                name: 'experience',
                params: { experienceSlug: experience.slug },
              }"
            >
              <img :src="require(`./../assets/${experience.image}`)" />
              <span class="card__text">
                {{ experience.name }}
              </span>
            </router-link>
          </div>
        </div>
      </transition>

      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from '../store';
import GoBack from '../components/GoBack.vue';
export default {
  components: { GoBack },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
  },
};
</script>

<style scoped>
.destination-details {
  display: flex;
}
.destination-img {
  max-width: 600px;
}

.destination-description {
  margin-left: 15px;
}
.cards img {
  max-height: 200px;
}

.cards {
  display: flex;
  justify-content: center;
}

.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(15, 15, 15, 0.5);
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
