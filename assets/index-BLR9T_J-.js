const __vite__fileDeps=["assets/ColorUpdater-2kc3GUxG.js","assets/index-B-lLDWQU.js","assets/index-Bm6inDSp.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{m as e}from"./index-B-lLDWQU.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-2kc3GUxG.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
