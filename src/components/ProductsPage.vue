<template>
  <div>
    <ProductList :productCategories="productCategories" />
    <Cart :carList="carList" />
    <Total :total="total" />
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import MyHeader from './MyHeader.vue'
import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import Total from './Total.vue';

export default {
  components: {
	MyHeader,
    ProductList,
    Cart,
    Total,
  },
  setup() {
    const productCategories = reactive([
          {
            categoryName: "iPhone",
            products: [
              { title: 'iPhone 14', price: 5999, count: 0, img: 'src/assets/14.jpg' },
              { title: 'iPhone 14 Plus', price: 6999, count: 0, img: 'src/assets/14plus.jpg' },
    		  { title: 'iPhone 14 Pro', price: 7999, count: 0, img: 'src/assets/14pro.jpg' },
    		  { title: 'iPhone 14 Pro Max', price: 8999, count: 0, img: 'src/assets/14promax.jpg' }
            ]
          },
          {
            categoryName: "iPad",
            products: [
              { title: 'iPad 10', price: 3599, count: 0, img: 'src/assets/ipad2022.jpg' },
    		  { title: 'iPad mini 6', price: 3999, count: 0, img: 'src/assets/ipadmini6.jpg' },
              { title: 'iPad Air 5', price: 4799, count: 0, img: 'src/assets/ipadair5.jpg' },
    		  { title: 'iPad Pro 2022 11\"', price: 6799, count: 0, img: 'src/assets/ipadpro112022.jpg' }
            ]
          },
    	  {
    	    categoryName: "MacBook",
    	    products: [
    	      { title: 'MacBook Air 13\"', price: 8999, count: 0, img: 'src/assets/macbookair13.jpg' },
    	      { title: 'MacBook Air 15\"', price: 10499, count: 0, img: 'src/assets/macbookair15.jpg' },
    	      { title: 'MacBook Pro 14\"', price: 15999, count: 0, img: 'src/assets/macbookpro14.jpg' },
    		  { title: 'MacBook Pro 16\"', price: 19999, count: 0, img: 'src/assets/macbookpro16.jpg' }
    	    ]
    	  }
        ]);
    
        const total = computed(() => {
          let sum = 0;
          productCategories.forEach(category => {
            category.products.forEach(product => {
              sum += product.count * product.price;
            });
          });
          return sum;
        });
    
        const carList = computed(() => {
          const cartItems = [];
          productCategories.forEach(category => {
            category.products.forEach(product => {
              if (product.count) {
                cartItems.push(product);
              }
            });
          });
          return cartItems;
        });
    return {
      productCategories,
      total,
      carList,
    };
  },
};
</script>
