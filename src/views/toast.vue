<script setup>
import { ref } from 'vue';
import Toast from '../components/Toast.vue'
import Button from '@/components/Button.vue'

const items = ref([
  {id: 1, state: 'success', text: 'Data saved', visible: false},
  {id: 2, state: 'warning', text: 'Warning!', visible: false},
  {id: 3, state: 'danger', text: 'Danger!', visible: false},
  {id: 4, state: 'info', text: 'Info', visible: false}
])

const openToast = (id) => {
  items.value.find(item => item.id === id).visible = true
}
</script>

<template>
  <h1 class="heading-1">Toast</h1>
  <div v-for="item in items" :key="item.id" class="flex flex-column gap-12">
    <div>
      <h2 class="heading-3">State: {{item.state}}</h2>
      <Toast 
        :toast="item"
        v-model="item.visible"
      />
      <Button @test="openToast(item.id)" label="Open toast" />
    </div>
  </div>
</template>