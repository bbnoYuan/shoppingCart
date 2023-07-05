<template>
  <section class="product" v-for="(productCategory, index) in productCategories" :key="index">
    <h2>{{ productCategory.categoryName }}</h2>
    <ul class="list">
      <li v-for="(item, itemIndex) in productCategory.products" :key="itemIndex">
        <img :src="item.img" alt="">
        <div class="title">{{ item.title }}</div>
        <div class="price">价格：{{ item.price }}</div>
        <div class="btn" @click="handleNew(index, itemIndex)" v-if="!item.count">添加到购物车</div>
        <div class="btn-box" v-else>
          <div class="btn" @click="handleSub(index, itemIndex)">-</div>
          <div>{{ item.count }}</div>
          <div class="btn" @click="handleAdd(index, itemIndex)">+</div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'ProductList',
  props: {
    productCategories: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const handleNew = (categoryIndex, itemIndex) => {
      props.productCategories[categoryIndex].products[itemIndex].count += 1;
    };

    const handleSub = (categoryIndex, itemIndex) => {
      props.productCategories[categoryIndex].products[itemIndex].count -= 1;
    };

    const handleAdd = (categoryIndex, itemIndex) => {
      props.productCategories[categoryIndex].products[itemIndex].count += 1;
    };

    return {
      handleNew,
      handleSub,
      handleAdd,
    };
  },
};
</script>


<style scoped>
.btn {
	text-align: center;
	width: 200px;
	background: #4897dd;
	border-radius: 8px;
	height: 32px;
	line-height: 32px;
	color: #fff;
	cursor: pointer;
}
.btn:hover {
	background-color: #277ac3;
}
.product {
	margin-bottom: 24px;
}
.product .list {
	display: flex;
}
.product .list li {
	width: 220px;
	padding: 12px;
	border: 1px solid #ebebeb;
	border-radius: 16px;
	margin-right: 12px;
}
.product .list li .title {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 8px;
}
.product .list li .price {
	font-size: 22px;
	margin-bottom: 8px;
}
.product .list li img{
	width:220px;
}
.product .list li .btn-box {
	display: flex;
}
.product .list li .btn-box .btn {
	width: 40px;
}
.product .list li .btn-box > div {
	flex: 1;
	text-align: center;
	line-height: 32px;
}
</style>
