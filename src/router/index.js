import { createRouter, createWebHistory } from "vue-router"
import index from '@/views/index.vue'
import buttons from '@/views/buttons.vue'
import typography from '@/views/typography.vue'
import checkboxes from '@/views/checkboxes.vue'
import radiobuttons from '@/views/radiobuttons.vue'
import progress from '@/views/progress.vue'
import inputs from '@/views/inputs.vue'
import tabs from '@/views/tabs.vue'
import table from '@/views/table.vue'
import alert from '@/views/alerts.vue'
import chips from '@/views/chips.vue'
import toast from '@/views/toast.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/button',
      name: 'Button',
      component: buttons
    },
    {
      path: '/typography',
      name: 'Typography',
      component: typography
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: checkboxes
    },
    {
      path: '/radiobutton',
      name: 'Radiobutton',
      component: radiobuttons
    },
    {
      path: '/progress',
      name: 'Progress',
      component: progress
    },
    {
      path: '/input',
      name: 'Input',
      component: inputs
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: tabs
    },
    {
      path: '/table',
      name: 'Table',
      component: table
    },
    {
      path: '/alerts',
      name: 'Alert',
      component: alert
    },
    {
      path: '/chips',
      name: 'Chips',
      component: chips
    },
    {
      path: '/toast',
      name: 'Toast',
      component: toast
    },
  ]
})

export default router