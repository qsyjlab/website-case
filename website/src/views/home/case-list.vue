<template>
  <div class="case-wrapper">
    <div
      class="case-wrapper__item"
      v-for="(item, index) in caseList"
      :key="index"
    >
      <router-link :to="{ name: 'View', query: { path: item.folder } }">{{
        item.name
      }}</router-link>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { fetchYml } from "@/utils";

const caseList = ref([]);

startLoadSystem();

async function loadFolderData(folders = []) {
  const loadQueue = [];

  folders.forEach((folder) => {
    loadQueue.push(fetchYml(folder.folder));
  });

  return await Promise.all(loadQueue).then((res) => res);
}

function startLoadSystem() {
  fetchYml("index.yml").then(async (res) => {
    const foldersData = await loadFolderData(res);

    caseList.value = foldersData;

    console.log("caseList", caseList);
  });
}
</script>
<style lang="scss" scoped>
.case-wrapper {
  display: flex;
  flex-wrap: wrap;

  &__item {
    margin: 10px;
  }
}
</style>
