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
    methods:{
        sendChamp: function(champSelected){
            this.$emit('champSelected', champSelected);
        }
    }
}
</script>

<template>
    <div id="origins">
        <div class="pool-row" v-for="origin in this.propsJSON.originsArr" :key="origin">
        <h3 class="origin-name">{{origin.name}}</h3>
        <ChampTooltip v-bind:elArr="origin.champions" @sendChamp="sendChamp" v-bind:champArr="this.propsJSON.champArr"></ChampTooltip>
        </div>
    </div>
</template>

<style>
.origin-name{
    font-size: 1rem;
}
</style>