<template>
  <div class="iframe-cotainer">
    <iframe
      :src="examplesUrl + query.path"
      :class="`iframe-page__main`"
    ></iframe>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { examplesUrl } from "@/utils";

const route = useRoute();

const query = route.query;
</script>
<style scoped>
.iframe-page__main {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border: 0;
}

.iframe-cotainer {
  width: 100%;
  height: 100%;
}
</style>
