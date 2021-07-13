<template>
  <div id="app">
    <Header/>
    <main>
      <ul>
        <li v-for="(item, index) in itemsSearchFilms" :key="index">{{item.original_title}}</li>
      </ul>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import axios from '@/axios.js';
import config from '@/data/config.js';
import {eventBus} from '@/main.js';

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return {
      itemsSearchFilms: []
    }
  },
  created(){
    this.search();
  },
  methods: {
    search(){
      eventBus.$on('keywords', async str =>{
        if(!str){
          this.itemsSearchFilms = [];
          return;
        }        
        const www = config.the_movie_db;
        const addPath = www.add_path;
        const params = {
          api_key: process.env.VUE_APP_API_KEY,
          query: str
        }
        const response = await axios(www.path_v3 + addPath.search_movie, params);
        //console.log(response.data.results);
        this.itemsSearchFilms = response.data.results;
      });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
