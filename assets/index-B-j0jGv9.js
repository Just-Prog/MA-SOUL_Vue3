function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-NCpVcPIy.js","assets/index-DN2HJarh.js","assets/index-BYfdSpWo.css","assets/ValueWithRandom-DO9l0e9E.js","assets/AnimationOptions-BTxM0AIM.js","assets/OptionsColor-BV7bRKp1.js","assets/OptionsUtils-CrCZGWAl.js","assets/AnimatableColor-CsTZjZpp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o}from"./index-DN2HJarh.js";async function i(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-NCpVcPIy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{i as loadDestroyUpdater};
