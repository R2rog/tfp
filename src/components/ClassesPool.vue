<script>
import ChampTooltip from "./ChampTooltip.vue";
export default {
  components: { ChampTooltip },
  props: ["champArr", "classesArr"],
  data() {
    return {
      fetchedChampArr: [],
    };
  },
  methods: {
    sendChamp: function (champSelected) {
      console.log("Trait champ selected", champSelected);
      this.$emit("champSelected", champSelected);
    },
  },
};
</script>

<template>
  <div id="classes-pool">
    <div
      class="pool-row"
      v-for="champClass in this.classesArr"
      :key="champClass"
    >
      <img class="class-logo" v-bind:src="champClass.logo" alt="origin logo" />
      <h3 class="class-name">{{ champClass.name }}</h3>
      <div class="class-champs-row">
        <ChampTooltip
          v-bind:elArr="champClass.champions"
          @sendChampChild="sendChamp"
          v-bind:champArr="this.champArr"
        ></ChampTooltip>
      </div>
    </div>
  </div>
</template>

<style>
.class-champs-row {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
}
#classes-pool {
  margin-top: 5%;
  margin-bottom: 6%;
}
.class-logo {
  height: 3rem;
  background-color: black;
}
.trait-name {
  font-size: 1rem;
}
.pool-row {
  border: solid black 2px;
}
.pool-row h3 {
  color: white;
  font-size: 1.5rem;
  width: 25%;
  text-align: center;
}
#classes {
  margin-left: 15%;
  margin-top: 2%;
  margin-bottom: 8%;
}
</style>
