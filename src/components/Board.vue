<script>
import SynergiesTooltip from "./SynergiesTooltip.vue";
export default{
    props:["champDragged", "propsJSON", "poolSelection"],
    components:{SynergiesTooltip},
    data(){
        return{
            selectedChamp : '',
            selectedTrait: {},
            innerDragEvent: false,
            selectedOrigin: {},
            champCounter: 0,
            boardValues: [
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}]
            ],
            boardChamps: {},
            boardTraits:{
                assassin: {
                    name: 'Assassin',
                    value: 0
                },
                bard:{
                    name: 'Bard',
                    value: 0
                },
                bruiser: {
                    name: 'Bruiser',
                    value: 0
                },
                cannoneer: {
                    name: 'Cannoneer',
                    value: 0
                },
                cavalier: {
                    name: 'Cavalier',
                    value: 0
                },
                dragon: {
                    name: 'Dragon',
                    value: 0
                },
                dragonmancer: {
                    name: 'Dragonmancer',
                    value: 0
                },
                evoker: {
                    name: 'Evoker',
                    value: 0
                },
                guardian: {
                    name: 'Guardian',
                    value: 0
                },
                legend: {
                    name: 'Legend',
                    value: 0
                },
                mage: {
                    name: 'Mage',
                    value: 0
                },
                mystic: {
                    name: 'Mystic',
                    value: 0
                },
                shapeshifter:{
                    name: 'Shapeshifter',
                    value: 0
                },
                spellthief:{
                    name: 'Spellthief',
                    value: 0
                },
                starcaller:{
                    name: 'Starcaller',
                    value: 0
                },
                swiftshot: {
                    name: 'Swiftshot',
                    value: 0
                },
                warrior:{
                    name: 'Warrior',
                    value: 0
                },
                astral: {
                    name: 'Astral',
                    value: 0
                },
                guild: {
                    name: 'Guild',
                    value: 0
                },
                jade: {
                    name: 'Jade',
                    value: 0
                },
                mirage: {
                    name: 'Mirage',
                    value: 0
                },
                ragewing: {
                    name: 'Ragewing',
                    value: 0
                },
                revel: {
                    name: 'Revel',
                    value: 0
                },
                scalescorn: {
                    name: 'Scalescorn',
                    value: 0
                },
                shimmerscale: {
                    name: 'Shimmerscale',
                    value: 0
                },
                tempest: {
                    name: 'Tempest',
                    value:0
                },
                trainer: {
                    name: 'Trainer',
                    value: 0
                },
                whispers: {
                    name: 'Whispers',
                    value: 0
                }
            }
        }
    },
    methods:{
        traitInfo: function(selectedTrait){
            let traitsArr= [];
            if(this.propsJSON.traitsArr.hasOwnProperty(selectedTrait.toLowerCase())) traitsArr = this.propsJSON.traitsArr;
            else traitsArr = this.propsJSON.originsArr; 
            this.selectedTrait = traitsArr[selectedTrait.toLowerCase()];
        },
        hideInfo: function(){
            this.selectedTrait = ''; 
        },
        innerDrag: function(e){
            e.target.src = '';
            let i = e.target.id[0]-1;
            let j = e.target.id[1]-1;
            let currentChamp = this.boardValues[i][j];
            if(this.poolSelection == true) this.selectedChamp = this.champDragged;
            else this.selectedChamp = currentChamp;
            console.log('Pool selection: ', this.poolSelection, 'champ dragged: ', this.champDragged, 'champ selected', this.champSelected);
            console.log('Inner Drag leaving selected champ', this.selectedChamp, 'champ on the board at current position',currentChamp);
            if(this.innerDragEvent==false && this.poolSelection == false){
                console.log('No inner drag detected')
                this.selectedChamp.traits.forEach(trait=>{
                    let lowCaseTrait = trait.toLowerCase();
                    let value = this.boardTraits[lowCaseTrait].value;
                    let setArr = [];
                    let classIcon=document.getElementById(trait+'-img'); 
                    if(this.selectedChamp.traits.includes("Dragon") && this.selectedChamp.traitBuff == trait && this.boardChamps[this.selectedChamp.name].ocurrences == 1){
                        this.boardTraits[lowCaseTrait].value = this.boardTraits[lowCaseTrait].value - 3;
                    }else if(this.boardChamps[this.selectedChamp.name].ocurrences == 1) this.boardTraits[lowCaseTrait].value -= 1;
                    else this.boardTraits[lowCaseTrait].value -= 0;
                    if(this.propsJSON.traitsArr.hasOwnProperty(lowCaseTrait)) setArr = this.propsJSON.traitsArr[lowCaseTrait].sets;
                    else setArr = this.propsJSON.originsArr[lowCaseTrait].sets;
                    for (let i = 0; i < setArr.length; i++) {
                        if(value>=setArr[i].min && value<setArr[i+1].min && setArr[i+1].min!=undefined){
                            let borderURL = 'url(./src/assets/icons/set7/traits/'+setArr[i].style+'.svg)';
                            console.log('Border color for inner drag', borderURL);
                            classIcon.style.backgroundImage = borderURL;
                        }else if(value<setArr[i].min)classIcon.style.backgroundImage = '';
                    };
                });
                this.boardValues[i][j]= {};
                if(this.boardChamps[this.selectedChamp.name].ocurrences >= 1) this.boardChamps[this.selectedChamp.name].ocurrences -=1;
                this.boardChamps[this.selectedChamp.name]
                console.log('Board values inner drag...', this.boardValues);
                console.log('Champ values: ', this.boardChamps);
                this.innerDragEvent = true;
            }else{
                console.log('Drag already in progress with this champ', this.selectedChamp);
                let id = (i+1)+''+(j+1);
                console.log('id', id);
                this.boardValues[i][j]= currentChamp;
                document.getElementById(id).src = currentChamp.icon;
            }
        },
        champDrop: function(e){
            if(this.innerDragEvent == false)this.selectedChamp = this.champDragged;
            console.log('Champ getting droped: ', this.selectedChamp);
            let i = e.target.id[4]-1;
            let j = e.target.id[11]-1;
            let target = document.getElementById(e.target.id);
            this.champCounter += 1; 
            if(!this.boardChamps.hasOwnProperty(this.selectedChamp.name)){
                console.log('CHamp not in board');
                this.boardChamps[this.selectedChamp.name] = {'ocurrences': 1}; 
            }else this.boardChamps[this.selectedChamp.name].ocurrences += 1;
            this.boardValues[i][j] = this.selectedChamp;
            this.selectedChamp.traits.forEach(trait=>{
                let lowCaseTrait = trait.toLowerCase();
                if(this.selectedChamp.traits.includes("Dragon") && this.selectedChamp.traitBuff == trait && !this.boardChamps.hasOwnProperty(this.selectedChamp.name)){
                    this.boardTraits[lowCaseTrait].value = this.boardTraits[lowCaseTrait].value + 3;
                }else if(this.boardChamps[this.selectedChamp.name].ocurrences<=1) this.boardTraits[lowCaseTrait].value = this.boardTraits[lowCaseTrait].value + 1;
                else this.boardTraits[lowCaseTrait].value += 0;
                let value = this.boardTraits[lowCaseTrait].value;
                let setArr = [];
                if(this.propsJSON.traitsArr.hasOwnProperty(lowCaseTrait)) setArr = this.propsJSON.traitsArr[lowCaseTrait].sets;
                else setArr = this.propsJSON.originsArr[lowCaseTrait].sets;
                let classIcon=document.getElementById(trait+'-img'); 
                for (let i = 0; i < setArr.length; i++) {
                    if(setArr[i].min!=undefined && value>=setArr[i].min && value<setArr[i+1].min ){
                        let borderURL = 'url(./src/assets/icons/set7/traits/'+setArr[i].style+'.svg)';
                        classIcon.style.backgroundImage = borderURL;
                        console.log('Border color change ', borderURL);
                        break;
                    };
                };
            });
            if(target.hasChildNodes()) target.children[0].src = this.selectedChamp.icon;
            else target.src = this.selectedChamp.icon;
            this.selectedChamp = '';
            this.innerDragEvent = false;
            this.$emit('refresh');
            console.log('Board values on drop ...', this.boardValues);
            console.log('Champs on the board', this.boardChamps);
        },
        champLeave: function(){
            if(this.innerDragEvent == true){
                if(this.boardChamps[this.selectedChamp.name].ocurrences==0) delete this.boardChamps[this.selectedChamp.name];
                this.selectedChamp = '';
                this.champCounter -= 1;
                this.innerDragEvent = false;
                this.$emit('refresh');
                console.log('The champ has left the board', this.boardChamps);
            }
        }
    },
}
</script>

<template>
   <div id="board" v-on:mouseleave="champLeave">
        <div id="synergies">
            <div v-for="trait in boardTraits" v-show="trait.value > 0"  :key="trait">
                <div class="class-tag">
                    <img v-bind:src="'./src/assets/icons/set7/traits/'+trait.name+'.svg'" 
                        v-bind:id="trait.name + '-img'"
                        v-bind:class="'trait-logo'"
                        v-on:mouseover="traitInfo(trait.name)"
                        v-on:mouseleave="hideInfo"/>
                    <h2>
                        {{trait.name}}: {{trait.value}}
                    </h2>
                </div>
                <span class="synergies-tooltip" v-show="this.selectedTrait.name == trait.name">   
                    <h2>{{this.selectedTrait.description}}</h2>
                    <h2 v-for="buff in this.selectedTrait.sets" :key="buff.count">{{buff.min}}: {{buff.buff}}</h2>
                </span>
            </div>
        </div>
        <div id="positions">
            <div class="board-row" v-for="row in 4" :key="row" v-bind:id="'row'+row">
                <div class="champ-slot" v-for="column in 7" :key="'champ'+column"
                    v-bind:id="'row-'+row+'-slot-'+column"
                    @drop="champDrop"
                    @dragover.prevent
                    @dragenter.prevent>
                    <img v-bind:id="row+''+column" draggable src="" alt=""
                        @dragleave="innerDrag">
                </div>
            </div>           
       </div>
    </div>
</template>

<style>
#board{
    background-color: gray;
    display:flex;
    width: 875px;
}
#synergies{
    background-color: grey;
    width: 20%;
    border-style: solid;
    border-color: #000;
    font-size: 0.7rem;
}
.synergies-tooltip{
    background-color: aquamarine;
    color: black;
    font-size: 0.80rem;
    position:absolute;
    z-index: 2;
    width: 350%;
}
.trait-logo{
    height: 1.5rem;
}
.class-tag{
    display: flex;
}
.origin-tag{
    display: flex;
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