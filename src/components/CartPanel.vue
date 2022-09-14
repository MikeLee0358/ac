<template>
  <section class="cart">
    <h1>購物籃</h1>
    <div class="order-wrap" v-for="item in props.cart" :key="item.id">
      <img :src="item.image" class="img" />
      <p class="title">{{ item.title }}</p>
      <p class="price">${{ formatNum(item.price) }}</p>
      <div class="counter">
        <button
          class="minus"
          @click.stop.prevent="item.btn.count-- === 0 ? (item.btn.count = 0) : null"
        >
          <img :src="item.btn.minus" alt="minus-circle" />
        </button>
        <span class="count">{{ item.btn.count }}</span>
        <button class="plus" @click.stop.prevent="item.btn.count++">
          <img :src="item.btn.plus" alt="plus-circle" />
        </button>
      </div>
    </div>

    <div class="delivery-info">
      <span>運費</span>
      <span>{{ props.box }}</span>
    </div>
    <div class="total-info">
      <span>小計</span>
      <span>${{ formatNum(total) }}</span>
    </div>
  </section>
</template>

<script setup>
import { computed } from "@vue/reactivity";
const props = defineProps({
  shipping: {
    type: Array,
    required: true,
  },
  box: {
    type: [Number, String],
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
});

const formatNum = (num) => num.toLocaleString("en-US");
const total = computed(
  () =>
    props.cart[0].btn.count * 3999 +
    props.cart[1].btn.count * 1299 +
    (props.box === "免費" ? 0 : props.box)
);
</script>

<style src="../scss/components/CartPanel.scss" scoped></style>
