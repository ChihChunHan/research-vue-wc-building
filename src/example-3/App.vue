<script setup>
import { defineCustomElement } from "vue";
import CE_VueWrapper_VC_CSS from "./components/WrapperVC_CSS.ce.vue";
import CE_VueWrapper_VC_ILS from "./components/WrapperVC_ILS.ce.vue";
import CE_VueWrapper_WC_CSS from "./components/WrapperWC_CSS.ce.vue";
import CE_VueWrapper_WC_ILS from "./components/WrapperWC_ILS.ce.vue";

const MyWrapperVCCSS = defineCustomElement(CE_VueWrapper_VC_CSS);
window.customElements.define("my-wrapper-vc-css", MyWrapperVCCSS);
const MyWrapperVCILS = defineCustomElement(CE_VueWrapper_VC_ILS);
window.customElements.define("my-wrapper-vc-ils", MyWrapperVCILS);
const MyWrapperWCCSS = defineCustomElement(CE_VueWrapper_WC_CSS);
window.customElements.define("my-wrapper-wc-css", MyWrapperWCCSS);
const MyWrapperWCILS = defineCustomElement(CE_VueWrapper_WC_ILS);
window.customElements.define("my-wrapper-wc-ils", MyWrapperWCILS);
</script>

<template>
  <h1>example-3 nesting</h1>
  <table cellspacing="30">
    <tr>
      <th>outer ↓ \ inner →</th>
      <th>*.ce.vue with css</th>
      <th>*.vue with inline-style</th>
    </tr>
    <tr>
      <td>*.ce.vue with Vue component</td>
      <td><my-wrapper-vc-css></my-wrapper-vc-css></td>
      <td><my-wrapper-vc-ils></my-wrapper-vc-ils></td>
    </tr>
    <tr>
      <td>*.ce.vue with web component</td>
      <td><my-wrapper-wc-css></my-wrapper-wc-css></td>
      <td><my-wrapper-wc-ils></my-wrapper-wc-ils></td>
    </tr>
  </table>
  <div></div>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

table,
th,
td {
  text-align: center;
}

th,
td {
  width: 200px;
}

td > * {
  display: inline-block;
}
</style>
