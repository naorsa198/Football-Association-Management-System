<template>
    <div>
        <h1 class="title"> {{$root.store.username}} Favorite Games</h1>
        <FavoriteGamesPreview :gameInfo="results"></FavoriteGamesPreview>
    </div>
</template>

<script>
import FavoriteGamesPreview from "../components/FavoriteGamesPreview";
export default {
    name :"FavotiteGamePage",
    components:{
        FavoriteGamesPreview
    },
    data() {
      return {
          results :Object,
      }
    },
    methods:{
        async getFavoriteGames(results){
            try {
                const params = {
               name: "nicole"
                }
            results = await this.axios.get(
                `http://localhost:3000/game/favoriteGames/${params.name}`
                );
            } catch (err) {
                console.log("server:"+err.response);
                }
            console.log("results",(results))
            this.status = results.status;
            this.results= results.data;
            console.log("results",(this.results))
        
            },
    }
,
    mounted(){
        this.getFavoriteGames();
    },

}
</script>

<style lang="stylus">

</style>