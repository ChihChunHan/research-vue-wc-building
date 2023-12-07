<script setup>
import SwitchCSS from "./Switch_CSS.vue";
console.log(SwitchCSS);
</script>

<template>
  <div class="box-wrapper">
    <SwitchCSS></SwitchCSS>
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
