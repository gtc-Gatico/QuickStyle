<script setup>
import { ref } from 'vue'
import {RouterLink, RouterView} from 'vue-router'
import {ThemeServiceInit, infinityTheme, provenceTheme, sweetTheme, deepTheme, galaxyTheme} from 'devui-theme';
import 'vue-devui/style.css';
const themeList = ref([
  {name: "无限", theme: infinityTheme},
  {name: "蜜糖", theme: sweetTheme},
  {name: "紫罗兰", theme: provenceTheme},
  {name: "深邃夜空", theme: deepTheme},
  {name: "追光", theme: galaxyTheme}
])

const themeService = ThemeServiceInit({infinityTheme}, 'infinityTheme');

const changeTheme = (index) => {
  themeService.applyTheme(themeList.value[index].theme);
};
</script>

<template>
  <d-layout>
    <d-header class="dheader">
      <d-menu mode="horizontal">
        <d-menu-item key="home">
          <template #icon>
            <i class="icon-homepage"></i>
          </template>
          <RouterLink to="/">Home</RouterLink>
        </d-menu-item>
        <d-menu-item key="md5">
          <RouterLink to="/md5">Md5</RouterLink>
        </d-menu-item>
        <d-menu-item key="about" route="">
          <RouterLink to="/about">About</RouterLink>
        </d-menu-item>
        <d-menu-item>
          <d-sub-menu title="主题" key="theme">
            <d-menu-item v-for="(item, index) in themeList" key="{{item.name}}" @click="changeTheme(index)"> {{item.name}} </d-menu-item>
          </d-sub-menu>
        </d-menu-item>
      </d-menu>

    </d-header>
    <d-content class="dcontent">
      <RouterView/>
    </d-content>
  </d-layout>
</template>

<style scoped>
.dheader, .dfooter {
  background: #333854;
  color: #fff;
  text-align: center;
  line-height: 40px;
}

.dcontent {
  height: 100vh;
  text-align: center;
  background: var(--devui-global-bg-normal)
}
</style>
