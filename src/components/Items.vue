<script setup>
</script>
<script>
export default {
    data(){
        return{
            itemsJSON : {}
        }
    },
    async mounted(){
       const itemsArr = await fetch(`./src/assets/data/items.json`);
       this.itemsJSON = await itemsArr.json();
       console.log('Champion JSON file: ', this.itemsJSON);
    }
};
</script>

<template>
    <div id="items">
        <div v-for="item in itemsJSON"
        :key="item"
        class="item-info">
        <h1>Name: {{item.name}}</h1>
        <h2>Effect: {{item.effect}}</h2>
        <img v-bind:src="item.icon" alt="{{item.name}} icon">
        </div>
    </div>
</template>

<style>
#items{
    color:white;
    width: 100%;
    font-size: 1rem;
} 
#items h1{
    color: #00bd7e;
}
.item-info{
    border-style : solid;
    border-color: aquamarine;
}
</style>