<template>
  <div class="child1">
    <p>child1</p>
    <Child2 :name="name" @update:name="name = $event"></Child2>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Child2 from './child2.vue'

let name = ref('jlw')
</script>

<style lang="less" scoped></style>
