<script setup>
import { onBeforeMount, onMounted } from 'vue';
import Card from '@/components/CardComponent.vue';
const MPInfo = {
    errno: 0,
    data:{
            left: [
                {
                    code: "1-0",
                    title: "",
                    category: "carousel",
                    content: ["/carousel/1.png","/carousel/2.png","/carousel/default.png"]
                    //部分测试轮播图片为洛谷中国站(https://www.luogu.com.cn)主站banner图
                    //所有人：上海洛谷科技，请勿滥用
                },
                {
                    code: "1-1",
                    title: "测试卡片信息1",
                    category: "plain",
                    content: "测试测试测试测试测试"
                },{
                    code: "1-2",
                    title: "测试卡片信息2",
                    category: "plain",
                    content: "MA-SOUL for the future of OI"
                },
            ],
            right: [
                {
                    code: "2-1",
                    title: "测试卡片信息3",
                    category: "plain",
                    content: '右侧卡片check换行\n右侧卡片check\n右侧卡片check\n右侧卡片check\n'
                },
                {
                    code: "2-2",
                    title: "测试卡片组件化传递",
                    category: "plain",
                    content: 'Hello Hello 听得到吗'
                },
            ]
        }
    };

onBeforeMount(()=>{
    console.log("HomePage loading")
})
onMounted(()=>{
    console.log("HomePage Loaded")
})
</script>

<template>
    <div id="MainPage">
        <el-row id="cards_content" :gutter="20">
            <el-col :sm="14" :xs="24" id="cards_l">
                <el-row v-for="i in MPInfo.data.left">
                    <el-col class="card_col">
                        <Card :data="i"/>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :sm="10" :xs="24" id="cards_r">
                <el-row v-for="i in MPInfo.data.right">
                    <el-col class="card_col">
                        <Card :data="i"/>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<style>
    .card_col{
        margin-bottom: 15px;
    }
</style>