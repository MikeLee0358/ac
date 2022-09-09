<template>
  <h1>結帳</h1>
  <section
    class="wraps"
    :class="[
      { 'page-one': page === 1 },
      { 'page-two': page === 2 },
      { 'page-three': page === 3 },
    ]"
  >
    <div class="step" v-for="step in stepperData" :key="step.id">
      <div class="step__circle"></div>
      <div class="step__title">{{ step.title }}</div>
      <hr class="step__line" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["stepperData"]);
const page = 3;
</script>

<style lang="scss" src="../scss/components/StpperPanel.scss"></style>
