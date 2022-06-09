<script>
import ChampTooltip from './ChampTooltip.vue';
export default{
    components: ["ChampTooltip"],
    data(){
        return{
            traitsArr:[],
            champName:'',
            fetchedChampArr: [],
        }
    },
    methods: {
        champInfo: function(champ){
            this.champName = champ
        },
        hideInfo: function(){
            this.champName = '';
        }
    },
    async mounted(){
        const traitsJSON = await fetch(`./src/assets/data/classes.json`);
        const champsArr = await  fetch(`./src/assets/data/champions.json`)
        this.traitsArr = await traitsJSON.json();
        this.fetchedChampArr = await champsArr.json();
    }
}
</script>

<template>
    <div id="traits">
        <div class="pool-row" v-for="trait in traitsArr" :key="trait">
            <h3 class="trait-name">{{trait.name}}</h3>
            <div class="'champ" v-for="champ in trait.champions" :key="champ">
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
.trait-name{
    font-size: 1rem;
}
</style>