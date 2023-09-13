<script setup>
import {ref, computed} from 'vue';
import md5 from 'js-md5'

const str = ref('');
const md5_str1 = ref('');
const md5_str2 = ref('');

const salt = ref('');
const salt_format = ref('$0{$1}');

const res = computed(() => {
  if (str.value !== "") {
    md5_str1.value = md5(str.value)
    md5_str2.value = md5(md5_str1.value)
    return md5(salt_format.value.replace("$0", md5_str2.value).replace("$1", salt.value))
  }
  md5_str1.value = ""
  md5_str2.value = ""
});

</script>
<template>
  <d-col :span="24" class="devui-col">
    <d-row justify="center">
      <d-col :span="2">
        <p>加密数据:</p>
      </d-col>
      <d-col :span="8">
        <d-textarea autofocus v-model="str" placeholder="要加密的内容"/>
      </d-col>
    </d-row>
    <d-row justify="center">
      <d-col :span="2">
        <p>一次加密:</p>
      </d-col>
      <d-col :span="8">
        <d-textarea v-model="md5_str1" placeholder="一次加密的内容"/>
      </d-col>
    </d-row>
    <d-row justify="center">
      <d-col :span="2">
        <p>二次加密$0:</p>
      </d-col>
      <d-col :span="8">
        <d-textarea v-model="md5_str2" placeholder="二次加密的内容"/>
      </d-col>
    </d-row>
    <d-row justify="center">
      <d-col :span="2">
        <p>盐$1:</p>
      </d-col>
      <d-col :span="8">
        <d-input v-model="salt" placeholder="盐"/>
      </d-col>
    </d-row>
    <d-row justify="center">
      <d-col :span="2">
        <p>加盐格式:</p>
      </d-col>
      <d-col :span="8">
        <d-input v-model="salt_format"/>
      </d-col>
    </d-row>
    <d-row justify="center">
      <d-col :span="2">
        <p>结果:</p>
      </d-col>

      <d-col :span="8">
        <d-textarea v-model="res"/>
      </d-col>
    </d-row>
  </d-col>

</template>
<style scoped>
.devui-col {
  text-align: center;
  line-height: 60px;
}
</style>