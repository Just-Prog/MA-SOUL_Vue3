import{a7 as i,Y as e,ab as s,$ as y,ae as p}from"./index-DN2HJarh.js";class d{constructor(o){this.container=o}init(o){const n=o.options.opacity,a=1;o.opacity=i(n,a);const t=n.animation;t.enable&&(o.opacity.velocity=e(t.speed)/s*this.container.retina.reduceFactor,t.sync||(o.opacity.velocity*=y()))}isEnabled(o){return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((o.opacity.maxLoops??0)<=0||(o.opacity.maxLoops??0)>0&&(o.opacity.loops??0)<(o.opacity.maxLoops??0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}update(o,n){!this.isEnabled(o)||!o.opacity||p(o,o.opacity,!0,o.options.opacity.animation.destroy,n)}}export{d as OpacityUpdater};
