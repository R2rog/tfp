<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <nav>
      <img src="./assets/group1.png" alt="furyhorn" />
      <RouterLink to="/">Team</RouterLink>
      <RouterLink to="/champions">Champions</RouterLink>
      <RouterLink to="/classes">Classes</RouterLink>
      <RouterLink to="/origins">Origins</RouterLink>
    </nav>
    <RouterView />
    <!--router-view v-slot="{ Component }">
      <Transition name="slide">
        <component :is="Component"></component>
      </Transition>
    </router-view-->
    <footer>
      <RouterLink to="/tos">Terms of service</RouterLink>
      <RouterLink to="/policy">Privacy Policy</RouterLink>
      <p>
        tfp.com isn’t endorsed by Riot Games Games and doesn’t reflect the views
        or opinions of Riot Games or anyone officially involved in producing or
        managing League of Legends. League of Legends and Riot Games are
        trademarks or registered trademarks of Riot Games, Inc. League of
        Legends © Riot Games, Inc.
      </p>
    </footer>
  </main>
</template>

<style>
@import "@/assets/base.css";
body {
  background-color: #082032;
}
#app {
  max-width: 1280px;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: #ff4949;
  transition: 0.4s;
}

nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  height: 2rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav img {
  height: 5rem;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
footer {
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 3%;
}
/*.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}
.slide-enter-from {
  position: absolute;
  right: -100%;
}
.slide-leave-to {
  position: absolute;
  left: -100%;
}
.slide-leave-from {
  position: absolute;
  left: 0;
}*/
[v-cloak] {
  display: none;
}
</style>
