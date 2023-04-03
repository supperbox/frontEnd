<script setup>
import tabbarData from "@/assets/data/tabbar.js";
import { getImageUrl } from "@/utils/loadAssetsResource.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

let currentItem = ref(0);
const router = useRouter();
function handleTabbarClick(index, item) {
  currentItem.value = index;
  router.push(item.path);
}
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div
        class="tab-bar-item"
        @click="handleTabbarClick(index, item)"
        :class="{ active: currentItem === index }"
      >
        <img
          :src="
            currentItem === index
              ? getImageUrl(item.imageActive)
              : getImageUrl(item.image)
          "
          alt=""
        />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-self: center;

  border-top: 1px solid #f3f3f3;

  height: 50px;

  .tab-bar-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .active {
    color: var(--primary-color);
  }
  .text {
    font-size: 12px;
  }

  img {
    width: 36px;
  }
}
</style>
