function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-CdP1uBSN.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css","assets/ValueWithRandom-OZ2o9t8R.js","assets/AnimationOptions-DCAvre4q.js","assets/OptionsColor-bqul7JjU.js","assets/OptionsUtils-D_96dP76.js","assets/AnimatableColor-CozKOQl-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o}from"./index-D3XVxySt.js";async function i(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-CdP1uBSN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{i as loadDestroyUpdater};
