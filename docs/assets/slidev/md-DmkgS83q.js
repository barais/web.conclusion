import{p as b,A as g,B as x}from"../modules/unplugin-icons-DbckqujE.js";import{d as h,z as $,o as u,b as k,e as o,f as w,h as y,c as C,k as B,B as a,aa as P,l,q as S,s as z}from"../modules/vue-DyqhbNo7.js";import{u as d,f as E}from"./context-DdqZTX5r.js";import"../index-DPw5YPoN.js";import"../modules/shiki-BzDbeI4e.js";function p(t){return t.startsWith("/")?"/web.conclusion/"+t.slice(1):t}function N(t,n=!1){const r=t&&["#","rgb","hsl"].some(i=>t.indexOf(i)===0),s={background:r?t:void 0,color:t&&!r?"white":void 0,backgroundImage:r?void 0:t?n?`linear-gradient(#0005, #0008), url(${p(t)})`:`url("${p(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const O={class:"my-auto w-full"},T=h({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(t){d();const n=t,r=$(()=>N(n.background,!0));return(s,i)=>(u(),k("div",{class:"slidev-layout cover text-center",style:y(r.value)},[o("div",O,[w(s.$slots,"default")])],4))}}),V={class:"pt-12"},A={class:"abs-br m-6 flex gap-2"},G={href:"https://github.com/barais/web.conclusion",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},H={__name:"slides.md__slidev_1",setup(t){const{$slidev:n,$nav:r,$clicksContext:s,$clicks:i,$page:I,$renderContext:R,$frontmatter:_}=d();return s.setup(),(q,e)=>{const m=b,f=g,v=x;return u(),C(T,S(z(a(E)(a(_),0))),{default:B(()=>[e[3]||(e[3]=o("h1",null,"Conclusion",-1)),e[4]||(e[4]=o("p",null,"The browser: a wonderful application container platform",-1)),o("div",V,[o("span",{onClick:e[0]||(e[0]=(...c)=>a(n).nav.next&&a(n).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[e[2]||(e[2]=P(" Press Space for next page ")),l(m,{class:"inline"})])]),o("div",A,[o("button",{onClick:e[1]||(e[1]=c=>a(n).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[l(f)]),o("a",G,[l(v)])])]),_:1},16)}}},J=H;export{J as default};
