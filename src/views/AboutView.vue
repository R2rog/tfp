<script setup>
import Champions from "@/components/Champions.vue";
import Items from "@/components/Items.vue";
import Traits from "../components/Traits.vue";
import Origins from "@/components/Origins.vue"
import Team from "@/components/Team.vue";
</script>

<template>
  <!--div class="about">
    <h1>This is an about page</h1>
  </div-->
  <!--Champions></Champions-->
  <!--Items></Items-->
  <Traits></Traits>
  <!--Team></Team-->
  <!--Origins></Origins-->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
