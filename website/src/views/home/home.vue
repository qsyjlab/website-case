<template>
    <div>首页</div>
</template>
<script setup>

import { fetchYml , tagRoot } from '@/utils'


const getTags = ()=> {
    fetchYml('tags.yml').then(res=> {

        console.log('res',res);
    })
}

getTags()

</script>
<style scoped></style>