import './assets/base-font.css'
import './assets/basic.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import "element-plus/theme-chalk/display.css"

import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(Particles, {
  fullScreen: {
    enable: false,
  },
  init: async (engine) => {
    await loadFull(engine);
  },
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}


app.mount("#app")
