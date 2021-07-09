<template>
  <div>
     <SeasonGamesPreview :oldG="resultsOld" :futureG="resultsFuture" :eventsG="resultsEvents"></SeasonGamesPreview> 
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
          resultsEvents: Object,
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
        this.status=resultsFuture.status;
        this.resultsFuture= resultsFuture.data;
        console.log("resultsFuture",(this.resultsFuture))
        },

        async getLeagueOldGames(resultsOld){
        try {
            resultsOld = await this.axios.get(
            `http://localhost:3000/league/getLeagueOldGames`
            );
        } catch (err) {
            console.log("server:"+err.response);
        }
        this.status=resultsOld.status
        this.resultsOld= JSON.parse(JSON.stringify(resultsOld.data))
        console.log("resultsOld",this.resultsOld)
        },

        async getOldGamesEvents(resultsEvents){
        try {
            resultsEvents = await this.axios.get(
            `http://localhost:3000/game/allGamesEvents`
            );
        } catch (err) {
            console.log("server:"+err.response);
        }
        this.status=resultsEvents.status
        this.resultsEvents= JSON.parse(JSON.stringify(resultsEvents.data))
        console.log("resultsEvents",this.resultsEvents)
        }
    },
    beforeMount(){
      this.getLeagueFutureGames();
      this.getLeagueOldGames();
      this.getOldGamesEvents();

  },
  };
</script>