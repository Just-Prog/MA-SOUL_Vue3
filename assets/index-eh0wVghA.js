const __vite__fileDeps=["assets/Attractor-BZ1AZ4G-.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-PU1-4Rr9.js","assets/index-BRt-OrU_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{q as c}from"./index-PU1-4Rr9.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-BZ1AZ4G-.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
