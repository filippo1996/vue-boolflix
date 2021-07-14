<template>
    <div>
        {{dataMovie.title}}<br>
        {{dataMovie.original_title}}<br>
        <img :src="fileName(dataMovie.original_language)" :alt="'bandiera ' + dataMovie.original_language"><br>
        {{dataMovie.vote_average}}<br>
        {{dataMovie.original_name}}<br>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        dataMovie: Object
    },
    methods: {
        fileName(name){
            try{
                return require(`@/assets/lang/${name}.png`);
            } catch(e){
                console.log(e);
            }
        }
    }
}
</script>

<style>

</style>