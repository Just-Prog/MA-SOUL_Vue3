const __vite__fileDeps=["assets/LifeUpdater-Cl9H8IX2.js","assets/ValueWithRandom-DFquKkzL.js","assets/AnimationOptions-cdkio__j.js","assets/index-PU1-4Rr9.js","assets/index-BRt-OrU_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{q as i}from"./index-PU1-4Rr9.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Cl9H8IX2.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
