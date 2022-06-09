<script setup>
</script>
<script>
export default {
    data(){
        return{
            champJSON : {}
        }
    },
    async mounted(){
       const champArr = await fetch(`./src/assets/data/champions.json`);
       this.champJSON = await champArr.json();
       console.log('Champion JSON file: ', this.champJSON);
    }
};
</script>

<template>
    <div id="champions">
        <div v-for="champion in champJSON"
        :key="champion"
        class="champ-info">
        <h1>Champion: {{champion.name}}</h1>
        <h2>Cost: {{champion.cost}}</h2>
        <h2>Origins:{{champion.origins}}</h2>
        <h2>Classes: {{champion.classes}}</h2>
        <img v-bind:src="champion.icon" alt="{{champion.name}} icon">
        </div>
    </div>
</template>

<style>
#champions{
    color:white;
    width: 100%;
    font-size: 1rem;
} 
#champions h1{
    color: #00bd7e;
}
.champ-info{
    border-style : solid;
    border-color: aquamarine;
}
</style>