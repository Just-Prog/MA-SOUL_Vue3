<script setup>
    // import { ref } from 'vue';
    import SearchTable from '@/components/SearchTable.vue';
    const props = defineProps(['data'])
    
</script>
<!-- based on element-plus -->
<template>
    <template v-if="data.type=='carousel'">
        <el-carousel width="100%" class="card_carousel">
            <el-carousel-item v-for="img in data.content" style="align-content: center;">
                <img :src="img" width="100%"/>
            </el-carousel-item>
            <img src="/carousel/default.png" width="100%" style="opacity: 0;"/>
        </el-carousel>
    </template>
    <template v-else-if="data.type=='a_group'">
        <el-card shadow="hover" class="card_content">
            <template v-if="data.title" #header>
                <span class="card-header-title">{{ data.title }}</span>
            </template>
            <el-row>
                <template v-for="i in data.content" :key="i.id">
                    <template v-if="!i.child">
                        <el-col :span="12">
                            <el-link> {{ i.name }} </el-link>
                        </el-col>
                    </template>
                    <template v-else>
                        <el-col :span="12">
                            <el-popover width="250px">
                                <template #reference>
                                    <el-link> {{ i.name }} </el-link>
                                </template>
                                <span v-for="child in i.child" class="a_group-child" >
                                    <el-link> {{ child.name }} </el-link>
                                </span>
                            </el-popover>
                        </el-col>
                    </template>
                </template>
            </el-row>
        </el-card>
    </template>
    <template v-else-if="data.type=='search'">
        <el-card shadow="hover" class="card_content">
            <template v-if="data.title" #header>
                <span class="card-header-title">{{ data.title }}</span>
            </template>
            <SearchTable :data="data.content"></SearchTable>
        </el-card>
    </template>
    <template v-else>
        <el-card shadow="hover" class="card_content">
            <template v-if="data.title" #header>
                <span class="card-header-title">{{ data.title }}</span>
            </template>
            {{ data.content }}
        </el-card>
    </template>
</template>
    
<style>
  .card-header-title {
      font-weight: bold;
      font-size: larger;
  }
  .card_content {
      white-space: pre-line;
      line-height: 25px;
  }
  .el-carousel .el-carousel__container{
      height: auto !important;
  }
  .a_group-child{
    margin-left: 10px;
    margin-right: 10px;
    line-height: 25px;
  }
</style>
    