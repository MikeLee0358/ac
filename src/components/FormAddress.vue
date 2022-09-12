<template>
  <section class="address">
    <h1>寄送地址</h1>
    <div class="basic-info">
      <div class="gender">
        <label>稱謂</label>
        <select>
          <option value="male">先生</option>
          <option value="female">小姐</option>
        </select>
      </div>
      <div class="name">
        <label>姓名</label>
        <input type="text" placeholder="請輸入姓名" />
      </div>
      <div class="tel">
        <label>電話</label>
        <input type="text" placeholder="請輸入行動電話" />
      </div>
      <div class="email">
        <label>Email</label>
        <input type="text" placeholder="請輸入電子郵件" />
      </div>
      <div class="city">
        <label>縣市</label>
        <select>
          <option>請選擇縣市</option>
          <option>台北市</option>
          <option>桃園市</option>
          <option>高雄市</option>
        </select>
      </div>
      <div class="address">
        <label>地址</label>
        <input type="text" placeholder="請輸入地址" />
      </div>
    </div>
  </section>
</template>

<style src="../scss/components/FormAddress.scss" scoped></style>
