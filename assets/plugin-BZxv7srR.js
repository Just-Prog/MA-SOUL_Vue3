function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-BeK8H9d7.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as o}from"./index-D87o6PHI.js";async function u(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-BeK8H9d7.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{u as loadLinksPlugin};
