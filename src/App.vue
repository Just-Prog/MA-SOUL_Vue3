<script setup>
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
const routers = useRouter().options.routes
const route = useRoute()
const isLogin = 0
function back2Main(){
  window.location = '/'
}

</script>

<template>
  <div id="MainLayout">
    <el-container>
      <el-header>
        <el-menu id="nav" mode="horizontal" :ellipsis="false" :default-active=route.path>
          <div class="nav_item ver_center" @click='back2Main'>
            <img src='@/assets/logo_nav.png' height="40px"/>
          </div>
          <!-- <div style="flex-grow: 1 ;"/> -->
          <template v-for="(item) in routers" :key="item.meta.id">
            <el-menu-item :index="item.path">
              <router-link :to="item.path">
                {{ item.meta.title }}
              </router-link>
            </el-menu-item>
          </template>
          <div class="nav_item_r ver_center">
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
            <el-menu id="sidebar_content">
              <template v-for="(i) in route.meta.modules">
                <el-menu-item :index="i.id">  
                  <el-icon> 
                    <component :is="i.icon"></component>
                  </el-icon>
                   <router-link :to="i.to" style="font-size: small;">{{i.name}}</router-link>
                </el-menu-item>
              </template>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main id="main">
          <RouterView/>
          <el-footer>
            111
          </el-footer>
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
  .el-header,.el-footer{
    padding:0 0 ;
  }

  .el-menu-item a,a:link,a:hover {
      text-decoration: none;
      font-size: small;
      color: rgb(0,0,0);
      
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
  .nav_item,.nav_item_r {
    padding:0 20px;
  }
  .nav_item_r{
    margin-left: auto;
  }
</style>
