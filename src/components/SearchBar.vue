<template>
    <div>
        <input class="form-control me-2" type="search" v-model="keywords" @keyup="search" placeholder="Cerca... minimo 3 caratteri">
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