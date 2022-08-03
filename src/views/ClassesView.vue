<script>
import ChampTooltip from "../components/ChampTooltip.vue";
export default {
  components: { ChampTooltip },
  data() {
    return {
      classesJSON: {},
      champJSON: {},
      fetchedChampArr: [],
      champName: "",
    };
  },
  async mounted() {
    const classesArr = await fetch(`./src/assets/data/set7/classes.json`);
    const champsArr = await fetch(`./src/assets/data/set7/champions.json`);
    this.classesJSON = await classesArr.json();
    this.fetchedChampArr = await champsArr.json();
  },
};
</script>

<template>
  <div id="classes" v-cloak>
    <h1>Traits in set 6.5</h1>
    <div v-for="element in classesJSON" :key="element" class="trait-info">
      <div class="trait-header">
        <img
          v-bind:src="'./src/assets/icons/set7/traits/' + element.name + '.svg'"
          alt="class logo"
        />
        <h1>{{ element.name }}</h1>
      </div>
      <div class="trait-champs">
        <ChampTooltip
          v-bind:elArr="element.champions"
          v-bind:champArr="fetchedChampArr"
        ></ChampTooltip>
      </div>
      <p>{{ element.description }}</p>
      <p>{{ element.bonus }}</p>
      <div class="trait-buffs">
        <h2>Buffs</h2>
        <tr v-for="(entry, index) in element.sets" :key="index">
          <th class="min">{{ entry.min }}</th>
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
  width: 150%;
  font-size: 1rem;
  margin: 25%;
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
  background-color: white;
  height: 2rem;
}
.trait-header h1 {
  color: #ff4949;
  text-align: center;
  margin: 10px;
}
.trait-champs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
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
.min {
  color: #ff4949;
  font-size: 1.25rem;
}
</style>
