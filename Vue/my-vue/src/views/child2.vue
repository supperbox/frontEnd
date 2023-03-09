<template>
  <div class="child2">
    <div>{{ $attrs.myName }}</div>
    <button @click="emit('test')">emitClick</button>
    <button @click="emit('btn')">emitClick</button>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, useAttrs } from 'vue'

const emit = defineEmits(['test', 'btn'])

onMounted(() => {
  console.log(useAttrs())
  console.log(import.meta.env.NAME)
  console.log(import.meta.env.VITE_NAME)
})
</script>

<style lang="less" scoped>
.child2 {
}
</style>
