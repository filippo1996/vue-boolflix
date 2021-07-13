//All basic app configurations
export default {
    //API site themoviedb.org
    the_movie_db:{
        'path_v3': process.env.VUE_APP_API_THE_MOVIE_DB_V3,
        'path_v4': process.env.VUE_APP_API_THE_MOVIE_DB_V4,
        add_path:{
            list: 'list/',
            list_id: 1,
            search_movie: 'search/movie'
        }
    }
}