<template>
  <div class="tags">
    <div
      :class="['tags-item', active === item ? 'is-active' :'']"
      v-for="(item, index) in tagsList"
      :key="index"
      @click="toggleTagName(item)"
    >
      <div>{{ item }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { fetchYml } from "@/utils";

const ALL_NAME = "全部图表";

const tagsList = ref([]);
const active = ref(ALL_NAME);

tagsList.value.push(ALL_NAME);

const toggleTagName = (tag) => {
  active.value = tag;
};

const getTags = () => {
  fetchYml("tags.yml").then((res) => {
    tagsList.value = res;
  });
};

getTags();
</script>
<style lang="scss" scoped>
.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.tags-item {
  padding: 5px 15px;
  cursor: pointer;

  &.is-active {
    color: white;
    background-color: #007bff;
  }
}
</style>
