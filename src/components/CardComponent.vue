<script setup>
  const props = defineProps(['data'])
  console.log("Card Compnent:",props.data)
</script>
<!-- based on element-plus -->
<template>
    <template v-if="data.category==='plain'">
        <el-card shadow="hover" class="card_content">
            <template v-if="data.title" #header>
                <span class="card-header-title">{{ data.title }}</span>
            </template>
            {{ data.content }}
        </el-card>
    </template>
    <template v-if="data.category==='carousel'">
        <el-carousel width="100%" class="card_carousel">
            <el-carousel-item v-for="img in data.content" style="align-content: center;">
                <img :src="img" width="100%"/>
            </el-carousel-item>
            <img src="/carousel/default.png" width="100%" style="opacity: 0;"/>
        </el-carousel>
    </template>
</template>
    
<style>
  .card-header-title {
      font-weight: bold;
      font-size: larger;
  }
  .card_content {
      white-space: pre-line;
  }
  .el-carousel .el-carousel__container{
      height: auto !important;
  }
</style>
    