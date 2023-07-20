<template>
  <div class="case-wrapper">
    <div
      class="case-wrapper__item"
      v-for="(item, index) in caseList"
      :key="index"
      @click="$router.push({ name: 'View', query: { path: item.folder } })"
    >
      <div class="iframe-wrapper">
        <div class="iframe-wrapper__mask"></div>
        <iframe
          :data-src="examplesUrl + item.folder"

          :class="`iframe-page__main iframe-lazy`"
        ></iframe>
      </div>
      <div class="case-wrapper__title">{{ item.name }}</div>
    </div>
  </div>
</template>
<script setup>
import { nextTick, ref } from "vue";
import { fetchYml, examplesUrl } from "@/utils";

const caseList = ref([]);

// 创建 Intersection Observer 实例
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // 当目标元素进入视口时，触发加载图片
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      observer.unobserve(lazyImage); // 停止观察已加载的图片
    }
  });
});

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

    caseList.value = foldersData.flat();

    nextTick(() => {
      // 获取所有带有 'lazy-load' 类的图片元素
      const lazys = document.querySelectorAll(".iframe-lazy");
      // 将所有图片元素添加到 Intersection Observer 中进行观察
      lazys.forEach((lazy) => {
        observer.observe(lazy);
      });
    });

  });
}
</script>
<style lang="scss" scoped>
.iframe-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 宽高比，(9 / 16) * 100% = 56.25% */
  // background-color: #f0f0f0;
  background-color: white;
  &__mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    cursor: pointer;
  }
}
.case-wrapper {
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px; /* 列之间的间隔 */

  &__item {
    // width: 24%;
    box-sizing: border-box;
    margin: 10px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
  }

  &__title {
    padding: 5px;
  }
}
.iframe-page__main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border: 0;
}
</style>
