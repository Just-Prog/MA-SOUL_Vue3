function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-Ck-kRmPi.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as t}from"./index-D3XVxySt.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-Ck-kRmPi.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
