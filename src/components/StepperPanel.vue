<template>
  <h1>結帳</h1>
  <section class="wraps">
    <div class="wraps__step" v-for="step in stepperData" :key="step.id">
      <div class="wraps__step__circle">{{ step.id }}</div>
      <div class="wraps__step__title">{{ step.title }}</div>
      <hr class="wraps__step__line" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import '../scss/components/StpperPanel.scss'
const props = defineProps(["stepperData"]);
const data = ref({
  frist: 'asa'
})

</script>


