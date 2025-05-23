<script setup>
import { ref } from 'vue'
import Sidebar from './components/Layout/Sidebar.vue'
import SvgSprite from './components/SvgSprite.vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <div class="container">
    <Sidebar 
      :open-sidebar="isOpenMenu"
      @toggle="toggleMenu"
    />
    <div :class="['content', {'content_full': !isOpenMenu}]">
      <router-view></router-view>
    </div>
  </div>

  <SvgSprite />
</template>

<style lang="scss">
@import "./styles/global.scss";

.content {
  padding: 10px 30px 10px 90px;
  
  @media screen and (max-width: 1023px) {
    margin-left: 0;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 250px;
    width: calc(100% - 250px);
    padding: 10px 30px;
    max-width: 1400px;
    min-height: 100vh;
    transition: all .3s ease;
    
    &_full {
      left: 102px;
      width: calc(100% - 88px);
    }
  }
}
</style>
