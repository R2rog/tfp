<script>
import ChampTooltip from "./ChampTooltip.vue";
import CostPool from "./CostPool.vue";
import ClassesPool from "./ClassesPool.vue";
import OriginsPool from "./OriginsPool.vue";
import Board from "./Board.vue";
export default {
  components: { ChampTooltip, CostPool, ClassesPool, OriginsPool, Board },
  data() {
    return {
      selectedPool: 1,
      fetchedChampArr: [],
      fetchedTraitsArr: [],
      fetchedOriginsArr: [],
      selectedChamp: {},
      originsProps: {},
      traitsProps: {},
      boardProps: {},
      dataFetched: false,
      poolSelection: false,
      champLeave: false,
    };
  },
  async beforeMount() {
    const champJSON = await fetch(`./src/assets/data/set7/champions.json`);
    console.log('champ json', champJSON);
    const traitsJSON = await fetch(`./src/assets/data/set7/classes.json`);
    const originsJSON = await fetch(`./src/assets/data/set7/origins.json`);
    this.fetchedChampArr = await champJSON.json();
    this.fetchedTraitsArr = await traitsJSON.json();
    this.fetchedOriginsArr = await originsJSON.json();
    this.originsProps = {
      champArr: this.fetchedChampArr,
      originsArr: this.fetchedOriginsArr,
    };
    this.traitsProps = {
      champArr: this.fetchedChampArr,
      traitsArr: this.fetchedTraitsArr,
    };
    this.boardProps = {
      originsArr: this.fetchedOriginsArr,
      traitsArr: this.fetchedTraitsArr,
    };
    this.dataFetched = true;
  },
  methods: {
    refreshChamp: function (champSelected) {
      this.selectedChamp = champSelected;
      this.poolSelection = true;
      console.log("Selected champ from the board", this.selectedChamp);
    },
    refreshChampTrait: function (champSelected) {
      this.selectedChamp = champSelected;
      this.poolSelection = true;
      console.log("Selected champ from the trait pool", this.selectedChamp);
    },
    refreshPoolSelection: function () {
      console.log("Refreshing parent values ...");
      this.poolSelection = false;
      this.champLeave = false;
    },
  },
};
</script>

<template>
  <div id="team-comp">
    <Board
      v-bind:propsJSON="boardProps"
      v-bind:champArr="fetchedChampArr"
      v-bind:classesArr="fetchedTraitsArr"
      v-bind:originsArr="fetchedOriginsArr"
      v-if="dataFetched"
    ></Board>
  </div>
</template>

<style>
#team-comp {
  background-color: #2c394b;
  margin-left: 15%;
  margin-top: 15%;
  width: 130%;
  display: flex;
  flex-wrap: wrap;
}
#pool-selector {
  display: flex;
  align-content: flex-end;
  margin-left: 50%;
  margin-top: 5%;
}
#pool-selector button {
  height: 3rem;
  font-size: 1rem;
  margin-right: 1rem;
  border-style: none;
  color: #ff4949;
  cursor: pointer;
  background-color: #000;
}
</style>
