<script>
import ChampTooltip from './ChampTooltip.vue';
import ChampCost from './CostPool.vue';
import TraitsPool from './TraitsPool.vue';
import OriginsPool from './OriginsPool.vue';
export default{
    components: { ChampTooltip, ChampCost,TraitsPool, OriginsPool },
    data(){
        return{
            selectedPool:1,
        }
    }
}
</script>

<template>
    
    <div id="champ-pool">
        <div id="pool-selector">
            <button v-on:click="selectedPool=1">Cost</button>
            <button v-on:click="selectedPool=2">Traits</button>
            <button v-on:click="selectedPool=3">Origins</button>
        </div>
        <ChampCost v-show="selectedPool == 1" ></ChampCost>
        <TraitsPool v-show="selectedPool == 2" ></TraitsPool>
        <OriginsPool v-show="selectedPool == 3" ></OriginsPool>
    </div>
</template>

<style>
#pool-selector{
    width:100%;
    display:flex;
    align-content: flex-end;
}
#pool-selector button{
    height: 3rem;
    font-size: 1rem;
}
</style>