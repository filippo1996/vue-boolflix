<template>
    <div>
        <h2>{{titleCategory}}</h2>
        <ul>
            <li v-for="(movie, index) in movies" :key="index">
                <Card :data="movie"/>
            </li>
        </ul>
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
        movies: Array,
        titleCategory: String
    }
}
</script>

<style>

</style>