<script setup lang="ts">
import MyButton from "./MyButton.vue";
</script>

<template>
  <div class="card flex space-x-4">
    <MyButton color="blue">Blue</MyButton>
    <MyButton size="sm" color="red">Small red</MyButton>
    <MyButton color="gradient">Gradient</MyButton>
    <MyButton color="gradient-pink-yellow">Gradient-pink-yellow</MyButton>
    <MyButton disabled>Disabled</MyButton>
  </div>
</template>

<style scoped></style>
