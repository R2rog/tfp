import{_ as l,o as n,c as o,F as i,r,a as s,t,n as _}from"./index.8551a19d.js";const h={data(){return{champJSON:{}}},async beforeMount(){const e=await fetch("./src/assets/data/set7/champions.json");console.log("Champ arr: ",e),this.champJSON=await e.json(),console.log("Champion JSON file: ",this.champJSON)}},p={id:"champions"},d={class:"champ-name"},m={class:"champ-logo"},u=["src"],f={class:"champ-stats"},v=s("span",null,"Cost:",-1),g=s("span",null,"Origins:",-1),C=s("span",null,"Classes:",-1);function N(e,O,S,y,c,J){return n(),o("div",p,[(n(!0),o(i,null,r(c.champJSON,a=>(n(),o("div",{key:a,class:"champ-info"},[s("div",d,[s("h1",null,t(a.name),1)]),s("div",m,[s("img",{class:_("cost-"+a.cost),src:a.icon,alt:"{{champion.name}} icon"},null,10,u)]),s("div",f,[v,s("h2",null,t(a.cost),1),g,s("h2",null,t(a.traits),1),C,s("h2",null,t(a.classes),1)])]))),128))])}var x=l(h,[["render",N]]);export{x as default};
