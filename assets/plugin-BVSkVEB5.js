function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-D6x48wJ-.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as o}from"./index-D3XVxySt.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-D6x48wJ-.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
