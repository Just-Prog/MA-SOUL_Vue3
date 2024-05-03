function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-DVCtn6IV.js","assets/index-DN2HJarh.js","assets/index-BYfdSpWo.css","assets/ValueWithRandom-DO9l0e9E.js","assets/AnimationOptions-BTxM0AIM.js","assets/OptionsColor-BV7bRKp1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as i}from"./index-DN2HJarh.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-DVCtn6IV.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
