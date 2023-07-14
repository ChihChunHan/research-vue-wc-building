<script setup></script>

<template>
  <div class="box">
    <slot class="inner"></slot>
  </div>
</template>

<style>
div.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  background-color: #fbbf24;
  padding: 2em;
}

.inner {
  color: blue;
}
</style>
