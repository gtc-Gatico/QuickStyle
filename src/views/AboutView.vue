<script setup>
import { Message } from 'vue-devui';


</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <d-button shape="round" size="lg" v-ripple="{ duration: 800 }" @click="Message('666')">666</d-button>

  </div>

</template>

<style>

</style>
