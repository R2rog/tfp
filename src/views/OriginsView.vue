<script>
import ChampTooltip from "../components/ChampTooltip.vue";

export default {
  components: { ChampTooltip },
  data() {
    return {
      originsJSON: {},
      fetchedChampArr: [],
      champName: "",
    };
  },
  async mounted() {
    const originsArr = await fetch(`./src/assets/data/set7/origins.json`);
    const champsArr = await fetch(`./src/assets/data/set7/champions.json`);
    this.originsJSON = await originsArr.json();
    this.fetchedChampArr = await champsArr.json();
  },
};
</script>

<template>
  <div id="origins" v-cloak>
    <h1>Traits in set 6.5</h1>
    <div v-for="element in originsJSON" :key="element" class="trait-info">
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
}
</style>
