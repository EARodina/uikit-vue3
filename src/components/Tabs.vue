<script setup>
const emit = defineEmits(['update:selectedTab'])

const props = defineProps({
  names: {
    type: Array,
    required: true
  },
  selectedTab: {
    type: String,
    required: false
  },
  color: {
    type: String,
    default: 'default'
  }
})

const clickOnTab = (tabName) => {
  emit('update:selectedTab', tabName)
}
</script>

<template>
  <div class="tab-nav">
    <span 
      v-for="tab in names" 
      :key="tab.name" 
      :class="['tab-nav__item', {'selected': tab.name === selectedTab}]"
      :style="{'background': tab.name === selectedTab ? `var(--${color})` : ''}"
      @click="clickOnTab(tab.name)"
    >
      {{ tab.label }}
    </span>
  </div>
  <div class="tab-content">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  .tab {
    &-nav {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
      padding: 4px;
      background-color: #27272a;
      border-radius: 12px;
      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        border-radius: 8px;
        padding: 0 8px;
        font-size: 16px;
        color: #a1a1aa;
        cursor: pointer;
        z-index: 1;
        &:hover {
          color: #727274;
          transition: 0.2s;
        }
        &.selected {
          // background: #3f3f46;
          box-shadow: 0px 0px 5px 0px rgba(0,0,0,.05),0px 2px 10px 0px rgba(0,0,0,.2),inset 0px 0px 1px 0px hsla(0,0%,100%,.15);
          color: #fff;
        }
      }
    }
    &-content {
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 7px;
      background: #fff;
    }
  }
</style>