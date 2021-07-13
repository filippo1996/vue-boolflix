<template>
    <div>
        <input type="search" v-model="keywords" @keyup="search" placeholder="cerca il tuo contenuto">
    </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
    name: 'SearchBar',
    data(){
        return {
            keywords: null
        }
    },
    methods: {
        search: function(){
            eventBus.$emit('keywords', this.keywords.trim());
        }
    }
}
</script>

<style>

</style>