<script setup lang="ts">
import { ref } from "vue";
const isDark = ref(false);
</script>

<template>
  <button @click="isDark = !isDark">
    <span v-if="isDark">🌙</span>
    <span v-else>🌞</span>
  </button>
</template>
