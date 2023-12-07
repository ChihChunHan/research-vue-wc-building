<script setup>
import { defineCustomElement } from "vue";
import VueMySwitch_ILS from "./Switch_ILS.vue";
const MySwitchILS = defineCustomElement(VueMySwitch_ILS);
window.customElements.define("my-switch-ils", MySwitchILS);
</script>

<template>
  <div class="box-wrapper">
    <my-switch-ils></my-switch-ils>
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
