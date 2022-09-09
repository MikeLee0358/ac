<script setup>
import StepperPanel from "../components/StepperPanel.vue";
import FormPanel from "../components/FormPanel.vue";
import CartPanel from "../components/CartPanel.vue";
import { ref } from "vue";

const data = ref({
  stepperData: [
    {
      id: 1,
      title: "寄送地址",
      isActive: true,
    },
    {
      id: 2,
      title: "運送方式",
      isActive: true,
    },
    {
      id: 3,
      title: "付款資訊",
      isActive: false,
    },
  ],
  formData: {},
  CartData: {}
})

</script>

<template>
  <main>
    <StepperPanel :stepper-data="data.stepperData" />
    <FormPanel />
    <CartPanel />
  </main>
</template>



