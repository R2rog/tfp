<script>
export default {
    props: ["champion", "champArr"],
    data(){
        return {
            champ: {},
            champOrigins: '',
            champTraits: '',
        };
    },
    watch: {
        champion(newChamp, oldChamp){
            console.log('New name', newChamp, 'Old champ', oldChamp);
            if(newChamp == ''){
                this.champ={};
                this.champOrigins = '';
                this.champTraits = '';
            }else{
                for (let i = 0; i < this.champArr.length; i++) {
                if(this.champArr[i].name == newChamp){
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
                if(this.champ.classes.length>1) this.champTraits = this.champ.classes[0];
                else{
                    this.champ.classes.forEach(trait => {
                        this.champTraits += trait + ' ';
                    });
                };
            };
        },
    },
};
</script>

<template>
    <span class="champ-tooltip">
        <h2>Champion: {{this.champ.name}}</h2>
        <h2>Cost: {{this.champ.cost}}</h2>
        <h2>Origins: {{this.champOrigins}}</h2>
        <h2>Traits: {{this.champTraits}}</h2>
    </span>
</template>

<style>
.champ-tooltip{
    background-color: #00bd7e;
    color: #111;
    position:absolute;
    z-index: 2;
    height: 110%;
    width: 250%;
}
</style>