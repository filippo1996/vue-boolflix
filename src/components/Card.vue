<template>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w342${data.poster_path}`" :alt="data.title || data.name" @error="emptyImg">
        {{data.title || data.name}}<br>
        {{data.original_title || data.original_name}}<br>
        <img :src="fileName(data.original_language)" :alt="'bandiera ' + data.original_language"><br>
        {{data.vote_average}}<br>
        {{data.original_name}}<br>
        <StarRating :data="data"/>
    </div>
</template>

<script>
import StarRating from './StarRating.vue';

export default {
    name: 'Card',
    components: {
        StarRating
    },
    props: {
        data: Object
    },
    methods: {
        fileName(name){
            try{
                return require(`@/assets/lang/${name}.png`);
            } catch(e){
                console.log(e);
            }
        },
        emptyImg(event){
            event.target.src = require('@/assets/default.png');
        }
    }
}
</script>

<style>

</style>