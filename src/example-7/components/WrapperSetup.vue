<script setup>
import Switch from "./Switch.vue";

const msg = "Hello World!";

defineExpose({ msg });
</script>

<template>
  <div class="box-wrapper">
    <Switch></Switch>
  </div>
</template>

<style>
div.box-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 180px;
  background-color: #fbbf24;
}
</style>
