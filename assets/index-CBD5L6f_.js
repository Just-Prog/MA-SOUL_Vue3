function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersCircleShapeGenerator-CubnR4br.js","assets/EmitterShapeBase-4KcS34Iy.js","assets/index-DN2HJarh.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o}from"./index-DN2HJarh.js";async function _(t,a=!0){var r;const e=t,{EmittersCircleShapeGenerator:i}=await o(()=>import("./EmittersCircleShapeGenerator-CubnR4br.js"),__vite__mapDeps([0,1,2,3]));(r=e.addEmitterShapeGenerator)==null||r.call(e,"circle",new i),await e.refresh(a)}export{_ as loadEmittersShapeCircle};
