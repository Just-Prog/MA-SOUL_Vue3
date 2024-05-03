function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bubbler-Dm96GSv5.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/Ranges-CcOc1Sjq.js","assets/OptionsColor-bqul7JjU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{af as t,q as o,l}from"./index-D3XVxySt.js";import{O as u}from"./OptionsColor-bqul7JjU.js";class n{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(e){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const s=t(this.color)?void 0:this.color;this.color=o(e.color,i=>u.create(s,i))}e.size!==void 0&&(this.size=e.size)}}}class c extends n{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class h extends n{load(e){super.load(e),e&&(this.divs=o(e.divs,s=>{const i=new c;return i.load(s),i}))}}async function p(r,e=!0){await r.addInteractor("externalBubble",async s=>{const{Bubbler:i}=await l(()=>import("./Bubbler-Dm96GSv5.js"),__vite__mapDeps([0,1,2,3,4,5]));return new i(s)},e)}export{h as Bubble,n as BubbleBase,c as BubbleDiv,p as loadExternalBubbleInteraction};
