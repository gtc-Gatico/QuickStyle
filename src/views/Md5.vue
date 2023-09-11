<script setup>
import {createApp, ref, computed} from 'vue';
import md5 from 'js-md5'

const app = createApp();
// 1. 引入你需要的组件
import {Field, CellGroup} from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import 'vant/es/toast/style';

app.use(Field);
app.use(CellGroup);


const str = ref('');
const md5_str1 = ref('');
const md5_str2 = ref('');

const salt = ref('');
const salt_format = ref('$0{$1}');

const res = computed(()=>{
  md5_str1.value = md5(str.value)
  md5_str2.value = md5(md5_str1.value)
  return md5(salt_format.value.replace("$0", md5_str2.value).replace("$1", salt.value))
});



</script>
<template>
  <van-cell-group inset>
    <van-field type="textarea" autosize v-model="str" label="加密数据：" placeholder="要加密的内容"/>
    <van-field type="textarea" autosize v-model="md5_str1" label="一次加密：" placeholder="一次加密的内容"/>
    <van-field type="textarea" autosize v-model="md5_str2" label="二次加密$0：" placeholder="二次加密的内容"/>
    <van-field type="text" v-model="salt" label="盐$1：" placeholder="盐"/>
    <van-field type="text" v-model="salt_format" label="加盐格式：" placeholder="$0{$1}" value="$0$1"/>
  </van-cell-group>
  <van-cell-group inset>
    <van-field type="textarea" autosize v-model="res" label="结果："/>
  </van-cell-group>
</template>
<style scoped>

</style>