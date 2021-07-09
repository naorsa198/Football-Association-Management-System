<template>
<div>
   <div>
     <SeasonGamesPreview :oldG="resultsOld" :futureG="resultsFuture" :eventsG="resultsEvents"></SeasonGamesPreview> 
  </div>

  <b-button variant="success" @click="addGame">Add Game</b-button>
  <b-button variant="primary" @click="addResult">Add Results</b-button>

</div>

</template>

<script>
    import SeasonGamesPreview from "../components/SeasonGamesPreview";

    import AddGame from '../components/AddGame'
    import seasonGamesPage from "../pages/SeasonGamesPage";
    export default {
          components: { SeasonGamesPreview },
        data(){
          return{
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
        },

addGame(){
        this.$router.push("/AddGame");
},

addResult(){
          this.$router.push("/addResult");

},
async getTeams(resultteam){ 
      this.flag=true
        this.teamid=this.prop.id;
         try {
         resultteam = await this.axios.get(
          `http://localhost:3000/teams/teamFromLeague}`
          );
      } catch (err) {
        console.log("server:"+err.response);
//if send error so its empty mean = not result for the user
        this.resultteam=[];
      }
      console.log(resultteam.status);
      console.log(resultteam);
      this.resultteam= resultteam.data
      console.log(this.resultsteam)
    },


        },
       
      beforeMount(){
      this.getLeagueFutureGames();
      this.getLeagueOldGames();
      this.getOldGamesEvents();

  },
    }
</script>



<style lang="scss" scoped>

</style>