<template>
  <div class="child1">
    <p>{{ $attrs.name1 }}</p>
    <p id="childname">{{ child1name }}</p>
    <!-- <button @click="emit('btn')">btnClick</button>
    <button @click="emit('test')">testClick</button> -->
    <button @click="changeName">changeName</button>
    <Child2 v-bind="$attrs"></Child2>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, provide, useAttrs, nextTick } from 'vue'
import Child2 from './child2.vue'

let child1name = ref('child1')
// let parentAttrs = useAttrs()

function changeName() {
  child1name.value = '111'
  nextTick(() => {
    let index = document.getElementById('childname')?.innerHTML
    console.log(index)

    console.log(document.getElementById('childname')?.innerHTML)
  })
  child1name.value = '222'
  child1name.value = '2223'
}

provide('child1name', child1name.value)

// let emit = defineEmits(['btn', 'test'])

defineExpose({
  child1name
})

onMounted(() => {
  //   console.log(parentAttrs)
})
</script>

<style lang="less" scoped></style>
