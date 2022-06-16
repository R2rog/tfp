<script>
export default{
    props:["champions","champDragged"],
    data(){
        return{
            selectedChamp : {},
            boardValues: [
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}],
                [{},{},{},{},{},{},{}]
            ],
            boardClasses:{
                Arcanist: {
                    name: 'Arcanist',
                    value: 0
                },
                Assassin:{
                    name: 'Assasin',
                    value: 0
                },
                Bodyguard: {
                    name: 'Bodyguard',
                    value: 0
                },
                Bruiser: {
                    name: 'Bruiser',
                    value: 0
                },
                Challenger: {
                    name: 'Challenger',
                    value: 0
                },
                Colossus: {
                    name: 'Colossus',
                    value: 0
                },
                Enchanter: {
                    name: 'Enchanter',
                    value: 0
                },
                Innovator: {
                    name: 'Innovator',
                    value: 0
                },
                Scholar: {
                    name: 'Scholar',
                    value: 0
                },
                Sniper: {
                    name: 'Sniper',
                    value: 0
                },
                Striker: {
                    name: 'Striker',
                    value: 0
                },
                Transformer: {
                    name: 'Transformer',
                    value: 0
                },
                Twinshot:{
                    name: 'Twinshot',
                    value: 0
                }
            },
            boardOrigins:{
                Chemtech: {
                    name: 'Chemtech',
                    value: 0
                },
                clockwork: {
                    name: 'Clockwork',
                    value: 0
                },
                Debonair: {
                    name: 'Debonair',
                    value: 0
                },
                Enforcerer: {
                    name: 'Enforcerer',
                    value: 0
                },
                Glutton: {
                    name: 'Glutton',
                    value: 0
                },
                Hextech: {
                    name: 'Hextech',
                    value: 0
                },
                Mastermind: {
                    name: 'Mastermind',
                    value: 0
                },
                Mercenary: {
                    name: 'Mercenary',
                    value: 0
                },
                Mutant: {
                    name: 'Mutant',
                    value:0
                },
                Rival: {
                    name: 'Rival',
                    value: 0
                },
                Scrap: {
                    name: 'Scrap',
                    value: 0
                },
                Socialite: {
                    name: 'Socialite',
                    value: 0
                },
                Syndicate: {
                    name: 'Syndicate',
                    value: 0
                },
                Yordle: {
                    name: 'Yordle',
                    value: 0
                },
                YordleLord: {
                    name: 'Yordle Lord',
                    value: 0
                }
            }
        }
    },
    methods:{
        innerDrag: function(e){
            e.target.src = '';
            let i = e.target.id[0]-1;
            let j = e.target.id[1]-1;
            this.selectedChamp = this.boardValues[i][j];
            this.selectedChamp.classes.forEach(element => {
                this.boardClasses[element].value = this.boardClasses[element].value - 1;
            });
            this.selectedChamp.origins.forEach(origin => {
                this.boardOrigins[origin].value = this.boardOrigins[origin].value - 1;
            });
            this.boardValues[i][j]= {};
        },
        champDrop: function(e){
            let i = e.target.id[4]-1;
            let j = e.target.id[11]-1;
            let target = document.getElementById(e.target.id);
            this.champDragged.classes.forEach(element => {
                this.boardClasses[element].value = this.boardClasses[element].value + 1;
            });
            this.champDragged.origins.forEach(origin => {
                this.boardOrigins[origin].value = this.boardOrigins[origin].value + 1;
            });
            if(target.hasChildNodes()) target.children[0].src = this.champDragged.icon;
            else target.src = this.champDragged.icon;
            this.champCounter += 1; 
            this.boardValues[i][j] = this.champDragged;
        }
    },
}
</script>

<template>
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
        <div id="synergies">
            <div v-for="element in boardClasses" v-show="element.value > 0"  :key="element">
                <h1>{{element.name}}: {{element.value}}</h1>
            </div>
            <div v-for="origin in boardOrigins" v-show="origin.value > 0" :key="origin">
                <h1>{{origin.name}}: {{origin.value}}</h1>
            </div>
        </div>
    </div>
</template>

<style>
#board{
    background-color: gray;
    height:100%;
    width:100%;
}
#synergies{
    background-color: grey;
    width: 25%;
    border-style: solid;
    border-color: #000
}
.board-row{
    background-color: cornflowerblue;
    height: 4rem;
    width:100%;
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