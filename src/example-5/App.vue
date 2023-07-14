<script setup>
// web components
import { defineCustomElement } from "vue";
import html from "./components/SwitchCSS/template.html?raw";
import options from "./components/SwitchCSS/options.js";
import style from "./components/SwitchCSS/style.css";
const WcMySwitch = defineCustomElement({
  ...options,
  template: html,
  styles: [style]
});
customElements.define("my-switch", WcMySwitch);

// vue components
import VueSwitch from "./components/SwitchCSS/index.vue";
</script>

<template>
  <h1>example-5 exporting legacy component</h1>
  <table cellspacing="30">
    <tr>
      <th>web component</th>
      <th>Vue component</th>
    </tr>
    <tr>
      <td><my-switch></my-switch></td>
      <td><VueSwitch /></td>
    </tr>
  </table>
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
