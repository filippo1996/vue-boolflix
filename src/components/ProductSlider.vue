<template>
    <div>
        <div v-if="items.length">
            <h2>{{titleCategory}}</h2>
            <ul>
                <li v-for="(movie, index) in items" :key="index">
                    <Card :data="movie"/>
                </li>
            </ul>
        </div>
        <h3 v-else-if="serchStatus">Nessun contenuto trovato, effettua una ricerca diversa</h3>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name: 'ProductSlider',
    components: {
        Card
    },
    props: {
        items: Array,
        titleCategory: String,
        serchStatus: Boolean
    }
}
</script>

<style>

</style>