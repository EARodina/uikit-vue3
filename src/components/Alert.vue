<script setup>
import { computed } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps({
  alert: {
    type: Object,
    required: true
  }
})

const alertClass = computed(() => ({
  'alert_info': props.alert.type === 'info',
  'alert_success': props.alert.type === 'success',
  'alert_danger': props.alert.type === 'danger',
  'alert_warning': props.alert.type === 'warning',
}))
</script>

<template>
  <div  class="alert" :class="alertClass">
    <svg v-if="alert.icon" width="20" height="20" class="alert__icon">
      <use xlink:href="#annotation-info"></use>
    </svg>
    <div class="alert__content">
      <p class="alert__title">{{ alert.title }}</p>
      <p class="alert__description">{{ alert.message }}</p>
    </div>
    <button 
      v-if="alert.closable" 
      type="button" 
      class="button-reset alert__close"
      @click="emit('close')"
    >
      <svg width="16" height="16">
        <use xlink:href="#x-close"></use>
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  position: relative;
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  background-color: var(--default);
  &_full-width {
    width: 100%;
  }
  &_info {
    background-color: var(--info);
  }
  &_success {
    background-color: var(--success);
  }
  &_danger {
    background-color: var(--danger);
  }
  &_warning {
    background-color: var(--warning);
  }

  &__icon {
    fill: #fff;
    flex-shrink: 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex-grow: 1;
  }
  &__title{
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
  }
  &__description{
    font-size: 14px;
    line-height: 18px;
    color: #fff9;
  }
  &__close {
    width: 14px;
    height: 14px;

    svg {
      fill: #fff;
    }
  }
}
</style>