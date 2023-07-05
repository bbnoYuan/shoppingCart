<template>
  <div>
    <MyHeader :myHeader="myHeader" />
    <router-view />
  </div>
</template>

<script>
import { reactive } from 'vue';
import MyHeader from './components/MyHeader.vue';

export default {
  name: 'App',
  components: {
    MyHeader,
  },
  setup() {
    const myHeader = reactive({
      title: 'My Shopping App'
    });

    return {
      myHeader,
    };
  },
};
</script>
