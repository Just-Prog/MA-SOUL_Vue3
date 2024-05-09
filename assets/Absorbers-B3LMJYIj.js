const __vite__fileDeps=["assets/AbsorberInstance-B1ifA7nH.js","assets/AbsorbersPlugin-tE-4CbLh.js","assets/index-DDZTvzbS.js","assets/index-Bm6inDSp.css","assets/ValueWithRandom-uvP_mK6R.js","assets/AnimationOptions-DQG272l2.js","assets/OptionsColor-gBhrMXho.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ab as n,l as c,m as i,q as d}from"./index-DDZTvzbS.js";const a=0;class y{constructor(r){this.container=r,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],r.getAbsorber=s=>s===void 0||n(s)?this.array[s??a]:this.array.find(t=>t.name===s),r.addAbsorber=async(s,t)=>this.addAbsorber(s,t)}async addAbsorber(r,s){const{AbsorberInstance:t}=await c(()=>import("./AbsorberInstance-B1ifA7nH.js"),__vite__mapDeps([0,1,2,3,4,5,6])),e=new t(this,this.container,r,s);return this.array.push(e),e}draw(r){for(const s of this.array)s.draw(r)}handleClickMode(r){const s=this.absorbers,t=this.interactivityAbsorbers;if(r==="absorber"){const e=i(t),o=e??i(s),b=this.container.interactivity.mouse.clickPosition;this.addAbsorber(o,b)}}async init(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers;const r=d(this.absorbers,async s=>{await this.addAbsorber(s)});r instanceof Array?await Promise.all(r):await r}particleUpdate(r){for(const s of this.array)if(s.attract(r),r.destroyed)break}removeAbsorber(r){const s=this.array.indexOf(r);s>=a&&this.array.splice(s,1)}resize(){for(const r of this.array)r.resize()}stop(){this.array=[]}}export{y as Absorbers};
