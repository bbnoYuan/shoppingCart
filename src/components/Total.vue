<template>
  <section class="total">
    <div>
      <span>总价:</span>￥{{ total }}
    </div>
    <div class="discount-message">
      <!-- 使用 router-link 组件 -->
      <router-link :to="{ path: '/checkout', query: { total: total }}" class="discount-button">结账</router-link>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Total',
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.total {
  text-align: right;
  margin-top: 24px;
  font-size: 32px;
}

.total span {
  margin-right: 12px;
}

.discount-message {
  margin-top: 8px;
  font-size: 16px;
}

.discount-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
