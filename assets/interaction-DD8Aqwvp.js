function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-g78ggUN_.js","assets/Ranges-DpMCeg57.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css","assets/index-k0fUwBOj.js","assets/OptionsColor-jU6R4aYe.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as i}from"./index-D87o6PHI.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-g78ggUN_.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
