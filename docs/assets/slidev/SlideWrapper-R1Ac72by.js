import{d as p,z as r,ai as t,t as l,ac as f,o as c,b as v,l as d,B as s,c as C,aw as _,i as x,h as S}from"../modules/vue-vX1Bmlna.js";import{a4 as b,a5 as j,a6 as y,a7 as z,a8 as B,z as g,a9 as h,B as k,_ as w}from"../index-BliwVpNg.js";const W={render:()=>[]},D={render:()=>[]},G={render:()=>[]},O={render:()=>[]},R=["data-slidev-no"],$=p({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(i){const e=i,o=r(()=>{var a,n;return((n=(a=e.route.meta)==null?void 0:a.slide)==null?void 0:n.frontmatter.zoom)??1});t(b,e.route),t(j,e.route.meta.slide.frontmatter),t(y,l(e.route.no)),t(z,l(e.renderContext)),t(B,f(e,"clicksContext")),t(h,o);const u=r(()=>o.value===1?void 0:{width:`${100/o.value}%`,height:`${100/o.value}%`,transformOrigin:"top left",transform:`scale(${o.value})`}),m=r(()=>({...u.value,"user-select":g.selectable?void 0:"none"}));return(a,n)=>(c(),v("div",{"data-slidev-no":e.route.no,class:x(s(k)(i.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:S(m.value)},[d(s(O)),(c(),C(_(e.route.component))),d(s(G))],14,R))}}),E=w($,[["__scopeId","data-v-913b6ee2"]]);export{D as G,E as S,W as a};
