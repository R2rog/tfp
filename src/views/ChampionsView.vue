<script setup></script>
<script>
export default {
  data() {
    return {
      champJSON: {},
    };
  },
  async beforeMount() {
    //const champArr = await fetch(`./data/champions.json`);
    const champArr = await fetch(`./data/champs-set8.json`);
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
        <h1 style>
          {{ champion.name }}
          <span class="champ-cost">	&#129689 {{ champion.cost }} </span>
        </h1>
      </div>
      <div class="champ-logo">
        <!--img
          v-bind:class="'cost-' + champion.cost"
          v-bind:src="champion.icon"
          alt="{{champion.name}} icon"
        /-->
        <img
          v-bind:src="champion.icon"
          v-bind:class="'cost-' + champion.cost"
          alt="Champion icon picture"
        />
      </div>
      <div class="champ-stats">
        <div class="champ-origins">
          <span class="trait-list">Origins: </span>
          <span class="trait-list" v-for="origin in champion.origins" :key="origin">
            {{ ' '+ origin }}
          </span>
        </div>
        <div class="champ-classes">
          <span class="trait-list">Classes:</span>
          <span class="trait-list" v-for="trait in champion.classes" :key="trait">
            {{ ' ' + trait }}
          </span>
        </div>   
      </div>
      <div class="skill-content">
        <div class="skill-icon-name">
          <img class="skill-icon" v-bind:src="champion.skillIcon" alt="Champion Skill icon image" />
          <h3>
            {{ champion.skillName }}
          </h3>
        </div>
        <div class="skill-desc">
          <p> {{ champion.skill }} </p>         
        </div>
      </div>
    </div>
  </div>
</template>

<style>
p{
  margin:10px;
}
#champions {
  color: white;
  /*background-color: #2c394b;*/
  /*background-image: linear-gradient(to bottom, #7200a4, #7400ae, #7500b8, #7600c2, #7600cd, #7800d5, #7b00dc, #7d01e4, #8302ea, #8903f0, #9003f5, #9604fb);*/
  background: linear-gradient(90deg, rgba(82,0,158,1) 0%, rgba(117,0,200,1) 35%, rgba(150,0,199,1) 100%);
background-image: linear-gradient(to bottom, #7200a4, #7400ae, #7500b8, #7600c2, #7600cd, #7800d5, #7b00dc, #7d01e4, #8302ea, #8903f0, #9003f5, #9604fb);
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  flex-wrap: wrap;
  /*margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 8%;*/
}
.champ-info {
  background-color: black;
  /*background: rgb(82,0,158);
background: linear-gradient(90deg, rgba(82,0,158,1) 0%, rgba(117,0,200,1) 35%, rgba(150,0,199,1) 100%);
background-image: linear-gradient(to bottom, #7200a4, #7400ae, #7500b8, #7600c2, #7600cd, #7800d5, #7b00dc, #7d01e4, #8302ea, #8903f0, #9003f5, #9604fb);*/
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
  padding: 10px;
}
.champ-cost{
  font-size: 1rem;
  color:#ff4949;
}
.trait-list{
  color: white;
  font-size: 1rem;
}
.skill-icon{
  height: 50px;
  width: 50px;
}
.skill-icon-name{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-weight: bold;
}
.skill-desc{
  margin: 10px;
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
.cost-5{
  border-style: solid;
  border-width: 3px;
  border-color: yellow;
}
</style>
