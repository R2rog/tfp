<script setup></script>
<script>
export default {
  data() {
    return {
      champJSON: {},
    };
  },
  async beforeMount() {
    const champArr = await fetch(`./data/champions.json`);
    console.log("Champ arr: ", champArr);
    this.champJSON = await champArr.json();
    console.log("Champion JSON file: ", this.champJSON);
  },
};
</script>

<template>
  <div id="champions" v-cloak>
    <div v-for="champion in champJSON" :key="champion" class="champ-info">
      <div class="champ-name">
        <h1>{{ champion.name }}</h1>
      </div>
      <div class="champ-logo">
        <img
          v-bind:class="'cost-' + champion.cost"
          v-bind:src="champion.icon"
          alt="{{champion.name}} icon"
        />
      </div>
      <div class="champ-stats">
        <span>Cost:</span>
        <h2>{{ champion.cost }}</h2>
        <span>Origins:</span>
        <h2>{{ champion.traits }}</h2>
        <span>Classes:</span>
        <h2>{{ champion.classes }}</h2>
      </div>
    </div>
  </div>
</template>

<style>
#champions {
  color: white;
  background-color: #2c394b;
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 8%;
}
.champ-info {
  background-color: black;
  border-radius: 10px;
  border-style: solid;
  border-color: grey;
  width: 250px;
  box-shadow: -1rem 0 3rem #000;
  margin-top: 40px;
  margin-left: 40px;
}
.champ-info:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.champ-info:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}
.champ-info:hover .stroke {
  stroke-dashoffset: 100;
  transition: 0.6s ease-out;
}
.champ-name {
  color: #ff4949;
  text-align: center;
}
.champ-logo {
  display: flex;
  justify-content: center;
}
.champ-logo img {
  height: 6rem;
}
.champ-stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.champ-stats span {
  color: #ff4949;
  font-size: 1.25rem;
}
.cost-1 {
  border-style: solid;
  border-width: 3px;
  border-color: rgba(187, 187, 187, 0.933);
}
.cost-2 {
  border-style: solid;
  border-width: 3px;
  border-color: rgba(20, 204, 115, 0.933);
}
.cost-3 {
  border-style: solid;
  border-width: 3px;
  border-color: rgba(84, 195, 255, 0.933);
}
.cost-4 {
  border-style: solid;
  border-width: 3px;
  border-color: rgba(222, 14, 189, 0.933);
}
</style>
