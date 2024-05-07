<template>
  <div id="not-found">
    <div class="card">
      <el-empty description="HTTP 404 Not Found" />
    </div>
    <div><table border="1px" cellpadding="0" cellspacing="0" style="height:220px;border-left-style:solid; border-bottom-style:none;border-right-style:none;border-top-style:none"></table></div>
    <div class="card" style="font-size: 2.5vw;line-height: 7vh; ">
      你似乎进入了知识的荒原。
      <div id="back" style="line-height: 7vh;">
        <el-button type="primary" @click="back">{{ backText }}</el-button>
      </div>
    </div>
  </div>
</template>
    
<script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  const r = useRouter()
  console.log(window.history.length)
  const backText = ref("返回")
  const back = ()=>{
    window.history.length<=1?r.push("/"):r.go(-1);
    setTimeout(() => {
      r.push("/")
    }, 0);
  }
</script>
    
<style scoped>
  #not-found{
    display:flex;
    align-items: center;
    flex-direction: row;
    float:left;
    flex:1;
    width: 100%;
    min-height: 100%;
  }
  .card{
    flex:1;
    width: 45%;
    height: 100%;
    float:left;
    text-align: center;
    align-content: center;
  }
  .vertical-line{
    width: 2px;
    height: 100%;
    border: 2px black;
  }
</style>
    