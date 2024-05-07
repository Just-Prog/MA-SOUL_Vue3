function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BnUteOwO.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as e}from"./index-D87o6PHI.js";async function i(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BnUteOwO.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{i as loadStarShape};
