function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DuxETn2Q.js","assets/index-DN2HJarh.js","assets/index-BYfdSpWo.css","assets/OptionsColor-BV7bRKp1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o}from"./index-DN2HJarh.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DuxETn2Q.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
