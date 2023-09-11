<script setup>
import { createApp } from 'vue';
// 1. 引入你需要的组件
import { Button ,showToast} from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import 'vant/es/toast/style';

const app = createApp();
function seaHello(message) {
  showToast(message)
}

// 3. 注册你需要的组件
app.use(Button);


</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button @click="seaHello('你好')">你好</van-button>
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
