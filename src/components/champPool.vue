<script>
import ChampTooltip from "./ChampTooltip.vue";
export default {
  components: { ChampTooltip },
  props: ["propsJSON"],
  data() {
    return {
      traitsArr: [],
      fetchedChampArr: [],
    };
  },
  methods: {
    sendChamp: function (champSelected) {
      console.log("Trait champ selected", champSelected);
      this.$emit("champPoolSelected", champSelected);
    },
  },
};
</script>

<template>
  <div id="traits">
    <div
      class="pool-row"
      v-for="trait in this.propsJSON.traitsArr"
      :key="trait"
    >
      <h3 class="trait-name">{{ trait.name }}</h3>
      <ChampTooltip
        v-bind:elArr="trait.champions"
        @sendChampChild="sendChamp"
        v-bind:champArr="this.propsJSON.champArr"
      ></ChampTooltip>
    </div>
  </div>
</template>

<style>
.trait-name {
  font-size: 1rem;
}
</style>
