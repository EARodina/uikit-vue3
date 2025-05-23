<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle'])

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true
  }
})

const links = ref([
  {name: 'Typography', href: '/typography', icon: 'type'},
  {name: 'Button', href: '/button', icon: 'button'},
  {name: 'Checkbox', href: '/checkbox', icon: 'checkbox'},
  {name: 'Radiobutton', href: '/radiobutton', icon: 'radio'},
  {name: 'ProgressBar', href: '/progress', icon: 'progress'},
  {name: 'Input', href: '/input', icon: 'input'},
  {name: 'Tabs', href: '/tabs', icon: 'tabs'},
  {name: 'Table', href: '/table', icon: 'table'},
  {name: 'Alerts', href: '/alerts', icon: 'alert'},
  {name: 'Chips', href: '/chips', icon: 'chips'},
  {name: 'Toast', href: '/toast', icon: 'toast'},
])
</script>

<template>
  <div :class="['sidebar', {'sidebar_isopen': openSidebar}]">
    <div class="sidebar__header">
      <span class="sidebar__logo">
        <svg width="24" height="24">
          <use xlink:href="#logo"></use>
        </svg>
        <span class="hidden">UI Kit</span>
      </span>
      <div class="sidebar-toggle" @click="emit('toggle')">
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="16" height="16"><path d="M13.1,19a1,1,0,0,1-.7-1.71L17,12.71a1,1,0,0,0,0-1.42L12.4,6.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0L18.4,9.88a3,3,0,0,1,0,4.24l-4.59,4.59A1,1,0,0,1,13.1,19Z"/><path d="M6.1,19a1,1,0,0,1-.7-1.71L10.69,12,5.4,6.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0l6,6a1,1,0,0,1,0,1.42l-6,6A1,1,0,0,1,6.1,19Z"/></svg>
      </div>
    </div>
    <router-link 
      v-for="link in links" 
      :key="link.name"
      :to="link.href"
      class="sidebar__link"
    >
    <svg width="20" height="20">
      <use :xlink:href="`#${link.icon}`"></use>
    </svg>
    <span class="hidden">{{ link.name }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  width: 70px;
  height: 100%;
  padding: 14px 8px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transition: 0.2s;
  &_isopen {
    width: 190px;

    .hidden {
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    width: 102px;
    padding: 20px;

    &_isopen {
      width: 250px;
    }
  }

  &__header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;

    span {
      font-weight: 600;
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    svg {
      width: 55px;
      flex-shrink: 0;
      @media screen and (min-width: 768px) {
        width: 60px;
      }
    }
    span {
      white-space: nowrap;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 17px;
    border-radius: 6px;
    transition: 0.2s;
    font-weight: bold;
    &:hover {
      color: var(--primary);
      background-color: #F5F6F8;
    }
    svg {
      flex-shrink: 0;
      stroke: currentColor;
    }

    @media screen and (min-width: 768px) {
      padding: 10px 20px;
      margin-bottom: 10px;
    }
  }
  &-toggle {
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--primary);
    transition: all .3s ease;
    color: #fff;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      right: -30px;
    }

    svg {
      fill: currentColor;
    }
  }
}
.hidden {
  opacity: 0;
  pointer-events: none;
  transition: .2s;
}
.router-link-exact, 
.router-link-exact-active {
  color: var(--primary);
  background-color: #F5F6F8;
}
</style>