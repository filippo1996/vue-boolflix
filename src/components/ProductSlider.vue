<template>
    <div>
        <ul>
            <li v-for="(movie, index) in movies" :key="index">
                <Card :dataMovie="movie"/>
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
    }
}
</script>

<style>

</style>