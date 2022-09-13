<template>
  <main class="container">
    <StepperPanel :stepper-data="data.stepperData" />
    <FormPanel />
    <CartPanel />
  </main>
</template>

<script setup>
import "../scss/layout/HomePage.scss";
import StepperPanel from "../components/StepperPanel.vue";
import FormPanel from "../components/FormPanel.vue";
import CartPanel from "../components/CartPanel.vue";
import { ref, provide } from "vue";

const data = ref({
  stepperData: [
    {
      id: 1,
      title: "寄送地址",
    },
    {
      id: 2,
      title: "運送方式",
    },
    {
      id: 3,
      title: "付款資訊",
    },
  ],
  formData: {},
  CartData: {},
});
const shipping = ref([
  { id: 0, title: "標準運送", description: "約3~7個工作天", price: "免費" },
  { id: 1, title: "DHL貨運", description: "48小時內送達", price: "$500" },
]);
provide("shipping", shipping);
</script>
