<script>
export default {
  methods: {
    traitInfo: function (selectedTrait) {
      let traitsArr = [];
      if (this.propsJSON.traitsArr.hasOwnProperty(selectedTrait.toLowerCase()))
        traitsArr = this.propsJSON.traitsArr;
      else traitsArr = this.propsJSON.originsArr;
      this.selectedTrait = traitsArr[selectedTrait.toLowerCase()];
    },
    hideInfo: function () {
      this.selectedTrait = "";
    },
  },
};
</script>

<template>
<div id="synergies">
    <div
      v-bind:class="'synergy-slot'"
      v-for="trait in traitsArr"
      v-show="trait.value > 0"
      :key="trait"
    >
      <img
        v-bind:src="trait.logo"
        v-bind:id="trait.name + '-img'"
        v-bind:class="'trait-logo'"
        v-on:mouseover="traitInfo(trait.name)"
        v-on:mouseleave="hideInfo"
      />
      <div v-bind:class="'synergy-value'">
        {{ trait.min }}
      </div>
      <div v-bind:class="'synergy-name'">
        {{ trait.name }}
      </div>
      <span
        class="synergies-tooltip"
        v-show="this.selectedTrait.name == trait.name"
      >
        <div v-bind:class="'tooltip-content'">
          <h2>Description</h2>
          <p>{{ this.selectedTrait.description }}</p>
          <h3 v-for="buff in this.selectedTrait.stats" :key="buff.count">
            {{ buff.min }}: {{ buff.buff }}
          </h3>
          <div class="trait-tooltip-champ-row">
            <div v-for="champ in this.selectedTrait.champions" :key="champ">
              <img
                v-bind:src="champ.icon"
                class="trait-tootip-champ"
                alt="Trait champion pool"
              />
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<style>
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
.trait-tootip-champ{
  height: 30px;
  width: 30px;
}
.trait-tooltip-champ-row{
  width: 100%;
  display: flex;
  direction: row;
  align-content: space-around;
}
</style>
