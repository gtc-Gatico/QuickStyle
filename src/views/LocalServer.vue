<template>
  <d-input v-model="cmd"/>
  <d-button @click="writer" @keyup.enter="writer">发送</d-button>
  <d-textarea v-model="data" autosize ></d-textarea>
</template>

<script setup>
import {ref} from 'vue'
const ws = new WebSocket("ws://localhost:11111/echo")
console.log(ws)
ws.onopen = function () {
  console.log("websocket:open.");
};
ws.onmessage = function(res) {
  data.value = res.data
}
ws.onerror = function (res) {
  console.log("err:" + res);
}
const cmd = ref('')
const data = ref('')
function writer() {
  console.log(`{cmd: "${cmd.value}", width: 500}`)
  ws.send(`{cmd: "${cmd.value}", width: 500}`)
}

</script>

<style scoped>

</style>