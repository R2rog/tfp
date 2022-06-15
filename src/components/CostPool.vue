<script>
import ChampTooltip from './ChampTooltip.vue';
export default{
    components: ["ChampTooltip"],
    data(){
        return{
            champCost: [],
            champArr: [],
            champ: {},
            champCounter: 0,
            champOrigins: '',
            champTraits: '',
            champDragged: {},
            boardValues: [
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}]
            ],
            boardClasses:{
                arcanist: 0,
                assassin: 0,
                bodyguard: 0,
                bruiser: 0,
                challenger: 0,
                colossus: 0,
                enchanter: 0,
                innovator: 0,
                scholar: 0,
                sniper: 0,
                striker: 0,
                transformer: 0,
                twinshot: 0
            },
            boardOrigins:{
                chemtech: 0,
                clockwork: 0,
                debonair: 0,
                enforcerer: 0,
                glutton: 0,
                hextech: 0,
                mastermind: 0,
                mercenary: 0,
                mutant: 0,
                rival: 0,
                scrap: 0,
                socialite: 0,
                syndicate: 0,
                yordle: 0,
                yordleLord: 0
            }
        }
    },
    methods: {
        champInfo: function(champ){
            for (let i = 0; i < this.champArr.length; i++) {
            if(this.champArr[i].name == champ){
                    this.champ = this.champArr[i];
                    break;
                };
            };
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
            this.champDragged = selectedChamp;
            console.log('champ being dragged: ', this.champDragged);
        },
        innerDrag: function(e){
            console.log('Inner drag started from slot id: ', e.target.id, 'champ dragged', this.champDragged);
            e.target.src = '';
            let i = e.target.id[0]-1;
            let j = e.target.id[1]-1;
            this.champDragged = this.boardValues[i][j];
            this.boardValues[i][j]= {};
            console.log('Board after inner drag: ', this.boardValues);
        },
        champDrop: function(e){
            let i = e.target.id[4]-1;
            let j = e.target.id[11]-1;
            let target = document.getElementById(e.target.id);
            this.champDragged.classes.forEach(element => {
                this.boardClasses[element.toLowerCase()] = this.boardClasses[element.toLowerCase()] + 1;
            });
            this.champDragged.origins.forEach(origin => {
                this.boardOrigins[origin.toLowerCase()] = this.boardOrigins[origin.toLowerCase()]+1;
            });
            console.log('index', i,j);
            if(target.hasChildNodes()) target.children[0].src = this.champDragged.icon;
            else target.src = this.champDragged.icon;
            this.champCounter += 1; 
            this.boardValues[i][j] = this.champDragged;
            console.log('Board after champ dropped: ', this.boardValues);
            console.log('Board classes', this.boardClasses);
            console.log('Board origins', this.boardOrigins);
        }
    },
    async mounted(){
        let cost1 = [];
        let cost2 = [];
        let cost3 = [];
        let cost4 = [];
        let cost5 = [];
        const champJSON = await fetch(`./src/assets/data/champions.json`);
        this.champArr = await champJSON.json();
        this.champArr.forEach(champ => {
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
<div>
    <div id="cost">
        <div class="pool-row" v-for="(costRow,index) in champCost"
        :key="costRow">
            <h1>{{index+1}}</h1>
            <div class="champ" v-for="champ in costRow"
                :key="champ">
                <a href="#">
                    <img v-bind:src="'./src/assets/icons/champions/'+champ+'.jpg'" alt="{{champ}} image"
                    v-bind:class="'cost'+(index+1)"
                    v-on:mouseover="champInfo(champ)"
                    v-on:mouseleave="hideInfo"
                    draggable
                    @dragstart="startDrag(champ)">
                    <!--ChampTooltip v-show="champ == this.champName" :champion="this.champName" :champArr="fetchedChampArr"></ChampTooltip-->
                    <span v-show="this.champ.name == champ" class="pool-champ-tooltip">
                        <h2>Champion: {{this.champ.name}}</h2>
                        <h2>Cost: {{this.champ.cost}}</h2>
                        <h2>Origins: {{this.champOrigins}}</h2>
                        <h2>Traits: {{this.champTraits}}</h2>
                    </span>
                </a>
            </div>
        </div>
    </div>
    <div id="board" >
        <div class="board-row" v-for="row in 4" :key="row" v-bind:id="'row'+row">
            <div class="champ-slot" v-for="champ in 7" :key="'champ'+champ"
                v-bind:id="'row-'+row+'-slot-'+champ"
                @drop="champDrop"
                @dragover.prevent
                @dragenter.prevent>
                <img v-bind:id="row+''+champ" draggable src="" alt=""
                    @dragleave="innerDrag">
            </div>
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
.champ-slot{
    image-resolution: 4rem;
}
.champ-slot img{
    height: 4rem;
}
.pool-champ-tooltip{
    background-color: #00bd7e;
    color: #111;
    position:absolute;
    font-size: 0.75rem;
    z-index: 2;
    height: 600%;
    width: 350%;
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