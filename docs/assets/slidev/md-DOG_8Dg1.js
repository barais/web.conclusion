import{p as b,A as h,B as g}from"../modules/unplugin-icons-DSXiRyME.js";import{d as x,z as $,o as d,b as k,e as t,f as w,h as y,c as C,k as B,B as r,aa as P,l as c,q as S,s as z}from"../modules/vue-vX1Bmlna.js";import{u,f as E}from"./context-DPSDwCLm.js";import"../index-BliwVpNg.js";import"../modules/shiki-DG7BmUw9.js";function p(e){return e.startsWith("/")?"/web.conclusion/"+e.slice(1):e}function N(e,o=!1){const s=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),n={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${p(e)})`:`url("${p(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return n.background||delete n.background,n}const O={class:"my-auto w-full"},T=x({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const o=e,s=$(()=>N(o.background,!0));return(n,i)=>(d(),k("div",{class:"slidev-layout cover text-center",style:y(s.value)},[t("div",O,[w(n.$slots,"default")])],4))}}),V=t("h1",null,"Conclusion",-1),A=t("p",null,"The browser: a wonderful application container platform",-1),G={class:"pt-12"},H={class:"abs-br m-6 flex gap-2"},I={href:"https://github.com/barais/web.conclusion",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},R={__name:"slides.md__slidev_1",setup(e){const{$slidev:o,$nav:s,$clicksContext:n,$clicks:i,$page:q,$renderContext:U,$frontmatter:_}=u();return n.setup(),(W,a)=>{const m=b,f=h,v=g;return d(),C(T,S(z(r(E)(r(_),0))),{default:B(()=>[V,A,t("div",G,[t("span",{onClick:a[0]||(a[0]=(...l)=>r(o).nav.next&&r(o).nav.next(...l)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[P(" Press Space for next page "),c(m,{class:"inline"})])]),t("div",H,[t("button",{onClick:a[1]||(a[1]=l=>r(o).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[c(f)]),t("a",I,[c(v)])])]),_:1},16)}}},L=R;export{L as default};
