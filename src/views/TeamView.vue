<script>
import ChampTooltip from "../components/ChampTooltip.vue";
import CostPool from "../components/CostPool.vue";
import ClassesPool from "../components/ClassesPool.vue";
import OriginsPool from "../components/OriginsPool.vue";
import Board from "../components/Board.vue";
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
    /*const champJSON = await fetch(`./src/assets/data/set7/champions.json`);
    const traitsJSON = await fetch(`./src/assets/data/set7/traits.json`)
    const classesJSON = await fetch(`./src/assets/data/set7/classes.json`);
    const originsJSON = await fetch(`./src/assets/data/set7/origins.json`);*/
    const champJSON = await fetch(`./data/champs-set8.json`);
    const traitsJSON = await fetch(`./data/traits-set8.json`);
    const classesJSON = await fetch(`./data/classes-set8.json`);
    const originsJSON = await fetch(`./data/origins-set8.json`);
    this.fetchedChampArr = await champJSON.json();
    this.fetchedClassesArr = await classesJSON.json();
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
    console.log("This traits props: ", this.traitsProps);
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
  <div id="team-comp" v-cloak>
    <Board
      v-bind:propsJSON="boardProps"
      v-bind:champArr="fetchedChampArr"
      v-bind:classesArr="fetchedClassesArr"
      v-bind:traitsArr="fetchedTraitsArr"
      v-bind:originsArr="fetchedOriginsArr"
      v-if="dataFetched"
    ></Board>
  </div>
</template>

<style>
#team-comp {
  background-color: #2c394b;
  margin-left: 17%;
  margin-top: 5%;
  width: 950px;
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
[v-cloak] {
  display: none;
}
</style>
