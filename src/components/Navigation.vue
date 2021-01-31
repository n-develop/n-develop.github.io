<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link id="brandElement" class="navbar-item" :to="{ name: 'Home' }" exact>
        <h1 class="title is-4">Lars-Richter.dev</h1>
      </router-link>

      <a role="button" id="navbarBurger" class="navbar-burger"
         aria-label="menu" aria-expanded="false"
         data-target="navMenu" @click.stop="toggleNavbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{ name: 'Home' }" active-class="is-primary" exact class="navbar-item">
          Work Experience
        </router-link>

        <router-link :to="{ name: 'Edu' }" active-class="is-primary" exact class="navbar-item">
          Education
        </router-link>

        <router-link :to="{ name: 'Cert' }" active-class="is-primary" exact class="navbar-item">
          Certification
        </router-link>

        <router-link :to="{ name: 'Talks' }" active-class="is-primary" exact class="navbar-item">
          Public Speaking
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    toggleNavbar() {
      const burger = document.getElementById('navbarBurger');
      const targetId = burger.getAttribute('data-target');
      const $target = document.getElementById(targetId);

      burger.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    },
  },
};
</script>

<style scoped>
#brandElement {
  color: inherit;
  text-decoration: none;
}
</style>
