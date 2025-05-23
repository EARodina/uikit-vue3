<script setup>
import { ref, computed } from 'vue'
import Alert from '../components/Alert.vue'

const list = ref([
  {title: 'Title', message: 'Additional description and information about copywriting.', type: 'default', icon: false, closable: true, isShow: true},
  {title: 'Info Text', message: 'Info Description Info Description Info Description Info Description.', type: 'info', icon: true, closable: true, isShow: true},
  {title: 'Success Text', message: 'Success Description Success Description Success Description.', type: 'success', icon: true, closable: true, isShow: true},
  {title: 'Warning Text', message: 'Warning Description Warning Description Warning Description Warning Description.', type: 'warning', icon: true, closable: false, isShow: true},
  {title: 'Error Text', message: 'Error Description Error Description Error Description Error Description.', type: 'danger', icon: true, closable: true, isShow: true}
])

const visibleAlerts = computed(() => list.value.filter(item => item.isShow))

const closeAlert = (el) => {
  const target = list.value.find(item => item === el)
  target.isShow = false
}
</script>

<template>
  <h1 class="heading-1">Alerts</h1>
  <div class="flex flex-column gap-12">
    <Alert 
      v-for="(item, idx) in visibleAlerts"
      :key="idx"
      :alert="item"
      @close="closeAlert(item)"
    />
  </div>
</template>