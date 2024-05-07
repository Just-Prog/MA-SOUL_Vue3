function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-BAevRG4k.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css","assets/AnimatableColor-DG97DF1-.js","assets/AnimationOptions-kj64daWi.js","assets/OptionsColor-jU6R4aYe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as e}from"./index-D87o6PHI.js";import{E as s}from"./EmitterShapeBase-4KcS34Iy.js";async function _(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-BKFAh34R.js"),[]);a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,p)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,p)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-BAevRG4k.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),m=new o(a);await a.addPlugin(m,i)}export{s as EmitterShapeBase,_ as loadEmittersPlugin};
