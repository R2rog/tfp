<script>
import ChampTooltip from './ChampTooltip.vue';
export default{
    components: {ChampTooltip},
    props: ["propsJSON"],
    data(){
        return{
            traitsArr:[],
            fetchedChampArr: [],
        }
    },
    /*async mounted(){
        const traitsJSON = await fetch(`./src/assets/data/classes.json`);
        const champsArr = await  fetch(`./src/assets/data/champions.json`)
        this.traitsArr = await traitsJSON.json();
        this.fetchedChampArr = await champsArr.json();
    }*/
}
</script>

<template>  
    <div id="traits">
        <div class="pool-row" v-for="trait in this.propsJSON.traitsArr" :key="trait">
            <h3 class="trait-name">{{trait.name}}</h3>
            <ChampTooltip v-bind:elArr="trait.champions" v-bind:champArr="this.propsJSON.champArr"></ChampTooltip>
        </div>
    </div>
</template>

<style>
.trait-name{
    font-size: 1rem;
}
</style>