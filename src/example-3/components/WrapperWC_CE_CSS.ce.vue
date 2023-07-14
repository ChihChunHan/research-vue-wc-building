<script setup>
import { defineCustomElement } from "vue";
import CE_VueMySwitch_CSS from "./Switch_CSS.ce.vue";
const CEMySwitchCSS = defineCustomElement(CE_VueMySwitch_CSS);
window.customElements.define("ce-my-switch-css", CEMySwitchCSS);
</script>

<template>
  <div class="box-wrapper">
    <ce-my-switch-css></ce-my-switch-css>
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
