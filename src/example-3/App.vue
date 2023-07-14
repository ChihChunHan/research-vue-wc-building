<script setup>
import { defineCustomElement } from "vue";
import CE_VueWrapper_VC_CSS from "./components/WrapperVC_CSS.ce.vue";
import CE_VueWrapper_VC_CE_CSS from "./components/WrapperVC_CE_CSS.ce.vue";
import CE_VueWrapper_VC_ILS from "./components/WrapperVC_ILS.ce.vue";
import CE_VueWrapper_WC_CSS from "./components/WrapperWC_CSS.ce.vue";
import CE_VueWrapper_WC_CE_CSS from "./components/WrapperWC_CE_CSS.ce.vue";
import CE_VueWrapper_WC_ILS from "./components/WrapperWC_ILS.ce.vue";

const MyWrapperVC_CSS = defineCustomElement(CE_VueWrapper_VC_CSS);
window.customElements.define("my-wrapper-vc-css", MyWrapperVC_CSS);
const MyWrapperVC_CE_CSS = defineCustomElement(CE_VueWrapper_VC_CE_CSS);
window.customElements.define("my-wrapper-vc-ce-css", MyWrapperVC_CE_CSS);
const MyWrapperVC_ILS = defineCustomElement(CE_VueWrapper_VC_ILS);
window.customElements.define("my-wrapper-vc-ils", MyWrapperVC_ILS);
const MyWrapperWC_CSS = defineCustomElement(CE_VueWrapper_WC_CSS);
window.customElements.define("my-wrapper-wc-css", MyWrapperWC_CSS);
const MyWrapperWC_CE_CSS = defineCustomElement(CE_VueWrapper_WC_CE_CSS);
window.customElements.define("my-wrapper-wc-ce-css", MyWrapperWC_CE_CSS);
const MyWrapperWC_ILS = defineCustomElement(CE_VueWrapper_WC_ILS);
window.customElements.define("my-wrapper-wc-ils", MyWrapperWC_ILS);
</script>

<template>
  <h1>example-3 nesting</h1>
  <table cellspacing="30">
    <tr>
      <th>outer ↓ \ inner →</th>
      <th>*.vue with inline-style</th>
      <th>*.vue with css</th>
      <th>*.ce.vue with css</th>
    </tr>
    <tr>
      <td>*.ce.vue with Vue component</td>
      <td><my-wrapper-vc-ils></my-wrapper-vc-ils></td>
      <td><my-wrapper-vc-css></my-wrapper-vc-css></td>
      <td><my-wrapper-vc-ce-css></my-wrapper-vc-ce-css></td>
    </tr>
    <tr>
      <td>*.ce.vue with web component</td>
      <td><my-wrapper-wc-ils></my-wrapper-wc-ils></td>
      <td><my-wrapper-wc-css></my-wrapper-wc-css></td>
      <td><my-wrapper-wc-ce-css></my-wrapper-wc-ce-css></td>
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
