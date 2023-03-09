<template>
  <div class="about">
    <child1
      ref="childRef"
      :myName="name"
      :age="age"
      @btn="onBtn"
      @test="onTest"
    ></child1>
  </div>
</template>
<script setup lang="ts">
import Child1 from './child1.vue'

let name = 'jlw'
let age = 12

function onBtn() {
  console.log('emit btn')
}

function onTest() {
  console.log('emit test')
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
