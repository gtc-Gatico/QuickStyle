<template>
  <d-input v-model="cmd"/>
  <d-button @click="writer" @keyup.enter="writer">发送</d-button><d-button @click="openApp">开启本地服务</d-button><d-button @click="closeApp">关闭本地服务</d-button>
  <d-textarea id="data" v-model="data" autosize style="max-height: 50vh" @update:modelValue="changeSize($event)"></d-textarea>
</template>

<script setup>
import {ref} from 'vue'
let ws
function initWx(){
  ws = new WebSocket("ws://localhost:80/")
  ws.onopen = function () {
    console.log("websocket:open.");
  };
  ws.onmessage = function(res) {
    data.value += res.data
  }
  ws.onerror = function (res) {
    console.log("websocket:error.");
  }
}

function openApp(){
  writerData("hello")
  window.location.href='icetool://111'
  initWx()
}
function closeApp(){
  writerData("exit")
}
function changeSize(event){
  if (event) {
    console.log(event.target)
    event.target.scrollTop = event.target.scrollHeight
  }

}
initWx()
const cmd = ref('ping baidu.com')
const data = ref('')
function writer() {
  if (ws.readyState == WebSocket.OPEN) {
    ws.send(cmd.value)
    console.log("websocket:send.");
  } else {
    switch (ws.readyState) {
      case WebSocket.CONNECTING:
        // do something
        console.log("WebSocket正在连接.");
        break;
      case WebSocket.OPEN:
        // do something
        break;
      case WebSocket.CLOSING:
        console.log("WebSocket正在关闭.");
        break;
      case WebSocket.CLOSED:
        // do something
        console.log("WebSocket已经关闭.");
      default:
        // this never happens
        break;
    }
  }

}
function writerData(data) {
  if (ws.readyState == WebSocket.OPEN) {
    ws.send(data)
    console.log("websocket:send.");
  } else {
    switch (ws.readyState) {
      case WebSocket.CONNECTING:
        // do something
        console.log("WebSocket正在连接.");
        break;
      case WebSocket.OPEN:
        // do something
        break;
      case WebSocket.CLOSING:
        console.log("WebSocket正在关闭.");
        break;
      case WebSocket.CLOSED:
        // do something
        console.log("WebSocket已经关闭.");

      default:
        // this never happens
        break;
    }
  }

}
</script>

<style scoped>

</style>