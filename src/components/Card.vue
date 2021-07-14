<template>
    <div>
        {{data.title || data.name}}<br>
        {{data.original_title || data.original_name}}<br>
        <img :src="fileName(data.original_language)" :alt="'bandiera ' + data.original_language"><br>
        {{data.vote_average}}<br>
        {{data.original_name}}<br>
    </div>
</template>

<script>
export default {
    name: 'Card',
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
        }
    }
}
</script>

<style>

</style>