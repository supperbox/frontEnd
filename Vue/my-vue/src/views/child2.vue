<template>
  <div class="child2">
    <p>child2</p>
    <p>{{ $attrs.name }}</p>
    <button @click="changeName">改变name</button>
    <div>
      {{ tips }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let tips = ref(['1', '2', '3'])
const emit = defineEmits(['update:name'])
function changeName() {
  emit('update:name', 'ghl')
  tips.value[1] = '4'
}
</script>

<style lang="less" scoped>
.child2 {
}
</style>
