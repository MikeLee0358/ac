<template>
  <form class="form">
    <!-- part 1 -->
    <FormAddress :class="{ none: page !== 1 }" />
    <!-- part 2 -->
    <FormShipping :class="{ none: page !== 2 }" />
    <!-- part 3 -->
    <FormPayment :class="{ none: page !== 3 }" />
    <!-- btn Group -->
    <BtnGroup />
  </form>
</template>

<script setup>
import FormAddress from "./FormAddress.vue";
import FormShipping from "./FormShipping.vue";
import FormPayment from "./FormPayment.vue";
import BtnGroup from "./BtnGroup.vue";
defineProps({
  page: Object,
});
</script>
