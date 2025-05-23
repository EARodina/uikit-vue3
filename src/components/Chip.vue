<script setup>
import { ref } from 'vue';

const emits = defineEmits(['handleClick'])

const props = defineProps({
  iconLeft: {
    type: String,
  },
  iconRight: {
    type: String,
  },
  text: {
    type: String,
    required: false
  },
  isActive: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
})

const activeChip = ref(props.isActive)
const disabledChip = ref(props.disabled)

const clickChip = () => {
  activeChip.value = !activeChip.value
  emits('handleClick', activeChip.value)
}
</script>

<template>
  <button 
    :class="['chip', {'is-active': activeChip}]" 
    :disabled="disabledChip"
    @click="clickChip"
  >
    <svg v-if="iconLeft" class="chip__icon">
      <use :xlink:href="`#${iconLeft}`"></use>
    </svg>
    <span class="chip__text">{{ text }}</span>
    <svg v-if="iconRight" class="chip__icon">
      <use :xlink:href="`#${iconRight}`"></use>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background-color: #E6EAEF;
  border-radius: 10px;
  color: var(--default);
  font-weight: 500;
  transition: background-color .2s ease,transform .2s ease;
  border: none;
  cursor: pointer;
  &_size-l {
    padding: 12px 18px;
    font-weight: 600
  }

  &:hover {
    background-color: #dee3ea;
  }
  &:focus-visible {
    outline: 1px solid #df97a4;
    outline-offset: 2px;
    transition: outline-offset 0s,outline 0s;
  }
  &:active {
    transform: scale(.95)
  }
  &:disabled {
    background-color: transparent;
    border: 1px solid #e6eaef;
    pointer-events: none;
    color: #a4afc0;
  }
  &.is-active {
    background-color: var(--default);
    color: #fff;

    &:hover {
      background-color: #282e39;
    }
  }

  &__icon {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }
  &__text {
    font-size: 16px;
    line-height: 20px;
  }
}

</style>