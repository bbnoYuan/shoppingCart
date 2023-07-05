<template>
  <div class="login">
    <h2 class="login-title">Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="input-group">
        <input type="text" class="input-field" placeholder="Username" required>
      </div>
      <div class="input-group">
        <input type="password" class="input-field" placeholder="Password" required>
      </div>
      <button type="submit" class="login-button">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // 重定向到商品页面
      this.$router.push('/products');
    }
  }
}
</script>

<style>
.login {
  text-align: center;
}

.login-title {
  font-size: 2em; /* 设置标题字体大小 */
  margin-bottom: 16px;
}

.login-form {
  display: inline-block;
  text-align: left;
}

.input-group {
  margin-bottom: 10px;
}

.input-field {
  font-size: 1.2em; /* 设置输入框字体大小 */
  padding: 10px; /* 设置输入框内边距 */
  width: 100%; /* 设置输入框宽度 */
}

.login-button {
  background-color: #4CAF50;
  display: block;
  width: 100%;
  font-size: 1.2em; /* 设置按钮字体大小 */
  padding: 10px; /* 设置按钮内边距 */
  cursor: pointer;
}
</style>
