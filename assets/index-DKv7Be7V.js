function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-cFJqLXu9.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css","assets/ValueWithRandom-DqjOHGPN.js","assets/AnimationOptions-kj64daWi.js","assets/OptionsColor-jU6R4aYe.js","assets/OptionsUtils-XVdagH5a.js","assets/AnimatableColor-DG97DF1-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as o}from"./index-D87o6PHI.js";async function i(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-cFJqLXu9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{i as loadDestroyUpdater};
