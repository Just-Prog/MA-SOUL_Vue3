<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
// import NavBar from './components/NavBar.vue'
const router = useRouter().options.routes
console.log(router)
const backMain = ()=>{
  window.location = '/'
}
</script>

<template>
  <el-container>
    <el-header>
      <el-menu id="nav" mode="horizontal" >
        <div id="nav_logo" @click="backMain">
          <img src='@/assets/logo_nav.png' height="65%"/>
        </div>
        <template v-for="(item) in router" :key="item.meta.id">
          <el-menu-item :index="item.meta.id">
            <router-link :to="item.path">
              {{item.meta.title}}
            </router-link>
          </el-menu-item>
        </template>
      </el-menu>
    </el-header>
    <el-main>
      <RouterView/>
    </el-main>
  </el-container>
</template>

<style scoped>
  #nav_logo {
      display: flex;
      align-items: center;
      justify-content: center;
  }
  #nav {
      padding: 0 1em;
  }
  #nav #nav_logo {
      padding-right: 1em;
  }
  .el-menu-item a {
      text-decoration: none;
      font-size: medium;
  }
</style>
