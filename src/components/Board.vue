<!-- eslint-disable no-prototype-builtins -->
<script>
import CostPool from "./CostPool.vue";
import ClassesPool from "./ClassesPool.vue";
import OriginsPool from "./OriginsPool.vue";
import Synergies from "./Synergies.vue";
export default {
  components: { CostPool, ClassesPool, OriginsPool, Synergies },
  props: [
    "champDragged",
    "propsJSON",
    "champArr",
    "classesArr",
    "originsArr",
    "traitsArr",
  ],
  data() {
    return {
      selectedChamp: "",
      selectedTrait: {},
      selectedPool: 1,
      active: false,
      innerDragEvent: false,
      poolSelection: false,
      selectedOrigin: {},
      champCounter: 0,
      boardValues: [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
      ],
      boardChamps: {},
      boardTraits: {
        admin: {
          name: "A.D.M.I.N",
          value: 0,
          style: "black",
        },
        "anima squad": {
          name: "Anima Squad",
          value: 0,
          style: "black",
        },
        arsenal: {
          name: "Arsenal",
          value: 0,
          style: "black",
        },
        civilian: {
          name: "Civilian",
          value: 0,
          style: "black",
        },
        gadgeteen: {
          name: "Gadgeteen",
          value: 0,
          style: "black",
        },
        "laser corps": {
          name: "Laser Corps",
          value: 0,
          style: "black",
        },
        "mecha: prime": {
          name: "Mecha: PRIME",
          value: 0,
          style: "black",
        },
        "ox force": {
          name: "Ox Force",
          value: 0,
          style: "black",
        },
        "star guardian": {
          name: "Star Guardian",
          value: 0,
          style: "black",
        },
        supers: {
          name: "Supers",
          value: 0,
          style: "black",
        },
        threat: {
          name: "Threat",
          value: 0,
          style: "black",
        },
        underground: {
          name: "Underground",
          value: 0,
          style: "black",
        },
        ace: {
          name: "Ace",
          value: 0,
          style: "black",
        },
        aegis: {
          name: "Aegis",
          value: 0,
          style: "black",
        },
        brawler: {
          name: "Brawler",
          value: 0,
          style: "black",
        },
        corrupted: {
          name: "Corrupted",
          value: 0,
          style: "black",
        },
        defender: {
          name: "Defender",
          value: 0,
          style: "black",
        },
        duelist: {
          name: "Duelist",
          value: 0,
          style: "black",
        },
        forecaster: {
          name: "Forecaster",
          value: 0,
          style: "black",
        },
        hacker: {
          name: "Hacker",
          value: 0,
          style: "black",
        },
        heart: {
          name: "Heart",
          value: 0,
          style: "black",
        },
        mascot: {
          name: "Mascot",
          value: 0,
          style: "black",
        },
        prankster: {
          name: "Prankster",
          value: 0,
          style: "black",
        },
        recon: {
          name: "Recon",
          value: 0,
          style: "black",
        },
        renegade: {
          name: "Renegade",
          value: 0,
          style: "black",
        },
        spellslinger: {
          name: "Spellslinger",
          value: 0,
          style: "black",
        },
        sureshot: {
          name: "Sureshot",
          value: 0,
          style: "black",
        },
      },
    };
  },
  methods: {
    innerDrag: function (e) {
      e.target.src = "";
      let i = e.target.id[0] - 1;
      let j = e.target.id[1] - 1;
      let currentChamp = this.boardValues[i][j];
      if (this.innerDragEvent == false && this.poolSelection == false) {
        if (this.boardChamps[currentChamp.name].ocurrences == 1) {
          currentChamp.classes.forEach((trait) => {
            if (trait != "") {
              this.boardTraits[trait.toLowerCase()].value -= 1;
              this.changeStyle(trait);
              delete this.boardChamps[currentChamp.name];
            }
          });
          currentChamp.origins.forEach((origin) => {
            if (origin != "") {
              this.boardTraits[origin.toLowerCase()].value -= 1;
              this.changeStyle(origin);
              delete this.boardChamps[currentChamp.name];
            }
          });
        } else this.boardChamps[currentChamp.name].ocurrences -= 1;
        this.boardValues[i][j] = {};
        this.selectedChamp = currentChamp;
        this.innerDragEvent = true;
      } else {
        this.boardValues[i][j] = currentChamp;
        e.target.src = currentChamp.icon;
      }
    },
    champDrop: function (e) {
      let i = e.target.id[4] - 1;
      let j = e.target.id[11] - 1;
      let target = document.getElementById(e.target.id);
      this.champCounter += 1;
      this.boardValues[i][j] = this.selectedChamp;
      if (!this.boardChamps.hasOwnProperty(this.selectedChamp.name)) {
        this.boardChamps[this.selectedChamp.name] = { ocurrences: 1 };
      } else this.boardChamps[this.selectedChamp.name].ocurrences += 1;
      this.selectedChamp.classes.forEach((trait) => {
        if (trait != "") this.boardTraits[trait.toLowerCase()].value += 1;
        this.changeStyle(trait);
      });
      this.selectedChamp.origins.forEach((origin) => {
        if (origin != "") this.boardTraits[origin.toLowerCase()].value += 1;
        this.changeStyle(origin);
      });
      if (target.hasChildNodes())
        target.children[0].src = this.selectedChamp.icon;
      else target.src = this.selectedChamp.icon;
      this.selectedChamp = "";
      this.innerDragEvent = false;
      this.poolSelection = false;
      this.$emit("refresh");
    },
    champLeave: function () {
      this.selectedChamp = "";
      this.innerDragEvent = false;
      this.champCounter -= 1;
    },
    refreshChamp: function (champSelected) {
      this.selectedChamp = champSelected;
      this.poolSelection = true;
    },
    changeStyle(traitName) {
      let trait = this.traitsArr[traitName.toLowerCase()];
      console.log("Selected trait: ", trait);
      if (trait.name == "Threat")
        this.boardTraits[trait.name.toLowerCase()].style = "purple";
      else if (trait.stats.lenght == 1)
        this.boardTraits[trait.name.toLowerCase()].style = "gold";
      else if (
        this.boardTraits[trait.name.toLowerCase()].value < trait.stats[0].min
      )
        this.boardTraits[trait.name.toLowerCase()].style = "black";
      else {
        for (let i = 0; i < trait.stats.length; i++) {
          let traitValue = this.boardTraits[trait.name.toLowerCase()].value;
          if (
            traitValue <= trait.stats[i].min &&
            traitValue < trait.stats[i + 1].min
          ) {
            this.boardTraits[trait.name.toLowerCase()].style =
              trait.stats[i].style;
            break;
          }
        }
      }
    },
  },
};
</script>

<template>
  <Synergies
    v-bind:traitsArr="traitsArr"
    v-bind:boardTraits="boardTraits"
  ></Synergies>
  <div>
    <div id="positions" v-on:mouseleave="champLeave">
      <div
        class="board-row"
        v-for="row in 4"
        :key="row"
        v-bind:id="'row' + row"
      >
        <div
          class="champ-slot"
          :class="{ active }"
          v-for="column in 7"
          :key="'champ' + column"
          v-bind:id="'row-' + row + '-slot-' + column"
          @drop="champDrop"
          @dragover.prevent
          @dragenter.prevent
        >
          <img
            v-bind:id="row + '' + column"
            draggable
            src=""
            alt=""
            @dragleave="innerDrag"
          />
        </div>
      </div>
    </div>
    <div id="pool-selector">
      <button v-on:click="selectedPool = 1">Cost</button>
      <button v-on:click="selectedPool = 2">Traits</button>
      <button v-on:click="selectedPool = 3">Origins</button>
    </div>
    <CostPool
      @champSelected="refreshChamp"
      v-bind:champArr="champArr"
      v-show="selectedPool == 1"
    ></CostPool>
    <ClassesPool
      @champSelected="refreshChamp"
      v-show="selectedPool == 2"
      v-bind:champArr="champArr"
      v-bind:classesArr="classesArr"
    ></ClassesPool>
    <OriginsPool
      @champSelected="refreshChamp"
      v-show="selectedPool == 3"
      v-bind:champArr="champArr"
      v-bind:originsArr="originsArr"
    ></OriginsPool>
  </div>
</template>

<style>
#board {
  /*background-color: #2c394b;*/
  background-color: #082032;
  display: flex;
  width: 900px;
  height: 42%;
}
#synergies {
  background-color: #2c394b;
  width: 20%;
  height: 100%;
}
.synergies-tooltip {
  background-color: #000;
  color: white;
  font-size: 0.8rem;
  position: absolute;
  z-index: 2;
  margin-top: 32px;
  width: 200%;
}
.tooltip-content {
  margin: 20px;
}
.tooltip-content h2 {
  color: #ff4949;
}
.class-tag {
  display: flex;
}
.active {
  background-color: #ff4949;
  border: 1px solid #ff4949;
}
.origin-tag {
  display: flex;
}
.board-row {
  background-color: #2c394b;
  height: 4rem;
  width: 95%;
  margin: 1rem 1rem 1rem 1rem;
  display: flex;
}
.champ-slot {
  background-color: black;
  height: 4rem;
  width: 4rem;
  margin: 0rem 1rem 1rem 1rem;
}
.champ-slot:hover {
  background-color: #ff4949;
  cursor: copy;
}
.champ-slot img {
  height: 4rem;
}
.synergy-slot {
  display: flex;
  margin: 10px;
  background-color: black;
  color: white;
  align-content: space-around;
  border-radius: 4px;
}

.synergy-value {
  background-color: #ff4949;
  border-radius: 4px;
  margin: 3px;
  font-size: 1rem;
  height: 30px;
  width: 25px;
  text-align: center;
}
.synergy-name {
  font-size: 1rem;
  text-align: center;
  width: 100%;
}
.trait-tootip-champ {
  height: 30px;
  width: 30px;
}
.trait-tooltip-champ-row {
  width: 100%;
  display: flex;
  direction: row;
  align-content: space-around;
}
</style>
