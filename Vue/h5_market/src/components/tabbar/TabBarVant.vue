<script setup>
import { ref } from "vue";
import tabbarData from "@/assets/data/tabbar.js";
import { getImageUrl } from "@/utils/loadAssetsResource.js";
import { useRouter } from "vue-router";

let active = ref(0);
</script>

<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <template #icon>
            <img
              :src="
                getImageUrl(active === index ? item.imageActive : item.image)
              "
            />
          </template>
          <span>
            {{ item.text }}
          </span></van-tabbar-item
        >
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tabbar {
}
</style>
