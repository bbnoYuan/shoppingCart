<template>
  <section class="cart">
    <ul class="list-header">
      <li>序号</li>
      <li>名称</li>
      <li>图片</li>
      <li>数量</li>
      <li>价格</li>
    </ul>
    <ul class="list-body">
      <li v-for="(item, index) in carList" :key="index">
        <div>{{index}}</div>
        <div>{{item.title}}</div>
        <div><img :src="item.img" alt=""></div>
        <div>{{item.count}}</div>
        <div>{{item.count * item.price}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Cart',
  props: {
    carList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cart .list-header {
	display: flex;
}
.cart .list-header li{
	flex: 1;
	border-top: 1px solid #c6c6c6;
	border-left: 1px solid #c6c6c6;
	border-bottom: 1px solid #c6c6c6;
	text-align: center;
	height: 50px;
	line-height: 50px;
	font-weight: bold;
}

.cart .list-body li{
	display: flex;
	border-top: 1px solid #c6c6c6;
	height: 60px;
	line-height: 44px;
	text-align: center;
}
.cart .list-body li:first-child{
	border-top: 1px none;
}
.cart .list-body li:last-child {
	border-bottom: 1px solid #c6c6c6;
}
.cart .list-body li > div{
	flex: 1;
	border-left: 1px solid #c6c6c6;
	padding: 8px;
}
.cart .list-header li:last-child,
.cart .list-body li > div:last-child{
	border-right: 1px solid #c6c6c6;
}
.cart .list-body li > div img {
	width: 45px;
}
</style>
