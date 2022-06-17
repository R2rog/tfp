<script>
import ChampTooltip from './ChampTooltip.vue';
export default{
    components: { ChampTooltip },
    props: ["propsJSON"],
    data() {
        return {
            //originsArr: [],
            //hampsArr: [],
        };
    },
    async mounted() {
        console.log('propsJSON', this.propsJSON.originsArr);
        /*const originsJSON = await fetch(`./src/assets/data/origins.json`);
        const champsJSON = await fetch(`./src/assets/data/champions.json`);
        this.originsArr = await originsJSON.json();
        this.champsArr = await champsArr.json();*/
    },
}
</script>

<template>
    <div id="origins">
        <div class="pool-row" v-for="origin in this.propsJSON.originsArr" :key="origin">
        <h3 class="origin-name">{{origin.name}}</h3>
        <ChampTooltip v-bind:elArr="origin.champions" v-bind:champArr="this.propsJSON.champArr"></ChampTooltip>
        </div>
    </div>
</template>

<style>
.origin-name{
    font-size: 1rem;
}
</style>