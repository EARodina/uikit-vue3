<script setup>
const props = defineProps({
  image: {
    type: Boolean,
    required: false
  },
  srcImage: {
    type: String,
    required: false
  },
  columnTitle: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="table-column">
    <span class="table-column__title" v-if="columnTitle">{{ columnTitle }}: </span>
    <slot v-if="!image"></slot>
    <img v-else :src="srcImage" alt="" class="table-column-image">
  </div>
</template>

<style lang="scss" scoped>
.table-column {
  padding: 15px 0;
  position: relative;
  &-image {
    max-width: 100%;
    height: 100px;
    @media screen and (max-width: 767px) {
      max-width: 200px;
    }
  }
  &__title {
    margin-right: 5px;
    display: none;
    @media screen and (max-width: 767px) {
      display: inline-block;
    }
  }
}
</style>

