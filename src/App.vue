<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
const routers = useRouter().options.routes
const route = useRoute()
const isLogin = ref(false)
function back2Main(){
  window.location = '/'
}
const needLogin = ref(false)
const needReg = ref(false)
const account = ref({})
const onLoginDataSubmit = ()=>{
  isLogin.value = true;
  needLogin.value = false;
  //TODO
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
              <el-badge is-dot>
                <el-button type="primary" bg @click="needLogin = true">
                  登录
                </el-button>
              </el-badge>
              
              <el-badge is-dot>
                <el-button type="danger" bg @click="needReg = true">
                  注册
                </el-button>
              </el-badge>
            </template>
            <template v-else>
              <el-avatar :fit="fill" src="/avatar/default.jpg"/>
              <el-icon style="font-size:165%;" @click="isLogin=false"><SwitchButton /></el-icon>
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
        <el-container id="main">
          <el-main style="height:0;flex-grow:1;">
            <el-scrollbar id="route-content">
              <RouterView/>
            </el-scrollbar>
          </el-main>
          <el-footer id="footer">
            <div id="footer-l">
              <img src="@/assets/logo.png" height="80px"></img>
            </div>
            <div id="footer-r" style="text-align: right;">Funding for this program<br>was made possible by<br>viewers like <span style="color: red">YOU</span>.</div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <el-dialog title="登录/Login" v-model="needLogin" width="700px">
        <el-form :model="account" label-width="55px" label-position="left" size="large">
          <el-form-item label="用户名">
            <el-input v-model="account.username" required autofocus placeholder="Type your username here"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="account.pwd" showPassword placeholder="Type your password here"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onLoginDataSubmit">Create</el-button>
            <el-button @click="needLogin=false">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    <el-dialog title="注册/Register" v-model="needReg" width="45%">
    </el-dialog>
  </div>
</template>

<style scoped>
  #MainLayout{
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    height: 100vh;
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
  .nav_item_r *{
    margin-left: 10px;
  }
  .el-main{
    height: 100%;
    padding: 0 0;
  }
  #footer{
    border-top: 1px solid var(--el-menu-border-color);
    padding:20px 0;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    height: 115px;
    /* background-color: #e799b0; */
  }
  #footer div{
    margin:auto 20px;
  }
  #footer-r{
    line-height: 135%;
  }
  
</style>
