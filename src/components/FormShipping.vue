<template>
  <h1>運送方式</h1>
  <div class="shipping-info" v-for="ship in shipping" :key.id="ship.id">
    <input type="radio" class="radio" name="radio" :class="{ default: ship.id === 0 }" />
    <p class="title">{{ ship.title }}</p>
    <p class="description">{{ ship.description }}</p>
    <p class="price">{{ ship.price }}</p>
  </div>
</template>

<script setup>
import { inject } from "vue";
const shipping = inject("shipping");
</script>
<style scr="../scss/components/FormShipping.scss"></style>

<style src="../scss/components/FormShipping.scss" scoped></style>
