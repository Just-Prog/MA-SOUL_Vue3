function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DKin45YP.js","assets/index-DN2HJarh.js","assets/index-BYfdSpWo.css","assets/index-C0MT-jay.js","assets/index-BQYsRmDx.js","assets/index-BpQswuVX.js","assets/index-BJnRMPjE.js","assets/index-USEWfAec.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as t}from"./index-DN2HJarh.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DKin45YP.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C0MT-jay.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BQYsRmDx.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BpQswuVX.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:l}=await t(()=>import("./index-BJnRMPjE.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:e}=await t(()=>import("./index-USEWfAec.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await l(a,!1),await e(a,!1),await a.refresh(_)}export{s as loadBasic};
