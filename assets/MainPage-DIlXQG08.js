import{_ as M,o as x,a as P,r as s,b as a,c as l,d as o,w as e,F as r,e as d,f as c,g as y,h as k,t as u,i as _,j as i}from"./index-DN2HJarh.js";const v={id:"MainPage"},B={class:"card-header-title"},N=["src"],V={class:"card-header-title"},b=["src"],C={__name:"MainPage",setup(I){const p={errno:0,data:{left:[{code:"1-1",title:"测试卡片信息1",category:"plain",content:"测试测试测试测试测试"},{code:"1-2",title:"测试卡片信息2",category:"plain",content:"MA-SOUL for the future of OI"}],right:[{code:"2",title:"",category:"carousel",content:["/carousel/1.jpg","/carousel/2.png"]}]}};return x(()=>{console.log("HomePage loading")}),P(()=>{console.log("HomePage Loaded")}),(L,S)=>{const g=s("el-card"),n=s("el-col"),h=s("el-carousel-item"),m=s("el-carousel"),w=s("el-row");return a(),l("div",v,[o(w,null,{default:e(()=>[o(n,{span:15,id:"cards_l"},{default:e(()=>[(a(!0),l(r,null,d(p.data.left,t=>(a(),l(r,null,[t.category==="plain"?(a(),c(n,{key:0},{default:e(()=>[o(g,{shadow:"hover"},y({default:e(()=>[k(" "+u(t.content),1)]),_:2},[t.title?{name:"header",fn:e(()=>[_("span",B,u(t.title),1)]),key:"0"}:void 0]),1024)]),_:2},1024)):i("",!0),t.category==="carousel"?(a(),c(n,{key:1},{default:e(()=>[o(m,null,{default:e(()=>[(a(!0),l(r,null,d(t.content,f=>(a(),c(h,null,{default:e(()=>[_("img",{src:f},null,8,N)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)):i("",!0)],64))),256))]),_:1}),o(n,{span:1}),o(n,{span:8,id:"cards_r"},{default:e(()=>[(a(!0),l(r,null,d(p.data.right,t=>(a(),l(r,null,[t.category==="plain"?(a(),c(n,{key:0},{default:e(()=>[o(g,{shadow:"hover"},y({default:e(()=>[k(" "+u(t.content),1)]),_:2},[t.title?{name:"header",fn:e(()=>[_("span",V,u(t.title),1)]),key:"0"}:void 0]),1024)]),_:2},1024)):i("",!0),t.category==="carousel"?(a(),c(n,{key:1},{default:e(()=>[o(m,{id:"card_carousel",height:"228px"},{default:e(()=>[(a(!0),l(r,null,d(t.content,f=>(a(),c(h,{style:{"align-content":"center"}},{default:e(()=>[_("img",{src:f,width:"100%"},null,8,b)]),_:2},1024))),256))]),_:2},1024)]),_:2},1024)):i("",!0)],64))),256))]),_:1})]),_:1})])}}},F=M(C,[["__scopeId","data-v-71701bb4"]]);export{F as default};
