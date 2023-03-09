<template>
  <div class="child1">
    <p>{{ $attrs.name1 }}</p>
    <p>{{ $attrs.age }}</p>
    <Child2 v-bind="$attrs"></Child2>
  </div>
</template>

<script lang="ts" setup>
import Child2 from './child2.vue'

defineProps(['age'])
</script>

<style lang="less" scoped></style>
