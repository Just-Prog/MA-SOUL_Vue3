<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
// import NavBar from './components/NavBar.vue'
const router = useRouter().options.routes
console.log(router)
const backMain = ()=>{
  window.location = '/'
}
const isLogin = 0;
</script>

<template>
  <div id="MainLayout">
    <el-container>
      <el-header>
        <el-menu id="nav" mode="horizontal" :ellipsis="false">
          <div class="nav_item ver_center" @click="backMain">
            <img src='@/assets/logo_nav.png' height="40px"/>
          </div>
          <div style="flex-grow: 1 ;"/>
          <template v-for="(item) in router" :key="item.meta.id">
            <el-menu-item :index="item.meta.id">
              <router-link :to="item.path">
                {{item.meta.title}}
              </router-link>
            </el-menu-item>
          </template>
          <div class="nav_item ver_center">
            <template v-if="!isLogin">
              <el-button type="primary" bg>
                登录
              </el-button>
              <el-button type="danger" bg>
                注册
              </el-button>
            </template>
            <template v-else>
              <el-avatar :fit="fill" src="/avatar/default.jpg"/>
            </template>
          </div>
        </el-menu>
      </el-header>
      <el-container id="MainLayout_content">
        <el-aside width="180px" id="sidebar">
          <el-scrollbar>
            <el-menu>
              <el-menu-item index="1-1">
                <el-icon><House /></el-icon>
                课程主页
              </el-menu-item>
              <el-menu-item index="1-2">
                <el-icon><Notebook /></el-icon>
                我的课程
              </el-menu-item>
              <el-menu-item index="1-3">
                <el-icon><QuestionFilled /></el-icon>
                课程帮助
              </el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main id="main">
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
  .ver_center {
      display: flex;
      align-items: center;
  }
  #nav {
      padding: 0 0vh;
  }
  .el-header{
    padding:0 0 ;
  }

  .el-menu-item a {
      text-decoration: none;
      font-size: medium;
  }
  #MainLayout{
    min-height: 100vh;
  }
  #sidebar{
    float:left;
  }
  #main{
    float:right;
  }
  .nav_item{
    padding:0 20px;
  }
</style>
