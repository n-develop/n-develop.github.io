<template>
  <main>
    <Navigation/>
    <div id="site" class="container">
      <div class="columns">
        <AboutMe/>
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script>
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AboutMe from '@/components/AboutMe.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',
  components: { Navigation, AboutMe },
};
</script>

<style>
#site {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}

html {
  font-size: 14px;
  background-color: #f1f1f1;
}

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.card {
  margin-bottom: 10px;
}

.highlight-color {
  color: #209cee;
}

.topic {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)
}
</style>
