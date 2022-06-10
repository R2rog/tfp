<script>
import ChampTooltip from './ChampTooltip.vue';
export default {
    components: { ChampTooltip },
    data(){
        return{
            classesJSON : {},
            champJSON: {},
            fetchedChampArr: [],
            champName: '',
        }
    },
    async mounted(){
       const classesArr = await fetch(`./src/assets/data/classes.json`);
       const champsArr = await fetch(`./src/assets/data/champions.json`);
       this.classesJSON = await classesArr.json();
       this.fetchedChampArr = await champsArr.json();
    }
};
</script>

<template>
    <div id="classes">
        <h1>Traits in set 6.5</h1>
        <div v-for=" element in classesJSON"
        :key="element"
        class="class-info">
            <h1>Name: {{element.name}}</h1>
            <div id="origin-champs">
                <ChampTooltip v-bind:elArr="element.champions" v-bind:champArr="fetchedChampArr"></ChampTooltip>
            </div>
            <p>{{element.bonus}}</p>
            <tr>
                <th>Count</th>
                <th>Bonus</th>
            </tr>
            <tr v-for="(entry,index) in element.set"
                :key="index">
                <th>{{entry.count}}</th>
                <th>{{entry.bonus}}</th>
        </tr>
        </div>
    </div>
</template>

<style>
#classes{
    color:white;
    width: 100%;
    font-size: 1rem;
} 
#classes h1{
    color: #00bd7e;
}
.item-info{
    border-style : solid;
    border-color: aquamarine;
}
</style>