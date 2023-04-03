<script setup>
import NavBar from "./copns/NavBar.vue";
</script>

<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }

  .location {
    display: flex;
    align-items: center;
    height: 44px;
    justify-content: space-between;

    .city {
      flex: 1;

      padding-left: 15px;
    }
    .position {
      display: flex;
      align-items: center;

      width: 80px;
      img {
        width: 18px;
      }
    }
  }
}
</style>
