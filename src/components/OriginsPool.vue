<script>
import ChampTooltip from './ChampTooltip.vue';
export default{
    components: { ChampTooltip },
    data() {
        return {
            originsArr: [],
            fetchedChampArr: [],
        };
    },
    async mounted() {
        const originsJSON = await fetch(`./src/assets/data/origins.json`);
        const champsArr = await fetch(`./src/assets/data/champions.json`);
        this.originsArr = await originsJSON.json();
        this.fetchedChampArr = await champsArr.json();
    },
}
</script>

<template>
    <div id="origins">
        <div class="pool-row" v-for="origin in originsArr" :key="origin">
        <h3 class="origin-name">{{origin.name}}</h3>
        <ChampTooltip v-bind:elArr="origin.champions" v-bind:champArr="fetchedChampArr"></ChampTooltip>
        </div>
    </div>
</template>

<style>
.origin-name{
    font-size: 1rem;
}
</style>