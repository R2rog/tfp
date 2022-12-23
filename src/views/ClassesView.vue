<script>
export default {
  data() {
    return {
      classesJSON: {},
      champJSON: {},
      fetchedChampArr: [],
      champName: "",
      tooltipChamp: "",
    };
  },
  async mounted() {
    //const classesArr = await fetch(`./data/classes.json`);
    //const champsArr = await fetch(`./data/champions.json`);
    const classesArr = await fetch(`./data/classes-set8.json`);
    const champsArr = await fetch(`./data/champs-set8.json`);
    this.classesJSON = await classesArr.json();
    this.fetchedChampArr = await champsArr.json();
  },
  methods: {
    setTooltip: function (champ, origin) {
      this.tooltipChamp = champ + "-" + origin;
    },
    quitTooltip: function () {
      this.tooltipChamp = "";
    },
  },
};
</script>

<template>
  <div id="classes" v-cloak>
    <h1>Traits in set 8</h1>
    <div v-for="element in classesJSON" :key="element" class="trait-info">
      <div class="trait-header">
        <img v-bind:src="element.logo" />
        <h1>{{ element.name }}</h1>
      </div>
      <div class="trait-champs">
        <div
          v-for="champ in element.champions"
          :key="champ"
          v-on:mouseover="setTooltip(champ.name, element.name)"
          v-on:mouseleave="quitTooltip"
        >
          <img
            v-bind:src="champ.url"
            alt="Champion profile picture"
            v-bind:class="'cost-' + champ.cost"
          />
          <span
            v-bind:id="champ.name + '-' + element.name"
            v-show="champ.name + '-' + element.name == tooltipChamp"
            class="champ-tooltip"
            >{{ champ.name }}</span
          >
        </div>
      </div>
      <p>{{ element.description }}</p>
      <div class="trait-buffs">
        <h2>Buffs</h2>
        <tr v-for="(entry, index) in element.stats" :key="index">
          <th>{{ entry.buff }}</th>
        </tr>
      </div>
    </div>
  </div>
</template>

<style>
#classes {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #2c394b;
  font-size: 1rem;
  width: 75%;
  margin-left: 15%;
  margin-top: 2%;
  margin-bottom: 8%;
}
.trait-info {
  background-color: #17141d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 520px;
  margin: 15px;
  box-shadow: -1rem 0 3rem #000;
}
.trait-info:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.trait-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.trait-header img {
  background-color: black;
  height: 3rem;
}
.trait-header h1 {
  color: #ff4949;
  text-align: center;
  margin: 10px;
}
.trait-champs {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
}
.trait-champs img{
  height: 50px;
  width: 50px;
}
.trait-buffs {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
.trait-buffs h2 {
  color: #ff4949;
  text-align: center;
}
.item-info {
  border-style: solid;
  border-color: aquamarine;
}
.champ-tooltip{
  height: 30px;
  font-size: 1rem;
  width: 9rem;
  margin-top: 10px;
  font-weight: bold;
  background-color: #ff4949;
  color: black;
  text-align: center;
}
.min {
  color: #ff4949;
  font-size: 1.25rem;
}
.cost-1 {
  border-style: solid;
  border-width: 4px;
  border-color: rgba(187, 187, 187, 0.933);
}
.cost-2 {
  border-style: solid;
  border-width: 4px;
  border-color: rgba(20, 204, 115, 0.933);
}
.cost-3 {
  border-style: solid;
  border-width: 4px;
  border-color: rgba(84, 195, 255, 0.933);
}
.cost-4 {
  border-style: solid;
  border-width: 4px;
  border-color: rgba(222, 14, 189, 0.933);
}
.cost-5{
  border-style: solid;
  border-width: 4px;
  border-color: yellow;
}
</style>
