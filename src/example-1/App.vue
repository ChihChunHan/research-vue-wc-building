<script setup>
import { defineCustomElement } from "vue";
import VueMySwitch from "./components/Switch.vue";

const MySwitch = defineCustomElement(VueMySwitch);
window.customElements.define("my-switch", MySwitch);
</script>

<template>
  <h1>example-1 web-component</h1>
  <my-switch></my-switch>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
