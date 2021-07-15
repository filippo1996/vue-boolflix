<template>
    <div class="row row-cols-1 row-cols-md-5 g-4">
        <div class="col" v-for="(item, index) in items" :key="index">
            <Card :data="item"/>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name: 'ProductGrid',
    components: {
        Card
    },
    props: {
        items: Array,
    }
}
</script>

<style>

</style>