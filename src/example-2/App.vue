<script setup>
import { defineCustomElement } from "vue";
import VueMySwitch_CSS from "./components/SwitchCSS.vue";
import VueMySwitch_ILS from "./components/SwitchILS.vue";
import CE_VueMySwitch_CSS from "./components/SwitchCSS.ce.vue";

const MySwitchCSS = defineCustomElement(VueMySwitch_CSS);
window.customElements.define("my-switch-css", MySwitchCSS);
const MySwitchILS = defineCustomElement(VueMySwitch_ILS);
window.customElements.define("my-switch-ils", MySwitchILS);
const CEMySwitchCSS = defineCustomElement(CE_VueMySwitch_CSS);
window.customElements.define("ce-my-switch-css", CEMySwitchCSS);
</script>

<template>
  <h1>example-2 styling</h1>
  <table cellspacing="30">
    <tr>
      <th>*.vue with inline-style</th>
      <th>*.vue with css</th>
      <th>*.ce.vue with css</th>
    </tr>
    <tr>
      <td><my-switch-ils></my-switch-ils></td>
      <td><my-switch-css></my-switch-css></td>
      <td><ce-my-switch-css></ce-my-switch-css></td>
    </tr>
  </table>
  <!-- 補充說明 -->
  <!-- <CE_VueMySwitch_CSS></CE_VueMySwitch_CSS> -->
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
