<script setup>
const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  group: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'checkbox'
  },
})

const handleClick = (event) => {
  if (props.group) {
    emits('updateCheckboxGroup', {optionId: props.id, checked: event.target.checked})
  } else {
    emits('update:checked', event.target.checked)
  }
}
</script>

<template>
  <div :class="[{'switch-container': type === 'switch'}]">
    <input 
      :class="[{'checkbox': type === 'checkbox'}, {'switch': type === 'switch'}]"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="handleClick($event)"
    >
    <label :for="id">{{ label }}</label>
    <label v-if="type === 'switch'" :for="id" class="switch__label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }
  & + label::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 6px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &:checked + label::before {
    border-color: var(--primary);
    background-color: var(--primary);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: var(--primary-hover);
  }
  &:not(:disabled):active + label::before {
    background-color: var(--primary);
    border: 1px solid #ECEBED;
  }
  &:focus + label::before {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  }
  &:focus:not(:checked) + label::before {
    border-color: var(--primary);
  }
  &:disabled + label {
    cursor: default;
  }
  &:disabled + label::before {
    background-color: #e9ecef;
    border: 1px solid #ECEBED;
  }
}

.switch {
  height: 0;
	width: 0;
	visibility: hidden;
  position: absolute;
  z-index: -1;
  opacity: 0;
  &-container {
    display: flex;
    align-items: center;
  }
  &__label {
    margin-left: 10px;
  }
  & + label {
    position: relative;
    display: block;
    width: 50px;
    height: 35px;
    background: #fafafa;
    border: 1px solid #adb5bd;
    text-indent: -9999px;
    border-radius: 100px;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 5px;
      width: 26px;
      height: 26px;
      background: #fff;
      background: var(--primary);
      border-radius: 90px;
      transition: 0.3s;
      transform: translateY(-50%);
    }
  }
  &:checked {
    & + label {
      background: var(--primary);
      &:after {
        background: #fff;
        left: calc(100% - 5px);
        transform: translateX(-100%) translateY(-50%);
      }
      &:active:after {
        width: 33px;
      }
    }
  }
} 
</style>