<template>
  <div class="child2">
    <div>{{ $attrs.age }}</div>
    <button @click="emit('test')">emitClick</button>
    <button @click="emit('btn')">emitClick</button>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, useAttrs } from 'vue'

const emit = defineEmits(['test', 'btn'])
const child1name = inject('child1name')

onMounted(() => {
  console.log(useAttrs())
  console.log(child1name)
})
</script>

<style lang="less" scoped>
.child2 {
}
</style>
