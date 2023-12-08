<script setup>
import { defineCustomElement } from "vue";
import WrapperOptions from "./components/WrapperOptions.vue";
import WrapperSetup from "./components/WrapperSetup.vue";

const getAllComponentStyles = (searchTarget, foundStyles = []) => {
  let resultStyles = foundStyles.slice()
  if (searchTarget.styles) {
    resultStyles.push(...searchTarget.styles)
  }
  if (searchTarget.components) {
    Object.values(searchTarget.components).forEach((child) => {
      resultStyles = getAllComponentStyles(child, resultStyles)
    })
  } else if (searchTarget.setup) {
    const module = searchTarget.setup(null, { expose: () => {} })
    Object.values(module).forEach((el) => {
      if (el.setup) {
        resultStyles = getAllComponentStyles(el, resultStyles)
      }
    })
  }
  return resultStyles
}

const shadowStyleWrapper  = (vueComponent) => {
  return {
    ...vueComponent,
    styles: getAllComponentStyles(vueComponent)
  }
}

const MyWrapperOptions = defineCustomElement(shadowStyleWrapper(WrapperOptions));
window.customElements.define("my-wrapper-options", MyWrapperOptions);

const MyWrapperSetup = defineCustomElement(shadowStyleWrapper(WrapperSetup));
window.customElements.define("my-wrapper-setup", MyWrapperSetup);

</script>

<template>
  <h1>example-7 nesting</h1>
  <table cellspacing="30">
    <tr>
      <th>outer ↓ \ inner →</th>
      <th>*ce.vue with css </th>
    </tr>
    <tr>
      <td>*.ce.vue with options config</td>
      <td><my-wrapper-options></my-wrapper-options></td>
    </tr>
    <tr>
      <td>*.ce.vue with setup script</td>
      <td><my-wrapper-setup></my-wrapper-setup></td>
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
