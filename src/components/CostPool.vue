<script>
export default {
  props: ["champArr"],
  data() {
    return {
      champCost: [],
      champ: {},
      champCounter: 0,
      champOrigins: "",
      champTraits: "",
      localChampDragged: {},
    };
  },
  methods: {
    champInfo: function (champ) {
      console.log("champion being hovered: ", champ);
      for (let i = 0; i < this.champArr.length; i++) {
        if (this.champArr[i].name == champ) {
          this.champ = this.champArr[i];
          break;
        }
      }
      if (this.champ.origins.length == 1)
        this.champOrigins = this.champ.origins[0];
      else {
        this.champ.origins.forEach((origin) => {
          this.champOrigins += origin + " ";
        });
      }
      if (this.champ.classes.length == 1)
        this.champTraits = this.champ.classes[0];
      else {
        this.champ.classes.forEach((trait) => {
          this.champTraits += trait + " ";
        });
      }
    },
    hideInfo: function () {
      this.champ = {};
      this.champOrigins = "";
      this.champTraits = "";
    },
    startDrag: function (champ) {
      let selectedChamp = {};
      for (let i = 0; i < this.champArr.length; i++) {
        if (this.champArr[i].name == champ) {
          selectedChamp = this.champArr[i];
          break;
        }
      }
      this.localChampDragged = selectedChamp;
      this.$emit("champSelected", selectedChamp);
    },
  },
  beforeMount() {
    let cost1 = [];
    let cost2 = [];
    let cost3 = [];
    let cost4 = [];
    let cost5 = [];
    this.champArr.forEach((champ) => {
      if (champ.cost == 1) cost1.push(champ);
      else if (champ.cost == 2) cost2.push(champ);
      else if (champ.cost == 3) cost3.push(champ);
      else if (champ.cost == 4) cost4.push(champ);
      else cost5.push(champ);
    });
    this.champCost = [cost1, cost2, cost3, cost4, cost5];
  },
};
</script>

<template>
  <div id="cost">
    <div class="pool-row" v-for="(costRow, index) in champCost" :key="costRow">
      <h1>{{ index + 1 }}</h1>
      <div class="champ" v-for="champ in costRow" :key="champ">
        <a href="#">
          <img
            v-bind:src="champ.icon"
            alt="{{champ}} image"
            v-bind:class="'cost' + champ.cost"
            v-on:mouseover="champInfo(champ.name)"
            v-on:mouseleave="hideInfo"
            draggable
            @dragstart="startDrag(champ.name)"
          />
          <span
            v-show="this.champ.name == champ.name"
            class="pool-champ-tooltip"
          >
            <div v-bind:class="'pool-champ-tooltip-content'">
              <h2><span>Champion:</span> {{ this.champ.name }}</h2>
              <h2><span>Cost:</span> {{ this.champ.cost }}</h2>
              <h2><span>Origins:</span>{{ this.champOrigins }}</h2>
              <h2><span>Classes:</span>{{ this.champTraits }}</h2>
            </div>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.pool-row {
  display: flex;
}
.pool-row h1 {
  font-size: 2rem;
  background-color: #000;
  color: #ff4949;
  width: 3rem;
  height: 3rem;
  text-align: center;
}
.champ {
  flex: auto;
}
.pool-champ-tooltip {
  background-color: #000;
  color: white;
  position: absolute;
  font-size: 0.7rem;
  z-index: 2;
  width: 500%;
}
.pool-champ-tooltip-content {
  margin: 10px;
}
.pool-champ-tooltip-content span {
  color: #ff4949;
}
#cost {
  width: 100%;
  margin-top: 2%;
  margin-bottom: 10%;
  background-color: #2c394b;
}
.cost1 {
  height: 3rem;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(187, 187, 187, 0.933);
}
.cost2 {
  height: 3rem;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(20, 204, 115, 0.933);
}
.cost3 {
  height: 3rem;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(84, 195, 255, 0.933);
}
.cost4 {
  height: 3rem;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(222, 14, 189, 0.933);
}
.cost5 {
  height: 3rem;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(255, 196, 48, 0.933);
}
</style>
