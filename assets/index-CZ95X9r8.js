const __vite__fileDeps=["assets/EmittersPlugin-lHLgov8f.js","assets/index-PU1-4Rr9.js","assets/index-BRt-OrU_.css","assets/AnimatableColor-BkLPlNTb.js","assets/AnimationOptions-cdkio__j.js","assets/OptionsColor-Dzb08c51.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{q as e}from"./index-PU1-4Rr9.js";import{E as s}from"./EmitterShapeBase-4KcS34Iy.js";async function _(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-BKFAh34R.js"),[]);a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-lHLgov8f.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,_ as loadEmittersPlugin};