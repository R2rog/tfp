<script>
import ChampTooltip from './ChampTooltip.vue';

export default {
    /*props: {
        champArr: Array
    },*/
    components: { ChampTooltip },
    data() {
        return {
            originsJSON: {},
            champJSON:{},
            champ: {},
            champOrigins: '',
            champTraits: '',
        };
    },
    methods: {
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
    async mounted() {
        const originsArr = await fetch(`./src/assets/data/origins.json`);
        const champsArr = await fetch(`./src/assets/data/champions.json`);
        this.originsJSON = await originsArr.json();
        this.champJSON = await champsArr.json();
    },
};
</script>

<template>
    <div id="origins">
        <h1>Set 6.5 origins</h1>
        <div v-for=" origin in originsJSON"
        :key="origin"
        class="class-info">
            <h1>{{origin.name}}</h1>
            <div id="origin-champs">
                <div id="champion" v-for="champ in origin.champions"
                    :key="champ">
                    <a href="#">
                        <img v-bind:src="'./src/assets/icons/champions/'+champ+'.jpg'" alt="champ image"
                        v-on:mouseover="champInfo(champ)"
                        v-on:mouseleave="hideInfo"
                        >
                        <!--span v-show="champ==this.champ.name" class="champ-tooltip">
                            <h2>Champion: {{this.champ.name}}</h2>
                            <h2>Cost: {{this.champ.cost}}</h2>
                            <h2>Origins: {{this.champOrigins}}</h2>
                            <h2>Traits: {{this.champTraits}}</h2>
                        </span-->
                        <ChampTooltip v-show="champ==this.champ.name" :champion="this.champ" :champOrigins="this.champOrigins" :champTraits="this.champTraits" ></ChampTooltip>    
                    </a>
                </div>
            </div>
            <p>{{origin.bonus}}</p>
            <div id="bonus">
                <tr>
                    <th>Count</th>
                    <th>Bonus</th>
                </tr>
                <tr  v-for="(entry,index) in origin.set"
                    :key="index">
                    <th>{{entry.count}}</th>
                    <th>{{entry.bonus}}</th>
                </tr>
            </div>
        </div>  
    </div>
</template>

<style>
.class-info{
    width: 80%;
    align-content:center;
}
#origins{
    color:white;
    width: 100%;
    font-size: 1rem;
} 
#origins h1{
    color: #00bd7e;
}
#origin-champs{
    display: flex;
    flex-wrap: wrap;
}
#champion{
    /*color:white;
    border-style: solid;
    width:20%;*/
    flex: 0 0 21%;
    font-size: 0.75rem;
    display: flex;
}
#champion h1{
    color: #00bd7e;
}
#bonus{
    text-align: center;
    width:100%;
}
</style>