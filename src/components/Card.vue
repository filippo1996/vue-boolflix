<template>
    <div class="card h-100" style="width: 15rem;">
        <img :src="`https://image.tmdb.org/t/p/w342${data.poster_path}`" :alt="data.title || data.name" @error="emptyImg">
        <div class="card-body">
            <h5 class="card-title">{{data.title || data.name}}</h5>
            <p class="card-text">{{data.overview}}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Lingua originale
                <img :src="fileName(data.original_language)" :alt="'bandiera ' + data.original_language">
            </li>
            <li class="list-group-item">
                Voto {{data.vote_average}}
            </li>
            <li class="list-group-item">
                <StarRating :data="data"/>
            </li>
        </ul>
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

<style scoped lang="scss">
.card-text{
    height: 200px;
    overflow-y: auto;
}
</style>