<script>
import ChampTooltip from './ChampTooltip.vue';
export default{
    components: ["ChampTooltip"],
    data(){
        return{
            champCost: [],
            fetchedChampArr: [],
            champName: '',
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
        let cost1 = [];
        let cost2 = [];
        let cost3 = [];
        let cost4 = [];
        let cost5 = [];
        const champsArr = await fetch(`./src/assets/data/champions.json`);
        this.fetchedChampArr = await champsArr.json();
        this.fetchedChampArr.forEach(champ => {
            if(champ.cost==1) cost1.push(champ.name);
            else if(champ.cost==2)cost2.push(champ.name);
            else if(champ.cost==3)cost3.push(champ.name);
            else if(champ.cost==4)cost4.push(champ.name);
            else cost5.push(champ.name);
        });
        this.champCost = [
            cost1,
            cost2,
            cost3,
            cost4,
            cost5
        ];
    }
}
</script>

<template>
    <div id="cost">
        <div class="pool-row" v-for="(costRow,index) in champCost"
        :key="costRow">
            <h3>{{index+1}}</h3>
            <div class="champ" v-for="champ in costRow"
                :key="champ">
                <a href="#">
                    <img v-bind:src="'./src/assets/icons/champions/'+champ+'.jpg'" alt="{{champ}} image"
                    v-bind:class="'cost'+(index+1)"
                    v-on:mouseover="champInfo(champ)"
                    v-on:mouseleave="hideInfo">
                    <ChampTooltip v-show="champ == this.champName" :champion="this.champName" :champArr="fetchedChampArr"></ChampTooltip>
                </a>
            </div>
        </div>
    </div>  
</template>

<style>
.pool-row{
    display: flex;
}
.champ{
    flex: auto;
}
.champ-img{
    height:4rem;
}

.cost1{
    height: 4rem;
    border-style: solid;
    border-color: rgba(187, 187, 187, 0.933)
}
.cost2{
    height: 4rem;
    border-style: solid;
    border-color: rgba(20, 204, 115, 0.933)
}
.cost3{
    height: 4rem;
    border-style: solid;
    border-color: rgba(84, 195, 255, 0.933)
}
.cost4{
    height: 4rem;
    border-style: solid;
    border-color: rgba(222, 14, 189, 0.933)
}
.cost5{
    height: 4rem;
    border-style: solid;
    border-color: rgba(255, 196, 48, 0.933)
}
</style>