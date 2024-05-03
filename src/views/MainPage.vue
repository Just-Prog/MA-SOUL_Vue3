<script setup>
import { onBeforeMount, onMounted } from 'vue';

const MPInfo = {
    errno: 0,
    data:{
            left: [
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
                }
            ],
            right: [
                {
                    code: "2",
                    title: "",
                    category: "carousel",
                    content: ["/carousel/1.jpg","/carousel/2.png"]
                    //部分测试轮播图片为洛谷中国站(https://www.luogu.com.cn)主站banner图
                    //所有人：上海洛谷科技，请勿滥用
                }
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
        <el-row>
            <el-col :span="15" id="cards_l">
                <template v-for="i in MPInfo.data.left">
                    <template v-if="i.category==='plain'">
                        <el-col>
                            <el-card shadow="hover">
                                <template v-if="i.title" #header>
                                    <span class="card-header-title">{{ i.title }}</span>
                                </template>
                                {{ i.content }}
                            </el-card>
                        </el-col>
                    </template>
                    <template v-if="i.category==='carousel'">
                        <el-col>
                            <el-carousel>
                                <el-carousel-item v-for="img in i.content">
                                    <img :src="img"/>
                                </el-carousel-item>
                            </el-carousel>
                        </el-col>
                    </template>
                </template>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="8" id="cards_r">
                <template v-for="i in MPInfo.data.right">
                    <template v-if="i.category==='plain'">
                        <el-col>
                            <el-card shadow="hover">
                                <template v-if="i.title" #header>
                                    <span class="card-header-title">{{ i.title }}</span>
                                </template>
                                {{ i.content }}
                            </el-card>
                        </el-col>
                    </template>
                    <template v-if="i.category==='carousel'">
                        <el-col>
                            <el-carousel id="card_carousel" height="228px">
                                <el-carousel-item v-for="img in i.content" style="align-content: center;">
                                    <img :src="img" width="100%"/>
                                </el-carousel-item>
                            </el-carousel>
                        </el-col>
                    </template>
                </template>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    /* #cards_l *,#cards_r *{
        margin-top: 15px;
        margin-bottom: 15px;
    } */
    .card-header-title {
        font-weight: bold;
        font-size: larger;
    }
</style>