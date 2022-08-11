<script>
import ChampTooltip from "./ChampTooltip.vue";
export default {
  components: { ChampTooltip },
  props: ["champArr", "originsArr"],
  data() {
    return {
      //originsArr: [],
      //hampsArr: [],
    };
  },
  methods: {
    sendChamp: function (champSelected) {
      console.log("Champ selected", champSelected);
      this.$emit("champSelected", champSelected);
    },
  },
};
</script>

<template>
  <div id="origins-pool">
    <div class="pool-row" v-for="origin in this.originsArr" :key="origin">
      <img
        v-bind:src="'./set7/traits/' + origin.name + '.svg'"
        alt="origin logo"
      />
      <h3 class="origin-name">{{ origin.name }}</h3>
      <ChampTooltip
        v-bind:elArr="origin.champions"
        @sendChampChild="sendChamp"
        v-bind:champArr="this.champArr"
      ></ChampTooltip>
    </div>
  </div>
</template>

<style>
#origins-pool{
  margin-top: 5%;
  margin-bottom: 6%;
}
.origin-name {
  font-size: 1rem;
}
.pool-row {
  border: solid black 2px;
  background-color: black;
  margin-bottom: 1%;
}
.pool-row h3 {
  color: #ff4949;
  font-size: 1.2rem;
  width: 25%;
  text-align: center;
}
.pool-row img {
  background-color: white;
}
</style>
