<template>
  <form class="form">
    <!-- part 1 -->
    <FormAddress />
    <!-- part 2 -->
    <FormShipping />
    <!-- part 3 -->
    <FormPayment />
    <!-- btn Group -->
    <BtnGroup />
  </form>
</template>

<script setup>
import FormAddress from "./FormAddress.vue";
import FormShipping from "./FormShipping.vue";
import FormPayment from "./FormPayment.vue";
import BtnGroup from "./BtnGroup.vue";

</script>
