function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersCircleShapeGenerator-BldymFAM.js","assets/EmitterShapeBase-4KcS34Iy.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o}from"./index-D3XVxySt.js";async function _(t,a=!0){var r;const e=t,{EmittersCircleShapeGenerator:i}=await o(()=>import("./EmittersCircleShapeGenerator-BldymFAM.js"),__vite__mapDeps([0,1,2,3]));(r=e.addEmitterShapeGenerator)==null||r.call(e,"circle",new i),await e.refresh(a)}export{_ as loadEmittersShapeCircle};
