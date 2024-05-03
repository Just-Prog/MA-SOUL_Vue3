function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-D_UApBtZ.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as r}from"./index-D3XVxySt.js";async function i(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-D_UApBtZ.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{i as loadBaseMover};
