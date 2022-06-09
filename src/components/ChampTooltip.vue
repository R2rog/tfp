<script>
export default {
    props: ["champion","champTraits", "champOrigins"],
    data() {
        return {
            msg: "Hi from the tooltip",
        };
    },
};
</script>

<template>
    <span class="champ-tooltip">
        <h2>Champion: {{this.champion.name}}</h2>
        <h2>Cost: {{this.champion.cost}}</h2>
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