const __vite__fileDeps=["assets/WobbleUpdater-CKgG6kI_.js","assets/index-PU1-4Rr9.js","assets/index-BRt-OrU_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{q as o}from"./index-PU1-4Rr9.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-CKgG6kI_.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
