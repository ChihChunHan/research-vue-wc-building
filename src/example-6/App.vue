<script setup>
import { defineCustomElement } from "vue";
import CE_VueWrapper_VC_CSS from "./components/WrapperVC_CSS.vue";
import _CE_VueWrapper_VC_CSS from "./components/WrapperVC_CSS.vue";

console.log(CE_VueWrapper_VC_CSS);
console.log(_CE_VueWrapper_VC_CSS);
const MyWrapperVC_CSS = defineCustomElement(CE_VueWrapper_VC_CSS);
const node = window.customElements.define("my-wrapper-vc-css", MyWrapperVC_CSS);
console.log(node);
</script>

<template>
  <h1>example-3 nesting</h1>
  <table cellspacing="30">
    <tr>
      <th>outer ↓ \ inner →</th>
      <th>*.vue with css</th>
    </tr>
    <tr>
      <td>*.ce.vue with Vue component</td>
      <td><my-wrapper-vc-css></my-wrapper-vc-css></td>
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
