<script>
import SynergiesTooltip from "./SynergiesTooltip.vue";
export default{
    props:["champDragged", "propsJSON"],
    components:{SynergiesTooltip},
    data(){
        return{
            selectedChamp : {},
            selectedClass: {},
            innerDragEvent: false,
            selectedOrigin: {},
            champCounter: 0,
            boardValues: [
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}]
            ],
            boardClasses:{
                arcanist: {
                    name: 'Arcanist',
                    value: 0
                },
                assassin:{
                    name: 'Assasin',
                    value: 0
                },
                bodyguard: {
                    name: 'Bodyguard',
                    value: 0
                },
                bruiser: {
                    name: 'Bruiser',
                    value: 0
                },
                challenger: {
                    name: 'Challenger',
                    value: 0
                },
                colossus: {
                    name: 'Colossus',
                    value: 0
                },
                enchanter: {
                    name: 'Enchanter',
                    value: 0
                },
                innovator: {
                    name: 'Innovator',
                    value: 0
                },
                scholar: {
                    name: 'Scholar',
                    value: 0
                },
                sniper: {
                    name: 'Sniper',
                    value: 0
                },
                striker: {
                    name: 'Striker',
                    value: 0
                },
                transformer: {
                    name: 'Transformer',
                    value: 0
                },
                twinshot:{
                    name: 'Twinshot',
                    value: 0
                }
            },
            boardOrigins:{
                chemtech: {
                    name: 'Chemtech',
                    value: 0
                },
                clockwork: {
                    name: 'Clockwork',
                    value: 0
                },
                debonair: {
                    name: 'Debonair',
                    value: 0
                },
                enforcerer: {
                    name: 'Enforcerer',
                    value: 0
                },
                glutton: {
                    name: 'Glutton',
                    value: 0
                },
                hextech: {
                    name: 'Hextech',
                    value: 0
                },
                mastermind: {
                    name: 'Mastermind',
                    value: 0
                },
                mercenary: {
                    name: 'Mercenary',
                    value: 0
                },
                mutant: {
                    name: 'Mutant',
                    value:0
                },
                rival: {
                    name: 'Rival',
                    value: 0
                },
                scrap: {
                    name: 'Scrap',
                    value: 0
                },
                socialite: {
                    name: 'Socialite',
                    value: 0
                },
                syndicate: {
                    name: 'Syndicate',
                    value: 0
                },
                yordle: {
                    name: 'Yordle',
                    value: 0
                },
                yordleLord: {
                    name: 'Yordle Lord',
                    value: 0
                }
            }
        }
    },
    methods:{
        classInfo: function(selectedTrait){
            let classArr = this.propsJSON.traitsArr;
            for (let i = 0; i < classArr.length; i++) {
                if(classArr[i].name == selectedTrait){
                    this.selectedClass = classArr[i];
                    break;
                };
            };
        },
        originInfo: function(selectedTrait){
            let originArr = this.propsJSON.originsArr;
            for (let i = 0; i < originArr.length; i++) {
                if(originArr[i].name == selectedTrait){
                    this.selectedOrigin = originArr[i];
                    break;
                };
            };            
        },
        hideInfo: function(){
            this.selectedClass = '';
            this.selectedOrigin = '';   
        },
        innerDrag: function(e){
            e.target.src = '';
            let i = e.target.id[0]-1;
            let j = e.target.id[1]-1;
            this.selectedChamp = this.boardValues[i][j];
            this.selectedChamp.classes.forEach(element => {
                let lowCaseEl = element.toLowerCase();
                this.boardClasses[lowCaseEl].value = this.boardClasses[lowCaseEl].value - 1;
            });
            this.selectedChamp.origins.forEach(origin => {
                let lowCaseOg = origin.toLowerCase();
                this.boardOrigins[lowCaseOg].value = this.boardOrigins[lowCaseOg].value - 1;
            });
            this.boardValues[i][j]= {};
            this.innerDragEvent = true;
        },
        champDrop: function(e){
            if(this.innerDragEvent == false)this.selectedChamp = this.champDragged;
            console.log('Selected champ: ',this.selectedChamp );
            let i = e.target.id[4]-1;
            let j = e.target.id[11]-1;
            let target = document.getElementById(e.target.id);
            this.selectedChamp.classes.forEach(element => {
                let lowCaseEl = element.toLowerCase();
                this.boardClasses[lowCaseEl].value = this.boardClasses[lowCaseEl].value + 1;
            });
            this.selectedChamp.origins.forEach(origin => {
                let lowCaseOg = origin.toLowerCase();
                this.boardOrigins[lowCaseOg].value = this.boardOrigins[lowCaseOg].value + 1;
            });
            if(target.hasChildNodes()) target.children[0].src = this.selectedChamp.icon;
            else target.src = this.selectedChamp.icon;
            this.champCounter += 1; 
            this.boardValues[i][j] = this.selectedChamp;
            this.innerDragEvent == false;
        }
    },
}
</script>

<template>
   <div id="board">
        <div id="synergies">
            <div v-for="element in boardClasses" v-show="element.value > 0"  :key="element">
                <h2 v-on:mouseover="classInfo(element.name)"
                    v-on:mouseleave="hideInfo">
                    {{element.name}}: {{element.value}}
                </h2>
                <span class="synergies-tooltip" v-show="this.selectedClass.name == element.name">
                    <h2>{{this.selectedClass.bonus}}</h2>
                    <h2 v-for="buff in this.selectedClass.set" :key="buff.count">{{buff.count}}: {{buff.bonus}}</h2>
                </span>
            </div>
            <div v-for="origin in boardOrigins" v-show="origin.value > 0" :key="origin">
                <h2 v-on:mouseover="originInfo(origin.name)"
                    v-on:mouseleave="hideInfo">
                    {{origin.name}}: {{origin.value}}
                </h2>
                <span class="synergies-tooltip" v-show="this.selectedOrigin.name == origin.name">
                    <h2>{{this.selectedOrigin.bonus}}</h2>
                    <h2 v-for="buff in this.selectedOrigin.set" :key="buff.count">{{buff.count}}: {{buff.bonus}}</h2>
                </span>
            </div>
        </div>
        <div id="positions">
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
#board{
    background-color: gray;
    height:50%;
    width:120%;
    display:flex;
}
#synergies{
    background-color: grey;
    width: 20%;
    border-style: solid;
    border-color: #000;
    font-size: 0.8rem;
}
.synergies-tooltip{
    background-color: grey;
    font-size: 0.80rem;
    position:absolute;
    z-index: 2;
    width: 350%;
}
.board-row{
    background-color: cornflowerblue;
    height: 4rem;
    width:95%;
    margin: 1rem 1rem 1rem 1rem;
    display: flex;
}
.champ-slot{
    background-color: aquamarine;
    height: 4rem;
    width: 4rem;
    margin: 0rem 1rem 1rem 1rem;
}
.champ-slot img{
    height: 4rem;
}
</style>