<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
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
const dataNotFulfilled = ref(false)
const onLoginDataSubmit = ()=>{
  if(account.value.username && account.value.pwd){
    isLogin.value = true;
    needLogin.value = false;
  }else{
    dataNotFulfilled.value = true;
  }
  // TODO
}
const onRegisterDataSubmit = ()=>{
  if(account.value.username && account.value.pwd_ && account.value.pwd_===account.value.pwd){
    console.log("注册成功")
    needReg.value = false;
  }else{
    dataNotFulfilled.value = true;
  }
}
onBeforeMount(()=>{
  console.log(
`    __  ______        _____ ____  __  ____ 
   /  |/  /   |      / ___// __ \/ / / / / 
  / /|_/ / /| |______\__ \/ / / / / / / /  
 / /  / / ___ /_____/__/ / /_/ / /_/ / /___
/_/  /_/_/  |_|    /____/\____/\____/_____/
                                           
MA-SOUL - Coding with Love & Peace & MA-SOUL without M`)
});
onMounted(()=>{
  console.log("App mounted")
})
</script>

<template>
  <div id="MainLayout">
    <el-container style="height: 100vh;max-height: 100vh">
      <el-header id="nav_header">
        <el-menu id="nav" mode="horizontal" :ellipsis="false" :default-active=route.path>
          <div class="nav_item ver_center" @click='back2Main'>
            <img src='@/assets/logo_nav.png' height="40px"/>
          </div>
          <template v-for="(item) in routers">
            <el-menu-item :index="item.path" v-if="item.meta.showOnNav">
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
              <el-icon style="font-size:95%;" @click="isLogin=false"><SwitchButton /></el-icon>
            </template>
          </div>
        </el-menu>
      </el-header>
      <el-container id="MainLayout_frame" style="align-items: stretch;">
        <el-container id="MainLayout_content">
          <el-aside width="180px" id="sidebar" v-if="route.meta.sidebar_items">
            <!-- <el-scrollbar> -->
              
              <el-menu id="sidebar_content">
                <template v-for="(i) in route.meta.sidebar_items">
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
              <el-main id="route-content">
                <RouterView/>
              </el-main>
            <el-footer id="footer">
              <div id="footer-l">
                <img src="@/assets/logo.png" height="80px"></img>
              </div>
              <div id="footer-r" style="text-align: right;">
                Funding for this program<br>
                was made possible by<br>
                viewers like <router-link to="about" style="color:red">YOU</router-link>
              </div>
            </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </el-container>
    <el-dialog title="登录/Login" v-model="needLogin" width="700px">
        <el-form :model="account" label-width="55px" label-position="left" size="large">
          <el-form-item v-if="dataNotFulfilled">
            <el-alert title="请确认所有必填项均填写后进行提交" type="warning" @close="dataNotFulfilled=false" />
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="account.username" required placeholder="Type your username here"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="account.pwd" showPassword placeholder="Type your password here"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="onLoginDataSubmit">OK</el-button>
        <el-button @click="needLogin=false">Cancel</el-button>
      </el-dialog>
    <el-dialog title="注册/Register" v-model="needReg" width="45%">
      <el-form :model="account" label-width="75px" label-position="left" size="large">
        <el-form-item v-if="dataNotFulfilled">
          <el-alert title="请确认所有必填项均填写后进行提交" type="warning" @close="dataNotFulfilled=false" />
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="account.username" required placeholder="Type your username here"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="account.pwd" showPassword placeholder="Type your password here"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="account.pwd_" showPassword placeholder="Type your password here"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="onRegisterDataSubmit">Register</el-button>
      <el-button @click="needLogin=false">Cancel</el-button>
    </el-dialog>
    <el-backtop :bottom="200" target="#route-content"/>
    <vue-particles
        id="tsparticlesBG"
        :options="{
            background: {
                color: {
                    value: '#FFFFFF'
                }
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                },
                modes: {
                    bubble: {
                        distance: 360,
                        duration: 2,
                        opacity: 0.6,
                        size: 33
                    },
                    push: {
                        quantity: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: '#e799b0'
                },
                links: {
                    color: '#9ac8e2',
                    distance: 124,
                    enable: true,
                    opacity: 0.8,
                    width: 1
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'bounce',
                    random: false,
                    speed: 5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 120
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    value: { min: 0.3, max: 3 }
                }
            },
            detectRetina: true
        }"
    />
  </div>
</template>

<style scoped>
  #nav_header{
    box-shadow: var(--el-box-shadow-lighter);
  }
  #MainLayout{
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
  }
  /* #MainLayout .el-container{
    height: 100%;
  } */
  #MainLayout_frame{
    min-height: calc(100% - 60px);
    height: calc(100% - 60px);
  }
  #MainLayout_content{
    max-width: 1200px;
    margin: 0 auto;
    box-shadow: 0 0 5px 0 rgb(202, 202, 202);
    height: 100%;
  }
  #main{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #efefef;
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
    background: #fcfcfd;
    height: 100%;
  }
  .el-menu-item a,a:link,a:hover {
      text-decoration: none;
      font-size: small;
      color: rgb(0,0,0);
  }
  #sidebar{
    float:left;
    width: 240px;
  }
  .nav_item,.nav_item_r {
    padding:0 20px;
  }
  .nav_item_r {
    margin-left: auto;
  }
  .nav_item_r div{
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
    background: #ffffff;
    /* background-color: #e799b0; */
  }
  #footer div{
    margin:auto 20px;
  }
  #footer-r{
    line-height: 135%;
  }
  #route-content{
    padding: 16px;
    background: #ffffff;
  }
  #tsparticlesBG {
    position:absolute;
    z-index:-1;
  }
</style>
