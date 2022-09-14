<template>
  <main>
    <h1 class="h1">結帳</h1>
    <StepperPanel :stepper-data="data.stepperData" :page="page" />
    <FormPanel :page="page" @update2="handler" />
    <CartPanel :shipping="shipping" :box="box" :cart="cart" />
  </main>
</template>

<script setup>
import "../scss/layout/HomePage.scss";
import StepperPanel from "../components/StepperPanel.vue";
import FormPanel from "../components/FormPanel.vue";
import CartPanel from "../components/CartPanel.vue";
import { ref, provide } from "vue";

const box = ref("免費");
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
});
const shipping = ref([
  { id: 0, title: "標準運送", description: "約3~7個工作天", price: "免費" },
  { id: 1, title: "DHL貨運", description: "48小時內送達", price: 500 },
]);
const cart = ref([
  {
    id: 0,
    title: "破壞補丁修身牛仔褲",
    price: 3999,
    image: "/src/assets/cart_item1.png",
    btn: {
      minus: "/src/assets/minus-circle@2x.png",
      plus: "/src/assets/plus-circle@2x.png",
      count: 1,
    },
  },
  {
    id: 1,
    title: "刷色直筒牛仔褲",
    price: 1299,
    image: "/src/assets/cart_item2.png",
    btn: {
      minus: "/src/assets/minus-circle@2x.png",
      plus: "/src/assets/plus-circle@2x.png",
      count: 1,
    },
  },
]);
const page = ref(1);

const handler = (data) => (box.value = data);

provide("page", page);
provide("shipping", shipping);
</script>
