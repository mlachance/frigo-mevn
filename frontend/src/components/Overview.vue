<template>
  <div class="overview">
    <h1>Hello, Marianne</h1>
    <SearchFilter />
    <Add />
    <ListItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchFilter from './Items/SearchFilter.vue'
import Add from './Items/Add.vue'
import ListItem from './Items/ListItem.vue'

export default defineComponent({
  name: 'App',
  components: {
    SearchFilter,
    Add,
    ListItem
  }
})
</script>

<style scoped>

</style>