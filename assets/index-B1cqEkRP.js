function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-EnHlSOTm.js","assets/PolygonDrawerBase-DASS8JW_.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css","assets/TriangleDrawer-C7XaIW-_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as n}from"./index-D3XVxySt.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-EnHlSOTm.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-C7XaIW-_.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
