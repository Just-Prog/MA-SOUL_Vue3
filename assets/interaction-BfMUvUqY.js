const __vite__fileDeps=["assets/Linker-DDYdN5YU.js","assets/Ranges-BZ2k1-62.js","assets/index-DDZTvzbS.js","assets/index-Bm6inDSp.css","assets/index-eJwBwSId.js","assets/OptionsColor-gBhrMXho.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{l as i}from"./index-DDZTvzbS.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DDYdN5YU.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
