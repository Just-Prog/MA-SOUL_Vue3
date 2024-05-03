function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-CX35lbuD.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css","assets/ValueWithRandom-OZ2o9t8R.js","assets/AnimationOptions-DCAvre4q.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as i}from"./index-D3XVxySt.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-CX35lbuD.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
