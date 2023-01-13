<script>
export default {
  data() {
    return {
      originsJSON: {},
      fetchedChampArr: [],
      champName: "",
      tooltipChamp: "",
    };
  },
  async mounted() {
    //const originsArr = await fetch(`./data/origins.json`);
    //const champsArr = await fetch(`./data/champions.json`);
    const originsArr = await fetch(`./data/origins-set8.json`);
    const champsArr = await fetch(`./data/champs-set8.json`);
    this.originsJSON = await originsArr.json();
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
  <div id="origins" v-cloak>
    <h1>Traits in set 8</h1>
    <div v-for="origin in originsJSON" :key="origin" class="origin-info">
      <div class="origin-header">
        <img v-bind:src="origin.logo" />
        <h1>{{ origin.name }}</h1>
      </div>
      <div class="origin-champs">
        <div
          v-for="champ in origin.champions"
          :key="champ"
          v-on:mouseover="setTooltip(champ.name, origin.name)"
          v-on:mouseleave="quitTooltip"
        >
          <img
            v-bind:src="champ.icon"
            alt="Champion profile picture"
            v-bind:class="'cost-' + champ.cost"
          />
          <span
            v-bind:id="champ.name + '-' + origin.name"
            v-show="champ.name + '-' + origin.name == tooltipChamp"
            class="champ-tooltip"
            >{{ champ.name }}</span
          >
        </div>
      </div>
      <p>{{ origin.description }}</p>
      <div class="origin-buffs">
        <h2>Buffs</h2>
        <tr v-for="(entry, index) in origin.stats" :key="index">
          <th>{{ entry.buff }}</th>
        </tr>
      </div>
    </div>
  </div>
</template>

<style>
.champ-tooltip {
  height: 30px;
  font-size: 1rem;
  width: 9rem;
  margin-bottom: 20px;
  font-weight: bold;
  z-index: 2;
  background-color: hsl(0, 100%, 64%);
  color: black;
  text-align: center;
}
.origin-info {
  background-color: #17141d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 520px;
  margin: 15px;
  box-shadow: -1rem 0 3rem #000;
}
.origin-info:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}
.origin-champs {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
}
.origin-champs img {
  height: 50px;
  width: 50px;
}

.origin-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.origin-header img {
  background-color: black;
  height: 3rem;
}
.origin-header h1 {
  color: #ff4949;
  text-align: center;
  margin: 10px;
}
.origin-buffs {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
.origin-buffs h2 {
  color: #ff4949;
  text-align: center;
}
.class-info {
  width: 80%;
  align-content: center;
}
#origins {
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
.cost-5 {
  border-style: solid;
  border-width: 4px;
  border-color: yellow;
}
</style>
