function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-m4gJQTox.js","assets/Ranges-CcOc1Sjq.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css","assets/index-BuoWOp8L.js","assets/OptionsColor-bqul7JjU.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as i}from"./index-D3XVxySt.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-m4gJQTox.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
