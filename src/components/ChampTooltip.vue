<script>
export default {
    //props: ["champion", "champArr","elArr"], TODO: uncomment all this if it fails
    props: ["elArr", "champArr"],
    data(){
        return {
            champ: {},
            champOrigins: '',
            champTraits: '',
        };
    },
    methods: {
        champInfo: function(champ){
            for (let i = 0; i < this.champArr.length; i++) {
                if(this.champArr[i].name == champ){
                    this.champ = this.champArr[i];
                    break;
                };
            };
            console.log('Champ recieved: ', champ);
 
            console.log('This champ: ', this.champ.name);
            if(this.champ.origins.length==1) this.champOrigins = this.champ.origins[0];
            else{
                this.champ.origins.forEach(origin => {
                    this.champOrigins += origin + ' ';
                });
            };
            if(this.champ.classes.length==1) this.champTraits = this.champ.classes[0];
            else{
                this.champ.classes.forEach(trait => {
                    this.champTraits += trait + ' ';
                });
            };
        },
        hideInfo: function(){
            this.champ = {};
            this.champOrigins = '';
            this.champTraits = '';
        },
        startDrag: function(champ){
            let selectedChamp = {};
            for (let i = 0; i < this.champArr.length; i++) {
            if(this.champArr[i].name == champ){
                    selectedChamp = this.champArr[i];
                    break;
                };
            };
            this.localChampDragged = selectedChamp;
        },
    },
};
</script>

<template>
    <div v-for="element in elArr" :key="element">
        <a href="#">
            <img class="champ-img" v-bind:src="'./src/assets/icons/set7/champions/TFT7_'+element+'.png'" alt="{{element}} image"
                v-on:mouseover="champInfo(element)"
                v-on:mouseleave="hideInfo"
                draggable
                @dragstart="startDrag(champ)">
            <span v-show="this.champ.name == element" class="champ-tooltip">
                <h2>Champion: {{this.champ.name}}</h2>
                <h2>Cost: {{this.champ.cost}}</h2>
                <h2>Origins: {{this.champOrigins}}</h2>
                <h2>Traits: {{this.champTraits}}</h2>
            </span>
        </a>
    </div>
</template>

<style>
.champ-tooltip{
    background-color: #00bd7e;
    color: #111;
    position:absolute;
    font-size: 0.65rem;
    z-index: 2;
    height: 600%;
    width: 350%;
}
.champ-img{
    height:4rem;
}
</style>