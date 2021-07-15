<template>
    <div class="my-5">
        <div v-if="items.length">
            <h2 class="message mb-3">{{title}}</h2>
            <ProductGrid :items="items"/>
        </div>
        <h3 v-else class="message">Nessun contenuto trovato, effettua una ricerca diversa</h3>
    </div>
</template>

<script>
import ProductGrid from './ProductGrid.vue';

export default {
    name: 'SearchView',
    components: {
        ProductGrid
    },
    props: {
        items: Array,
        title: String,
    }
}
</script>

<style scoped lang="scss">
.message{
    color: white;
}
</style>