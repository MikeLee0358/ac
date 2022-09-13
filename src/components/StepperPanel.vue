<template>
  <section class="stepper">
    <h1>結帳</h1>
    <div
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
    </div>
  </section>
</template>

<script setup>
import "../scss/components/StpperPanel.scss";
defineProps({
  stepperData: Array,
  page: Object,
});
</script>
