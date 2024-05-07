function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-QCOX0p9J.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css","assets/OptionsColor-jU6R4aYe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as o}from"./index-D87o6PHI.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-QCOX0p9J.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
