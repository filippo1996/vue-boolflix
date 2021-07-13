<template>
  <header>
      Logo HelloWorld
      <SearchBar/>
  </header>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
    name: 'Header',
    components: {
        SearchBar
    }
}
</script>

<style scoped lang="scss">

</style>