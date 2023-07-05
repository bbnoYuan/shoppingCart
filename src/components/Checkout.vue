<template>
  <div class="checkout">
    <h2 class="checkout-heading">结账信息</h2>
    <p class="checkout-message">您购买的商品总价为 ￥{{ total }}，谢谢惠顾。</p>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  props: {
    total: Number,
  },
};
</script>

<style scoped>
.checkout {
  text-align: center;
  margin-top: 50px;
}

.checkout-heading {
  font-size: 2.5em;
  color: #3f3f3f;
  margin-bottom: 30px;
}

.checkout-message {
  font-size: 1.5em;
  color: #5f5f5f;
  line-height: 1.6;
}
</style>
