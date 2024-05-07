function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cl23t98m.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css","assets/index-Cz7gPxfx.js","assets/index-Mqf_8FrJ.js","assets/index-B5j7REdc.js","assets/index-CdPVD0Hb.js","assets/index-ljAfR0p8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as t}from"./index-D87o6PHI.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cl23t98m.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Cz7gPxfx.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Mqf_8FrJ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B5j7REdc.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CdPVD0Hb.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-ljAfR0p8.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
