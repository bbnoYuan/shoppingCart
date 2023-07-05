<template>
  <header class="header">
    <img class="header-logo" src="../assets/index.png" alt="Shop Logo" />
    <h1 class="header-title">H1 Mall</h1>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px;
  margin-bottom: 50px;
}

.header-logo {
  height: 50px;
  margin-right: 20px;

}

.header-title {
  flex-grow: 1;
  font-size: 50px;
  text-align: center;
  margin: 0;
}
</style>
