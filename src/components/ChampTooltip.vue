<script>
export default {
  props: ["elArr", "champArr"],
  emits: ["sendChampChild"],
  data() {
    return {
      champ: {},
      champOrigins: "",
      champTraits: "",
    };
  },
  methods: {
    champInfo: function (champ) {
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
    startDrag: function (champ){ //TODO: Try this section by sending the object
      console.log("Champ: ", champ);
      let selectedChamp = {};
      for (let i = 0; i < this.champArr.length; i++) {
        console.log("Champion equals champ", this.champArr[i].name == champ);
        if (this.champArr[i].name == champ) {
          selectedChamp = this.champArr[i];
          break;
        }
      }
      console.log("Champ getting dragged", selectedChamp);
      this.localChampDragged = selectedChamp;
      this.$emit("sendChampChild", selectedChamp);
    },
  },
};
</script>

<template>
  <div v-for="champ in elArr" :key="champ" class="trait-champions">
    <div>
      <a href="#">
        <img
          v-bind:class="'tooltip-cost-' + champ.cost"
          v-bind:src="champ.icon"
          alt="{{element}} image"
          v-on:mouseover="champInfo(champ.name)"
          v-on:mouseleave="hideInfo"
          draggable
          @dragstart="startDrag(champ.name)"
        />
        <span v-show="this.champ.name == champ.name" class="champ-tooltip">
          <h2><span>Champion:</span> {{ this.champ.name }}</h2>
          <h2><span> Cost:</span> {{ this.champ.cost }}</h2>
          <h2><span>Origins:</span> {{ this.champOrigins }}</h2>
          <h2><span>Traits:</span> {{ this.champTraits }}</h2>
        </span>
      </a>
    </div>
  </div>
</template>

<style>
.champ-tooltip {
  background-color: #000;
  color: white;
  position: absolute;
  font-size: 0.7rem;
  z-index: 2;
  width: 500%;
}
.champ-tooltip h2 span {
  color: #ff4949;
}
.champ-img {
  height: 3rem;
  margin: 5px;
  border: solid white 3px;
}
.tooltip-cost-1 {
  height: 3rem;
  margin-right: 8px;
  border-style: solid;
  border-width: 4px;
  border-color: rgba(187, 187, 187, 0.933);
}
.tooltip-cost-2 {
  height: 3rem;
  margin-right: 8px;
  border-style: solid;
  border-width: 4px;
  border-color: rgba(20, 204, 115, 0.933);
}
.tooltip-cost-3 {
  height: 3rem;
  margin-right: 8px;
  border-style: solid;
  border-width: 4px;
  border-color: rgba(84, 195, 255, 0.933);
}
.tooltip-cost-4 {
  height: 3rem;
  margin-right: 8px;
  border-style: solid;
  border-width: 4px;
  border-color: rgba(222, 14, 189, 0.933);
}
.tooltip-cost-5 {
  height: 3rem;
  margin-right: 8px;
  border-style: solid;
  border-width: 4px;
  border-color: yellow;
}
</style>
