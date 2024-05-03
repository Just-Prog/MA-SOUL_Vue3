function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TwinkleUpdater-DI-QxPXz.js","assets/OptionsColor-bqul7JjU.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as r}from"./index-D3XVxySt.js";async function n(t,a=!0){await t.addParticleUpdater("twinkle",async()=>{const{TwinkleUpdater:e}=await r(()=>import("./TwinkleUpdater-DI-QxPXz.js"),__vite__mapDeps([0,1,2,3]));return new e},a)}export{n as loadTwinkleUpdater};
