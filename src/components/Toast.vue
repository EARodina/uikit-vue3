<script setup>
import { computed, watch } from 'vue';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
  toast: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Boolean
  }
})

const toastClass = computed(() => ({
  'toast_state_success': props.toast.state === 'success',
  'toast_state_warning': props.toast.state === 'warning',
  'toast_state_danger': props.toast.state === 'danger',
  'toast_state_info': props.toast.state === 'info'
}))

const iconName = computed(() => {
  if (props.toast.state === 'success') return'check-circle'
  if (props.toast.state === 'warning') return'x-square'
  if (props.toast.state === 'danger') return'alert-triangle'
  if (props.toast.state === 'info') return'annotation-info'
  return ''
})

watch(() => props.modelValue, (newVal) => {
  setTimeout(() => {
    emits('update:modelValue', false)
  }, 4000)
})
</script>

<template>
 <div class="toast-container" :class="{'is-active': toast.visible}">
  <div class="toast" :class="toastClass">
    <svg class="toast__icon">
      <use :xlink:href="`#${iconName}`"></use>
    </svg>
    <div class="toast__content">
      <p>{{ toast.text }}</p>
    </div>
  </div>
 </div>
</template>

<style lang="scss" scoped>
.toast-container {
  position: fixed;
  top: 20px;
  left: calc(50% + 37px);
  transform: translate(-50%);
  z-index: 100;
  max-width: 220px;
  width: 100%;
  padding: 0 16px;
  opacity: 0;
  visibility: hidden;
  transition-property: opacity, visibility;
  transition-duration: .2s;
  transition-timing-function: ease;

  @media screen and (min-width: 768px) {
    left: 50%;
    max-width: 332px;
  }

  &.is-active {
    opacity: 1;
    visibility: visible;

    .toast:not(.toast_state_danger) {
      animation: toast .2s linear
    }

    .toast.toast_state_danger {
      animation: toast-danger .5s linear
    }
  }
}
.toast {
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 16px 10px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px #1215191f, 0 8px 32px #12151914;

  @media screen and (min-width: 768px) {
    padding: 16px;
    gap: 16px;
  }

  &.toast_state_success {
    .toast__icon {
      fill: var(--success);
      stroke: var(--success);
    }
  }
  &.toast_state_warning {
    .toast__icon {
      fill: var(--warning);
      stroke: var(--warning);
    }
  }
  &.toast_state_danger {
    .toast__icon {
      fill: var(--danger);
      stroke: var(--danger);
    }
  }
  &.toast_state_info {
    .toast__icon {
      fill: var(--info);
      stroke: var(--info);
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  &__content {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: var(--default);
  }
}

@keyframes toast {
  0% {
    transform: none
  }

  50% {
    transform: scale(1.1)
  }

  to {
    transform: none
  }
}

@keyframes toast-danger {
  0% {
    transform: none
  }

  20% {
    transform: translate(-14px)
  }

  40% {
    transform: translate(14px)
  }

  60% {
    transform: translate(-14px)
  }

  80% {
    transform: translate(14px)
  }

  to {
    transform: none
  }
}
</style>