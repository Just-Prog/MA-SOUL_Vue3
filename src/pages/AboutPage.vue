<script setup>
    const particlesLoaded = ()=>{
        console.log("bga mounted")
    }
</script>

<template>
    <div id="greeting">
        <span>
            Funding for this program was made possible<br/>by viewers like <span style="color: red;">U</span>.
        </span>
    </div>
</template>

<style scoped>
    #greeting {
        width: 100%;
        min-height: 100%;
        text-align: center;
        align-content: center;
        font-size: 37px;
        line-height: 45px;
    }
</style>