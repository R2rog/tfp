<script>
import ChampTooltip from './ChampTooltip.vue';
export default {
    components: { ChampTooltip },
    data(){
        return{
            classesJSON : {},
            champJSON: {},
            champ: {},
            champOrigins: '',
            champTraits: '',
        }
    },
    methods:{
        champInfo: function(champ){
            for (let i = 0; i < this.champJSON.length; i++) {
                if(this.champJSON[i].name == champ){
                    this.champ = this.champJSON[i];
                    break;
                };
            };
            if(this.champ.origins.length==1) this.champOrigins = this.champ.origins[0];
            else{
                this.champ.origins.forEach(origin => {
                    this.champOrigins += origin + ' ';
                });
            };
            if(this.champ.classes.length>1) this.champTraits = this.champ.classes[0];
            else{
                this.champ.classes.forEach(trait => {
                    this.champTraits += trait + ' ';
                });
            };
        },
        hideInfo: function(){
            this.champ = {};
            this.champOrigins = '';
            this.champTraits = '';
        }
    },
    async mounted(){
       const classesArr = await fetch(`./src/assets/data/classes.json`);
       const champsArr = await fetch(`./src/assets/data/champions.json`);
       this.classesJSON = await classesArr.json();
       this.champJSON = await champsArr.json();
    }
};
</script>

<template>
    <div id="classes">
        <h1>Clases in set 6.5</h1>
        <div v-for=" element in classesJSON"
        :key="element"
        class="class-info">
            <h1>Name: {{element.name}}</h1>
            <div id="origin-champs">
                <div id="champion" v-for="champ in element.champions"
                    :key="champ">
                    <a href="#">
                        <img v-bind:src="'./src/assets/icons/champions/'+champ+'.jpg'" alt="{{champ}} image"
                            v-on:mouseover="champInfo(champ)"
                            v-on:mouseleave="hideInfo">
                        <ChampTooltip v-show="champ==this.champ.name" :champion="this.champ" :champOrigins="this.champOrigins" :champTraits="this.champTraits" ></ChampTooltip>  
                    </a>
                </div>
            </div>
            <p>{{element.bonus}}</p>
            <tr>
                <th>Count</th>
                <th>Bonus</th>
            </tr>
            <tr v-for="(entry,index) in element.set"
                :key="index">
                <th>{{entry.count}}</th>
                <th>{{entry.bonus}}</th>
        </tr>
        </div>
    </div>
</template>

<style>
#classes{
    color:white;
    width: 100%;
    font-size: 1rem;
} 
#classes h1{
    color: #00bd7e;
}
.item-info{
    border-style : solid;
    border-color: aquamarine;
}
</style>