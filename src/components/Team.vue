<script>
import ChampTooltip from './ChampTooltip.vue';
import CostPool from './CostPool.vue';
import TraitsPool from './TraitsPool.vue';
import OriginsPool from './OriginsPool.vue';
import Board from './Board.vue';
export default{
    components: { ChampTooltip, CostPool,TraitsPool, OriginsPool,Board },
    data(){
        return{
            selectedPool:1,
            fetchedChampArr: [],
            fetchedTraitsArr: [],
            fetchedOriginsArr: [],
            selectedChamp: {},
            originsProps: {},
            traitsProps: {},
            boardProps: {},
            dataFetched: false
        };
    },
    async beforeMount(){
        const champJSON = await fetch(`./src/assets/data/set7/champions.json`);
        const traitsJSON = await fetch(`./src/assets/data/set7/classes.json`);
        const originsJSON = await fetch(`./src/assets/data/set7/origins.json`);
        this.fetchedChampArr = await champJSON.json();
        this.fetchedTraitsArr = await traitsJSON.json();
        this.fetchedOriginsArr = await originsJSON.json();
        this.originsProps = {
            champArr: this.fetchedChampArr,
            originsArr: this.fetchedOriginsArr
        };
        this.traitsProps = {
            champArr: this.fetchedChampArr,
            traitsArr: this.fetchedTraitsArr
        };
        this.boardProps = {
            originsArr: this.fetchedOriginsArr,
            traitsArr: this.fetchedTraitsArr
        };
        this.dataFetched = true;
    },
    methods: {
        refreshChamp: function (champSelected){
            this.selectedChamp = champSelected;
        }
    },

}
</script>

<template>
<div id="team-comp" >
    <Board v-bind:champDragged="selectedChamp" v-bind:propsJSON="boardProps"></Board> 
    <div id="pool-selector">
        <button v-on:click="selectedPool=1">Cost</button>
        <button v-on:click="selectedPool=2">Traits</button>
        <button v-on:click="selectedPool=3">Origins</button>
    </div>
    <CostPool @champSelected="refreshChamp" v-if="dataFetched" v-show="selectedPool == 1" v-bind:champArr="fetchedChampArr"></CostPool>
    <TraitsPool v-if="dataFetched" v-show="selectedPool == 2" v-bind:propsJSON="traitsProps"></TraitsPool>
    <OriginsPool v-if="dataFetched" v-show="selectedPool == 3" v-bind:propsJSON="originsProps"></OriginsPool>
</div>
</template>

<style>
#pool-selector{
    width:100%;
    display:flex;
    align-content: flex-end;
    margin: 1rem;
}
#pool-selector button{
    height: 3rem;
    font-size: 1rem;
}
</style>