<template>
  <div id="app">
    <Header/>
    <main>
      <div v-if="!notFoundFilms && !notFoundShows">
        <ProductSlider :movies="itemsSearchFilms"/>
        <ProductSlider :movies="itemsSearchTvShows"/>
      </div>
      <h3 v-else>Nessun contenuto trovato, effettua una ricerca diversa</h3>
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
      itemsSearchFilms: [],
      notFoundFilms: false,
      itemsSearchTvShows: [],
      notFoundShows: false,
    }
  },
  created(){
    eventBus.$on('keywords', str =>{
      const params = {
        api_key: process.env.VUE_APP_API_KEY,
        query: str
      }
      //we get the list of wanted movies
      this.search('path_v3', 'search_movie', 'itemsSearchFilms', 'notFoundFilms', params);
      //we get the list of the wanted shows
      this.search('path_v3', 'search_tv', 'itemsSearchTvShows', 'notFoundShows', params);
    });
  },
  methods: {
    /*
    search(){
      eventBus.$on('keywords', async str =>{
        if(!str || str.length < 3){
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
        this.itemsSearchFilms = response.data.results;
        if(!this.itemsSearchFilms.length){
          this.notFound = true;
        }else{
          this.notFound = false;
        }
      });
    }
    */
    async search(url, path, save, status, paramsObj){
      const str = paramsObj.query;
      if(!str || str.length < 3){
        this[save] = [];
        return;
      }
      const www = config.the_movie_db;
      const addPath = www.add_path;
      const params = paramsObj;
      const response = await axios(www[url] + addPath[path], params);
      this[save] = response.data.results;
      if(!this[save].length){
        this[status] = true;
      }else{
        this[status] = false;
      }
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
