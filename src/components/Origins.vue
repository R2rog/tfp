<script>
import ChampTooltip from './ChampTooltip.vue';

export default {
    components: { ChampTooltip },
    data() {
        return {
            originsJSON: {},
            fetchedChampArr:[],
            champName: '',
        };
    },
    async mounted() {
        const originsArr = await fetch(`./src/assets/data/origins.json`);
        const champsArr = await fetch(`./src/assets/data/champions.json`);
        this.originsJSON = await originsArr.json();
        this.fetchedChampArr = await champsArr.json();
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
               <ChampTooltip v-bind:elArr="origin.champions" v-bind:champArr="fetchedChampArr"></ChampTooltip>
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