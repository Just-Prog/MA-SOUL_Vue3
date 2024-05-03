function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-Bu1cY9ev.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as e}from"./index-D3XVxySt.js";async function i(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-Bu1cY9ev.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{i as loadStarShape};
