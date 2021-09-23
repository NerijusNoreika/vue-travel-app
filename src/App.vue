<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <TheNavigation />
    </transition>
    <transition name="slide" mode="out-in">
      <router-view :key="$route.path.slug" />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.destinations {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
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

<script>
import TheNavigation from '@/components/TheNavigation';

export default {
  components: {
    TheNavigation,
  },
};
</script>
