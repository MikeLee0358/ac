<template>
  <section class="buttons">
    <button
      class="previous"
      @click.stop.prevent="page--"
      :class="{ transparent: page === 1 }"
      :disabled="page === 1"
    >
      <img src="../assets/left-arrow@2x.png" alt="previous-step" />
      <span>上一步</span>
    </button>

    <button class="next" @click.stop.prevent="page++ >= 3 ? (page = 3) : null">
      <span>{{ page === 3 ? "確認下單" : "下一步" }}</span>
      <img
        src="../assets/right-arrow@2x.png"
        alt="next-step"
        :class="{ none: page === 3 }"
      />
    </button>
  </section>
</template>

<script setup>
import { inject } from "vue";
const page = inject("page");
</script>

<style src="../scss/components/BtnGroup.scss" scoped></style>
