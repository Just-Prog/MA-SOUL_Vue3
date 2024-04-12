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
          <!-- <el-scrollbar> -->
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
          <!-- </el-scrollbar> -->
        </el-aside>
        <el-main id="main">
          <div id="route-content">
            <RouterView/>
          </div>
          <el-footer id="footer">
            <div id="footer-l">
              <img src="@/assets/logo.png" height="80px"></img>
            </div>
            <div id="footer-r" style="text-align: right;">Funding for this program<br>was made possible by<br>viewers like <font color="red">You</font>.</div>
          </el-footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
  #MainLayout{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
  }
  #MainLayout .el-container{
    height: 100%;
  }
  #main{
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
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
  #sidebar .el-menu{
    background: #f7f9fb;
    height: 100%;
  }
  .el-menu-item a,a:link,a:hover {
      text-decoration: none;
      font-size: small;
      color: rgb(0,0,0);
  }
  #sidebar{
    float:left;
  }
  .nav_item,.nav_item_r {
    padding:0 20px;
  }
  .nav_item_r{
    margin-left: auto;
  }
  .el-main{
    height: 100%;
    padding: 0 0;
  }
  #main #route-content{
    padding: 20px 20px;
  }
  #footer{
    border-top: 1px solid var(--el-menu-border-color);
    padding:20px 0;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    height:auto;
    /* background-color: #e799b0; */
  }
  #footer div{
    margin:auto 20px;
  }
  #footer-r{
    line-height: 135%;
  }
</style>
