import{_ as d,C as u,b as m,o as a,c as e,F as l,r as h,a as s,t as o,d as f}from"./index.8551a19d.js";const v={components:{ChampTooltip:u},data(){return{classesJSON:{},champJSON:{},fetchedChampArr:[],champName:""}},async mounted(){const r=await fetch("./src/assets/data/set7/classes.json"),c=await fetch("./src/assets/data/set7/champions.json");this.classesJSON=await r.json(),this.fetchedChampArr=await c.json()}},C={id:"classes"},A=s("h1",null,"Traits in set 6.5",-1),N={class:"trait-header"},g=["src"],w={class:"trait-champs"},y={class:"trait-buffs"},S=s("h2",null,"Buffs",-1),b={class:"min"};function j(r,c,k,x,n,B){const _=m("ChampTooltip");return a(),e("div",C,[A,(a(!0),e(l,null,h(n.classesJSON,t=>(a(),e("div",{key:t,class:"trait-info"},[s("div",N,[s("img",{src:"./src/assets/icons/set7/traits/"+t.name+".svg",alt:"class logo"},null,8,g),s("h1",null,o(t.name),1)]),s("div",w,[f(_,{elArr:t.champions,champArr:n.fetchedChampArr},null,8,["elArr","champArr"])]),s("p",null,o(t.description),1),s("p",null,o(t.bonus),1),s("div",y,[S,(a(!0),e(l,null,h(t.sets,(i,p)=>(a(),e("tr",{key:p},[s("th",b,o(i.min),1),s("th",null,o(i.buff),1)]))),128))])]))),128))])}var O=d(v,[["render",j]]);export{O as default};