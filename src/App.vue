<template>
  <div id="app">
    <Header/>
    <main>
      <div v-if="searchAll.length">
        <ProductSlider :movies="searchAll" titleCategory="Ricerca Film e Serie TV"/>
      </div>
      <h3 v-else-if="searchActive">Nessun contenuto trovato, effettua una ricerca diversa</h3>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ProductSlider from '@/components/ProductSlider.vue'
import axios from '@/axios.js';
import config from '@/data/config.js';
import {eventBus} from '@/main.js';

export default {
  name: 'App',
  components: {
    Header,
    ProductSlider
  },
  data(){
    return {
      searchActive: false,
      searchAll: []
    }
  },
  created(){
    eventBus.$on('keywords', async str =>{
      if(!str || str.length < 3){
        this.searchActive = false;
        return;
      }
      const params = {
        api_key: process.env.VUE_APP_API_KEY,
        query: str
      }
      //we get the list of wanted movies
      const itemsSearchFilms = await this.search('path_v3', 'search_movie', params);
      //we get the list of the wanted shows
      const itemsSearchTvShows = await this.search('path_v3', 'search_tv', params);

      this.searchAll = [...itemsSearchFilms, ...itemsSearchTvShows];
      this.searchActive = true;
    });
  },
  methods: {
    async search(url, path, paramsObj){
      const www = config.the_movie_db;
      const addPath = www.add_path;
      const params = paramsObj;
      const response = await axios(www[url] + addPath[path], params);
      return response.data.results;
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
