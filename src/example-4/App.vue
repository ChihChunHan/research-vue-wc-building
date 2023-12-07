<script setup>
import { defineCustomElement } from "vue";
import VueWrapper from "./components/Wrapper.ce.vue";

// Vue generates a new HTML element class from the component definition.
const MyWrapper = defineCustomElement(VueWrapper);

customElements.define("my-wrapper", MyWrapper);
</script>

<template>
  <h1>example-4 slot</h1>
  <my-wrapper>
    <div class="outer">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
      eaque. Consequuntur exercitationem velit numquam in vero debitis
      temporibus nihil expedita minima, voluptas ratione natus illo magni
      eligendi at necessitatibus tempora.
    </div>
  </my-wrapper>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.outer {
  color: red;
  background-color: #ddd;
}
</style>
