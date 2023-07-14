<script setup lang="ts">
import { ref } from "vue";
const isDark = ref(false);
</script>

<template>
  <button
    type="button"
    @click="isDark = !isDark"
    style="
      background-color: #7400a2;
      border: none;
      border-radius: 0.5rem;
      color: #fbbf24;
      cursor: pointer;
      display: flex;
      font-size: 68px;
      padding: 0.4em;
    "
  >
    <span v-if="isDark">🌙</span>
    <span v-else>🌞</span>
  </button>
</template>

<style></style>
