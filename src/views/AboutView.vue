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
    <d-textarea>
      校验IP：Validator.isTrue(StringUtil.isIpv4OrIpv4Segment(haLanBean.getVirtualIp()), CustomerErrorConstants.HA_LAN_VIRTUAL_IP_ILLEGAL, ParameterException.class);
      校验端口：Validator.isTrue(StringUtil.isPort(cpeConntrackBean.getPort()), CustomerErrorConstants.CONNTRACK_PORT_ILLEGAL, ParameterException.class);
    </d-textarea>
  </div>

</template>

<style>

</style>
