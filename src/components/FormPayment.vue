<template>
  <section class="payment">
    <h1>付款資訊</h1>
    <section class="credit-info">
      <div class="owner">
        <label>持卡人姓名</label>
        <input type="text" placeholder="John Doe" />
      </div>
      <div class="number">
        <label>卡號</label>
        <input type="text" placeholder="1111 2222 3333 4444" />
      </div>
      <div class="valid">
        <label>有效期限</label>
        <input type="text" placeholder="MM/YY" />
      </div>
      <div class="password">
        <label>CVC / CCV</label>
        <input type="text" placeholder="123" />
      </div>
    </section>
  </section>
</template>

<style src="../scss/components/formPayment.scss" scoped></style>
