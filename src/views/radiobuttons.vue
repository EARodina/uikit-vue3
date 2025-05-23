<script setup>
import { ref } from 'vue'
import Radiobutton from '@/components/Radiobutton.vue'

const footballClubs = ref([
  {name: 'CSKA Moscow', id: 'f1'},
  {name: 'Spartak', id: 'f2'},
  {name: 'Real Madrid', id: 'f3'},
  {name: 'Milan', id: 'f4'}
])

const selectedClub = ref('')
const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p style="margin-bottom: 10px;">Selected Club: {{ selectedClub }}</p>
    <div v-for="club in footballClubs" :key="club.id">
      <Radiobutton 
        :label="club.name" 
        :id="club.id" 
        :name="'club'" 
        :value="club.name"
        v-model:checkedValue="selectedClub"
      />
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Radiobutton 
      :label="'Radiobutton Disabled'" 
      :id="'RadiobuttonDisabled'" 
      :name="'Radiobutton Disabled'" 
      :value="'Radiobutton Disabled'"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>