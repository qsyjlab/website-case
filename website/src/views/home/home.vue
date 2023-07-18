<template>
    <div class="container">
        <search-container class="search"></search-container>
        <case-list class="body"></case-list>
    </div>
</template>
<script setup>

import SearchContainer from './search-container.vue'
import CaseList from './case-list.vue'

</script>
<style lang="scss" scoped>
.container {
    position: relative;
}

.body {
    padding-top: 10%;
}

.search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

</style>