function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-8mcLoZh5.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css","assets/ValueWithRandom-OZ2o9t8R.js","assets/AnimationOptions-DCAvre4q.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o}from"./index-D3XVxySt.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-8mcLoZh5.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
