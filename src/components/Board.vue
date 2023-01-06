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
        },
        "anima squad": {
          name: "Anima Squad",
          value: 0,
        },
        arsenal: {
          name: "Arsenal",
          value: 0,
        },
        civilian: {
          name: "Civilian",
          value: 0,
        },
        gadgeteen: {
          name: "Gadgeteen",
          value: 0,
        },
        "laser corps": {
          name: "Laser Corps",
          value: 0,
        },
        "mecha: prime": {
          name: "Mecha: PRIME",
          value: 0,
        },
        "ox force": {
          name: "Ox Force",
          value: 0,
        },
        "star guardian": {
          name: "Star Guardian",
          value: 0,
        },
        supers: {
          name: "Supers",
          value: 0,
        },
        threat: {
          name: "Threat",
          value: 0,
        },
        underground: {
          name: "Underground",
          value: 0,
        },
        ace: {
          name: "Ace",
          value: 0,
        },
        aegis: {
          name: "Aegis",
          value: 0,
        },
        brawler: {
          name: "Brawler",
          value: 0,
        },
        corrupted: {
          name: "Corrupted",
          value: 0,
        },
        defender: {
          name: "Defender",
          value: 0,
        },
        duelist: {
          name: "Duelist",
          value: 0,
        },
        forecaster: {
          name: "Forecaster",
          value: 0,
        },
        hacker: {
          name: "Hacker",
          value: 0,
        },
        heart: {
          name: "Heart",
          value: 0,
        },
        mascot: {
          name: "Mascot",
          value: 0,
        },
        prankster: {
          name: "Prankster",
          value: 0,
        },
        recon: {
          name: "Recon",
          value: 0,
        },
        renegade: {
          name: "Renegade",
          value: 0,
        },
        spellslinger: {
          name: "Spellslinger",
          value: 0,
        },
        sureshot: {
          name: "Sureshot",
          value: 0,
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
              delete this.boardChamps[currentChamp.name];
            }
          });
          currentChamp.origins.forEach((origin) => {
            if (origin != "") {
              this.boardTraits[origin.toLowerCase()].value -= 1;
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
      console.log("Selected champ getting droped: ", this.selectedChamp);
      let i = e.target.id[4] - 1;
      let j = e.target.id[11] - 1;
      let target = document.getElementById(e.target.id);
      this.champCounter += 1;
      this.boardValues[i][j] = this.selectedChamp;
      if (!this.boardChamps.hasOwnProperty(this.selectedChamp.name)) {
        this.boardChamps[this.selectedChamp.name] = { ocurrences: 1 };
      } else this.boardChamps[this.selectedChamp.name].ocurrences += 1;
      this.selectedChamp.classes.forEach((trait) => {
        console.log("trait", trait);
        if (trait != "") this.boardTraits[trait.toLowerCase()].value += 1;
      });
      this.selectedChamp.origins.forEach((origin) => {
        if (origin != "") this.boardTraits[origin.toLowerCase()].value += 1;
      });
      if (target.hasChildNodes())
        target.children[0].src = this.selectedChamp.icon;
      else target.src = this.selectedChamp.icon;
      this.selectedChamp = "";
      this.innerDragEvent = false;
      this.poolSelection = false;
      this.$emit("refresh");
      console.log("Board values at drop: ", this.boardValues);
    },
    champLeave: function () {
      this.selectedChamp = "";
      this.innerDragEvent = false;
      this.champCounter -= 1;
      console.log("champLeave");
    },
    refreshChamp: function (champSelected) {
      this.selectedChamp = champSelected;
      this.poolSelection = true;
      console.log("Selected champ from the board", this.selectedChamp);
    },
  },
  //let setArr = this.traitsArr[lowCaseTrait].sets;
  //let value = 0;
  //let classIcon = document.getElementById(trait + "-img");
  /*if (
          this.selectedChamp.classes.includes("Dragon") &&
          this.selectedChamp.traitBuff == trait &&
          this.boardChamps[this.selectedChamp.name].ocurrences <= 1
        ) {
          this.boardTraits[lowCaseTrait].value += 3;
        } else if (this.boardChamps[this.selectedChamp.name].ocurrences <= 1) {
          this.boardTraits[lowCaseTrait].value += 1;
        }
        value = this.boardTraits[lowCaseTrait].value;
        for (let i = 0; i < setArr.length; i++) {
          if (setArr[i].min == 1) {
            classIcon.style.backgroundColor = setArr[i].style;
            break;
            let borderURL = "url(./set7/traits/" + setArr[i].style + ".svg)";
            classIcon.style.backgroundImage = borderURL;
            console.log("Border color: ", setArr[i].style);
          } else if (
            setArr[i + 1] != undefined &&
            value >= setArr[i].min &&
            value < setArr[i + 1].min
          ) {
            if (setArr[i].style == "bronze")
              classIcon.style.backgroundColor = "#CD7F32";
            else if (setArr[i].style == "chromatic") {
              let borderURL = "url(./set7/traits/" + setArr[i].style + ".svg)";
              classIcon.style.backgroundColor = "";
              classIcon.style.backgroundImage = borderURL;
            } else classIcon[i].style == setArr[i].style;
            break;
            let borderURL = "url(./set7/traits/" + setArr[i].style + ".svg)";
            classIcon.style.backgroundImage = borderURL;
          } else {
            console.log("Trait: ", trait, "not active with value: ", value);
          }
    }*/
  /*let value = this.boardTraits[lowCaseTrait].value;
            let setArr = this.traitsArr[lowCaseTrait].stats;
            let classIcon = document.getElementById(trait + "-img");
            for (let i = 0; i < setArr.length; i++) {
              let nextIndex = i + 1;
              if (
                setArr[nextIndex] != undefined &&
                value >= setArr[i].min &&
                value < setArr[nextIndex].min
              ) {
                let borderURL = "url(./set7/traits/" + setArr[i].style + ".svg)";
                classIcon.style.backgroundImage = borderURL;
                if (setArr[i].style == "bronze")
                  classIcon.style.backgroundColor = "#CD7F32";
                else classIcon[i].style == setArr[i].style;
              } else if (value < setArr[i].min)
                classIcon.style.backgroundColor = "";
            }
            if (
              currentChamp.traits.includes("Dragon") &&
              currentChamp.traitBuff == trait
            ) {
              console.log("Dragon buff trait: ", this.selectedChamp.traitBuff);
              this.boardTraits[lowCaseTrait].value -= 3;
            } else this.boardTraits[lowCaseTrait].value -= 1;*/
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
.trait-logo {
  height: 1.75rem;
  margin: 3px;
  background-color: white;
  /*background-image: url("./set7/traits/default.svg");*/
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
