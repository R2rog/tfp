import{o as c,c as m,r as p,a,w as l,v as g,b as r,t as n,F as d}from"./index.73715daa.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const u={props:["elArr","champArr"],emits:["sendChampChild"],data(){return{champ:{},champOrigins:"",champTraits:""}},methods:{champInfo:function(t){for(let s=0;s<this.champArr.length;s++)if(this.champArr[s].name==t){this.champ=this.champArr[s];break}console.log("Champ recieved: ",t),console.log("This champ: ",this.champ.name),this.champ.origins.length==1?this.champOrigins=this.champ.origins[0]:this.champ.origins.forEach(s=>{this.champOrigins+=s+" "}),this.champ.classes.length==1?this.champTraits=this.champ.classes[0]:this.champ.classes.forEach(s=>{this.champTraits+=s+" "})},hideInfo:function(){this.champ={},this.champOrigins="",this.champTraits=""},startDrag:function(t){console.log("Champ: ",t);let s={};for(let h=0;h<this.champArr.length;h++)if(console.log("Champion equals champ",this.champArr[h].name==t),this.champArr[h].name==t){s=this.champArr[h];break}console.log("Champ getting dragged",s),this.localChampDragged=s,this.$emit("sendChampChild",s)}}},f={href:"#"},C=["src","onMouseover","onDragstart"],v={class:"champ-tooltip"},T=a("span",null,"Champion:",-1),A=a("span",null," Cost:",-1),D=a("span",null,"Origins:",-1),O=a("span",null,"Traits:",-1);function k(t,s,h,x,I,e){return c(!0),m(d,null,p(h.elArr,i=>(c(),m("div",{key:i,class:"champ-row"},[a("a",f,[a("img",{class:"champ-img",src:"./set7/champions/TFT7_"+i+".png",alt:"{{element}} image",onMouseover:o=>e.champInfo(i),onMouseleave:s[0]||(s[0]=(...o)=>e.hideInfo&&e.hideInfo(...o)),draggable:"",onDragstart:o=>e.startDrag(i)},null,40,C),l(a("span",v,[a("h2",null,[T,r(" "+n(this.champ.name),1)]),a("h2",null,[A,r(" "+n(this.champ.cost),1)]),a("h2",null,[D,r(" "+n(this.champOrigins),1)]),a("h2",null,[O,r(" "+n(this.champTraits),1)])],512),[[g,this.champ.name==i]])])]))),128)}var y=_(u,[["render",k]]);export{y as C};