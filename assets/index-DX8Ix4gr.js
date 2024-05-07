function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmojiDrawer-DTy_P6K8.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as a}from"./index-D87o6PHI.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-DTy_P6K8.js"),__vite__mapDeps([0,1,2]));await e.addShape(i,new t,o)}const _=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{_ as i,i as v};
