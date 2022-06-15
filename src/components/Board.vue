<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        champDrop: function(e){
            console.log('Event recieved when champ droped',e)
        }
    }
}
</script>

<template>
    <div id="board">
        <div class="board-row" id="row1">
            <div class="champ-slot" id="slot-1"
                @dragenter="champDrag"
                @drop="champDrop">
            </div>
            <div class="champ-slot" id="slot-2"
                @dragenter="champDrag"
                @drop="champDrop">
            </div>
            <div class="champ-slot" id="slot-3"
                @dragenter="champDrag"
                @drop="champDrop">
            </div>
            <div class="champ-slot" id="slot-4"
                @dragenter="champDrag"
                @drop="champDrop">
            </div>
            <div class="champ-slot" id="slot-5"
                @dragenter="champDrag"
                @drop="champDrop">
            </div>
            <div class="champ-slot" id="slot-6"
                @dragenter="champDrag"
                @drop="champDrop">
            </div>
            <div class="champ-slot" id="slot-7"
                @dragenter="champDrag"
                @drop="champDrop">
            </div>
        </div>
        <div class="board-row" id="row2">
            <div class="champ-slot" id="slot-8">
            </div>
            <div class="champ-slot" id="slot-9">
            </div>
            <div class="champ-slot" id="slot-10">
            </div>
            <div class="champ-slot" id="slot-11">
            </div>
            <div class="champ-slot" id="slot-12">
            </div>
            <div class="champ-slot" id="slot-13">
            </div>
            <div class="champ-slot" id="slot-14">
            </div>
        </div>
        <div class="board-row" id="row3">
            <div class="champ-slot" id="slot-15">
            </div>
            <div class="champ-slot" id="slot-16">
            </div>
            <div class="champ-slot" id="slot-17">
            </div>
            <div class="champ-slot" id="slot-18">
            </div>
            <div class="champ-slot" id="slot-19">
            </div>
            <div class="champ-slot" id="slot-20">
            </div>
            <div class="champ-slot" id="slot-21">
            </div>
        </div>
        <div class="board-row" id="row4">
            <div class="champ-slot" id="slot-22">
            </div>
            <div class="champ-slot" id="slot-23">
            </div>
            <div class="champ-slot" id="slot-24">
            </div>
            <div class="champ-slot" id="slot-25">
            </div>
            <div class="champ-slot" id="slot-26">
            </div>
            <div class="champ-slot" id="slot-27">
            </div>
            <div class="champ-slot" id="slot-28">
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
    margin: 1rem 1rem 1rem 1rem;
}
</style>