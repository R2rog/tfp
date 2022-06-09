<script>
import ChampTooltip from './ChampTooltip.vue';
export default{
    components: ["ChampTooltip"],
    data(){
        return{
            originsArr: [],
            champName: '',
            fetchedChampArr:[],
        }
    },
    methods:{
        champInfo: function(champ){
            this.champName = champ
        },
        hideInfo: function(){
            this.champName = '';
        }
    },
    async mounted(){
        const originsJSON = await fetch(`./src/assets/data/origins.json`);
        const champsArr = await  fetch(`./src/assets/data/champions.json`)
        this.originsArr = await originsJSON.json();
        this.fetchedChampArr = await champsArr.json();
    }
}
</script>

<template>
    <div id="origins">
        <div class="pool-row" v-for="origin in originsArr" :key="origin">
        <h3 class="origin-name">{{origin.name}}</h3>
            <div class="'champ" v-for="champ in origin.champions" :key="champ">
                <a href="#">
                    <img v-bind:src="'./src/assets/icons/champions/'+champ+'.jpg'" alt="{{champ}} image"
                    class="champ-img"
                    v-on:mouseover="champInfo(champ)"
                    v-on:mouseleave="hideInfo">
                    <ChampTooltip v-show="champ == this.champName" :champion="this.champName" :champArr="fetchedChampArr"></ChampTooltip>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.origin-name{
    font-size: 1rem;
}
</style>