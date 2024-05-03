function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BVa9XMzy.js","assets/ValueWithRandom-OZ2o9t8R.js","assets/AnimationOptions-DCAvre4q.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as i}from"./index-D3XVxySt.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BVa9XMzy.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
