<script setup>
    import { ref } from 'vue'
    const props = defineProps(['data'])
    const kw = ref("")
    const result = ref(props.data.t_content)
    const loading = ref(false)
    const searchStart = ()=>{
        loading.value = true
        if(kw.value==""){
            result.value = props.data.t_content
            return
        }else{
            var kwg = kw.value.split(' ')
            var tmp = []
            
            for(var i in props.data.t_content){
                for(var o in props.data.t_content[i]){
                    var s = 0
                    for(var p in kwg){
                        if(String(props.data.t_content[i][o]).includes(kwg[p])){
                            s++
                        }
                    }
                    if(s==kwg.length){
                        tmp.push(props.data.t_content[i])
                        break
                    }
                }
            }
            result.value=tmp
            setTimeout(()=>{loading.value = false},500)
        }
    }
</script>

<template>
    <el-row justify="center">
        <el-col v-loading="loading" :span="24" class="search_main">
            <el-input class="search_bar" prefix-icon="Search" placeholder="搜索..." v-model="kw" @keydown="" @keydown.enter="searchStart" />
            <el-table :data="result" :default-sort="{ prop: 'id', order: 'ascending' }" stripe width="100%" :key="Math.random()">
                <el-table-column :prop="i" :label="r.label" v-for="(r,i) in data.t_header" :key="i"/>
            </el-table>
        </el-col>
    </el-row>
</template>

<style>

</style>