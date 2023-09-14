<script setup>
import {ref} from 'vue'
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
const themeName = ref("")
const themeService = ThemeServiceInit({infinityTheme}, 'infinityTheme');

const changeTheme = (index) => {
  themeService.applyTheme(themeList.value[index].theme);
};
</script>

<template>
  <d-layout style="height: 100vh;">
    <d-header class="dheader">
      <d-row>
        <d-col :span="18">
          <d-menu mode="horizontal">
            <d-menu-item key="home">
              <template #icon>
                <i class="icon-homepage"></i>
              </template>
              <RouterLink to="/">主页</RouterLink>
            </d-menu-item>
            <d-menu-item key="md5">
              <RouterLink to="/md5">Md5</RouterLink>
            </d-menu-item>
            <d-menu-item key="localserver">
              <RouterLink to="/localserver">本地服务</RouterLink>
            </d-menu-item>
            <d-menu-item key="about" >
              <RouterLink to="/about">关于</RouterLink>
            </d-menu-item>
          </d-menu>
        </d-col>
        <d-col :span="6">
          <d-row justify="end" :span="24" style="background: transparent">
            <d-menu mode="horizontal" >
              <d-menu-item key="theme">
                <d-sub-menu title="主题">
                  <d-menu-item v-for="(item, index) in themeList" key="{{item.name}}" @click="changeTheme(index)">
                    {{ item.name }}
                  </d-menu-item>
                </d-sub-menu>
              </d-menu-item>
            </d-menu>
          </d-row>
        </d-col>
      </d-row>
    </d-header>
    <d-content class="dcontent">
      <RouterView/>
    </d-content>
  </d-layout>
</template>

<style scoped>
.dheader, .dfooter {
  flex: none;
  color: #fff;
  background: var(--devui-global-bg-normal);
  text-align: center;
  line-height: 40px;
}

.dcontent {
  height: max-content;
  text-align: center;
  background: var(--devui-global-bg-normal)
}
</style>
