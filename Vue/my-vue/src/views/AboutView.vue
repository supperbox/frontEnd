<template>
  <div class="about">
    <child1
      ref="childRef"
      name1="max1"
      :name2="name"
      :age="age"
      @btn="onBtn"
      @test="onTest"
    ></child1>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Child1 from './child1.vue'

let name = 'jlw'
let age = 12
let childRef = ref()

function onBtn() {
  console.log('btn')
}

function onTest() {
  console.log('test')
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
