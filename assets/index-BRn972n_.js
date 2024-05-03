function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-ClTzieI2.js","assets/index-DN2HJarh.js","assets/index-BYfdSpWo.css","assets/AnimatableColor-CsTZjZpp.js","assets/AnimationOptions-BTxM0AIM.js","assets/OptionsColor-BV7bRKp1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as e}from"./index-DN2HJarh.js";import{E as s}from"./EmitterShapeBase-4KcS34Iy.js";async function _(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-BKFAh34R.js"),[]);a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-ClTzieI2.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,_ as loadEmittersPlugin};
