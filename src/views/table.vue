<script setup>
import { ref, computed } from 'vue'
import BaseTable from '../components/Table/BaseTable.vue'
import TableRow from '../components/Table/TableRow.vue'
import TableColumn from '../components/Table/TableColumn.vue'
import Button from '../components/Button.vue'

const tableHeads = ['Id', 'Author', 'Title', 'Cover', '']
const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const sortField = ref('id')
const typeSort = ref('desc')

const books = ref([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://content.img-gorod.ru/pim/products/images/ed/1c/018fa1c1-f4e2-7c4f-b3ea-e96d6a06ed1c.jpg?width=608&height=867&fit=bounds',
    bg: '#FFA26B'
  },
  {
    id: 12,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C'
  },
  {
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://imo10.labirint.ru/books/263508/cover.jpg/363-0',
    bg: '#00C48C'
  }
])

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = typeSort.value === 'desc' ? -1 : 1
    let aValue = a[sortField.value]
    let bValue = b[sortField.value]
    if (aValue === undefined || bValue === undefined) return 0
    if (typeof aValue === 'string') aValue = aValue.toLowerCase()
    if (typeof bValue === 'string') bValue = bValue.toLowerCase()
    return (typeof aValue === 'number' && typeof bValue === 'number') 
        ? (aValue - bValue) * modifier 
        : aValue.localeCompare(bValue) * modifier
  })
})

const setSort = (name) => {
  if(name === 'Cover') return
  if(sortField.value === name) {
      typeSort.value = typeSort.value === 'asc' ? 'desc' : 'asc'
  } else {
      sortField.value = name
  }
}
</script>

<template>
  <h1 class="heading-1">Table</h1>
  <BaseTable 
    :head="tableHeads"
    :columnTemplates="tableSizeColumns"
    @sorting="setSort"
  >
    <TableRow 
      v-for="book of booksSorting" 
      :key="book.id" 
      :columnTemplates="tableSizeColumns" 
    >
      <TableColumn :columnTitle="tableHeads[0]">{{ book.id }}</TableColumn>
      <TableColumn :columnTitle="tableHeads[1]">{{ book.author }}</TableColumn>
      <TableColumn :columnTitle="tableHeads[2]">{{ book.title }}</TableColumn>
      <TableColumn :srcImage="book.image" image></TableColumn>
      <TableColumn>
        <Button label="Read Online" />
      </TableColumn>
    </TableRow>
  </BaseTable>
</template>