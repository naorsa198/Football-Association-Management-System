<template>
  <div>
    <SeasonGamesPreview></SeasonGamesPreview>
  </div>
</template>

<script>
    import SeasonGamesPreview from "../components/SeasonGamesPreview";
  export default {
  components: {
     SeasonGamesPreview
  },
    data() {
      return {
          resultsFuture :Object,
          resultsOld :Object,
        // items: [
        //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
        // ]
      }
    },
    methods:{
        async getLeagueFutureGames(resultsFuture){
        try {
            resultsFuture = await this.axios.get(
            `http://localhost:3000/league/getLeagueFutureGames`
            );
        } catch (err) {
            console.log("server:"+err.response);
            }
        this.status=resultsFuture.status
        this.resultsFuture= resultsFuture.data
        },

        async getLeagueOldGames(resultsOld){
        try {
            resultsOld = await this.axios.get(
            `http://localhost:3000/league/getLeagueFutureGames`
            );
        } catch (err) {
            console.log("server:"+err.response);
        }
        this.status=resultsOld.status
        this.resultsOld= resultsOld.data
        },
    
      beforeMount(){
        this.getLeagueFutureGames();
        this.getLeagueOldGames();
  }
}
  };
</script>