function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-D2qjWbj0.js","assets/index-D87o6PHI.js","assets/index-YFyIaVUZ.css","assets/ValueWithRandom-DqjOHGPN.js","assets/AnimationOptions-kj64daWi.js","assets/OptionsColor-jU6R4aYe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as i}from"./index-D87o6PHI.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-D2qjWbj0.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
