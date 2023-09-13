<script setup>
import {NotificationService} from 'vue-devui/notification';
import {Message} from 'vue-devui/message';

function showService() {
  NotificationService.open({
    content: '通知框消息内容',
    onClose: () => {
      Message.info("6666")
    }
  });
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <d-button shape="round" size="lg" @click="showService()">666</d-button>
  </div>

</template>

<style>

</style>
