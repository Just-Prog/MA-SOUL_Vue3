function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-D32iI69G.js","assets/index-D3XVxySt.js","assets/index-BYfdSpWo.css","assets/ValueWithRandom-OZ2o9t8R.js","assets/AnimationOptions-DCAvre4q.js","assets/OptionsColor-bqul7JjU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{l as i}from"./index-D3XVxySt.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-D32iI69G.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
