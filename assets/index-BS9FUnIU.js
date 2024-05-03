function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-C-Jlw7c2.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as i}from"./index-D3XVxySt.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-C-Jlw7c2.js"),__vite__mapDeps([0,1,2]));return new e(r)},a)}export{p as loadOpacityUpdater};
