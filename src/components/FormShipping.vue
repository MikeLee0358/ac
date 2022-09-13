<template>
  <section class="shipping">
    <h1>運送方式</h1>
    <label class="shipping-info" v-for="ship in shipping" :key.id="ship.id">
      <input type="radio" class="radio" name="radio" :checked="ship.id === 0" />
      <p class="title">{{ ship.title }}</p>
      <p class="description">{{ ship.description }}</p>
      <p class="price">{{ ship.price }}</p>
    </label>
  </section>
</template>

<script setup>
import { inject } from "vue";
const shipping = inject("shipping");
</script>
<style scr="../scss/components/FormShipping.scss"></style>

<style src="../scss/components/FormShipping.scss" scoped></style>
