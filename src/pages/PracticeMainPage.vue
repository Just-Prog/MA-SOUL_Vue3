<script setup>
    import CardComponent from '@/components/CardComponent.vue';
    const tagData = {
        title: "标签",
        type: "a_group",
        content: [
          {
            name: "算法基础",
            id: 1,
            child: [
              {
                name: "暴力",
                id: 1-1,
              },{
                name: "枚举",
                id: 1-2,
              },{
                name: "模拟",
                id: 1-3,
              },{
                name: "递归&分治",
                id: 1-4,
              },{
                name: "贪心",
                id: 1-5,
              },{
                name: "排序",
                id: 1-6,
              },{
                name: "前缀和 & 差分",
                id: 1-7,
              },{
                name: "二分",
                id: 1-8,
              },{
                name: "倍增",
                id: 1-9,
              },{
                name: "构造",
                id: 1-10,
              },{
                name: "打表",
                id: 1-11,
              },
            ],
          },
          {
            name: "搜索",
            id: 2,
          },
          {
            name: "动态规划/DP",
            id: 3,
          },
        ]
    }
</script>

<template>
    <el-row :gutter="20">
        <el-col :xs="24" :sm="18">
            <CardComponent :data='{content: "Constructing",title: "题库"}'/>
        </el-col>
        <el-col :xs="24" :sm="6">
            <CardComponent :data="tagData"/>
        </el-col>
    </el-row>
</template>

<style scoped>
    
</style>