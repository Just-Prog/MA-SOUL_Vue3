function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-Dk70Omhj.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css","assets/OptionsColor-bqul7JjU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o}from"./index-D3XVxySt.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-Dk70Omhj.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
