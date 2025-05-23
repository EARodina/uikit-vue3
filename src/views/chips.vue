<script setup>
import Chip from '../components/Chip.vue'

const change = (isActiveState) => {
  console.log(isActiveState)
}
</script>

<template>
  <h1 class="heading-1">Chips</h1>
  <h2 class="heading-3">Default</h2>
  <Chip text="React" @handle-click="change" />

  <h2 class="heading-3">Options</h2>
  <div class="flex flex-column gap-12">
    <Chip 
      text="Vue"
      iconLeft="star"
      @handle-click="change"
    />
    <Chip 
      text="React"
      :iconRight="'heart'"
      is-active
      @handle-click="change"
    />
    <Chip 
      text="Angular"
      :iconLeft="'star'"
      :iconRight="'pencil'"
      @handle-click="change"
    />
  </div>

  <h2 class="heading-3">Disabled</h2>
  <Chip text="Iphone"
    :iconLeft="'star'"
    :iconRight="'pencil'"
    disabled
    @handle-click="change"
  />
</template>