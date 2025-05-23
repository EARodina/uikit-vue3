<script setup>
import { ref } from 'vue'
import Tabs from '../components/Tabs.vue'

const tabs = [
  {name: 'Photos', label: 'Photos'},
  {name: 'Music', label: 'Music'},
  {name: 'Video', label: 'Video'},
]

const selectedTab1 = ref('Photos')
const selectedTab2 = ref('Music')
const selectedTab3 = ref('Photos')
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <h2 class="heading-2">Default</h2>
  <Tabs
    :names="tabs"
    v-model:selectedTab="selectedTab1"
  >
    <div v-if="selectedTab1 === 'Photos'">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, impedit?</div>
    <div v-if="selectedTab1 === 'Music'">Lorem ipsum dolor sit amet.</div>
    <div v-if="selectedTab1 === 'Video'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa voluptatibus optio molestias exercitationem qui velit itaque. Quidem, aliquid delectus!</div>
  </Tabs>

  <h2 class="heading-2">Colors</h2>
  <Tabs
    :names="tabs"
    v-model:selectedTab="selectedTab2"
    :color="'success'"
  >
    <div v-if="selectedTab2 === 'Photos'">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, impedit?</div>
    <div v-if="selectedTab2 === 'Music'">Lorem ipsum dolor sit amet.</div>
    <div v-if="selectedTab2 === 'Video'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa voluptatibus optio molestias exercitationem qui velit itaque. Quidem, aliquid delectus!</div>
  </Tabs>

  <Tabs
    :names="tabs"
    v-model:selectedTab="selectedTab3"
    :color="'warning'"
  >
    <div v-if="selectedTab3 === 'Photos'">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, impedit?</div>
    <div v-if="selectedTab3 === 'Music'">Lorem ipsum dolor sit amet.</div>
    <div v-if="selectedTab3 === 'Video'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa voluptatibus optio molestias exercitationem qui velit itaque. Quidem, aliquid delectus!</div>
  </Tabs>
</template>