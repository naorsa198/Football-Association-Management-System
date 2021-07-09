<template>
  <div


  >

<!-- ----------------------------------------------------TeamDetails------------------------------------------- -->
      
      <b-list-group-item> {{prop.country}} </b-list-group-item>
      <br>
      <b-list-group-item> {{prop.continent}} </b-list-group-item>
      <br>
      <!-- <b-list-group-item> {{prop.id}} </b-list-group-item>
      <br> -->
      <img :src="get_image()" style="img" />
      <br>

<!-- ------------------------------------------------TeamPlayers----------------------------------------- -->


      


      <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->

  
      
      <h1> herer {{teamid}}</h1>
      <span class="card" v-for="res in $root.players" :key="res">
      <router-link to="/PlayerPage" tag="PlayerPreview"  active-class="active" 
         class="card"  @click.native = PlayerDetail(res) >
      <PlayerPreview :propObj="res"></PlayerPreview>
      </router-link>
      </span>
      


<!-- ------------------------------------------------------Games of team--------------------------------------- -->

    <div>
        <h1>Team Games</h1>
          <!-- <span  v-for="res in teamPlayers" :key="res">       -->
     <span v-for="g in futureGame" :key="g.id">
       {{g.local_team}}
       <b-card-text class="main-GamePreview">
     <GamePreview
      v-for="g in futureGame"
      :id="g.game_id" 
      :hostTeam="g.localteam" 
      :guestTeam="g.vistoreteam" 
      :date="g.date"
      :hour="g.locatteam_score" 
      :fild="g.fild" 
      :mainJudge ="g.mainJudge"
      :secondaryjudge="g.secondaryjudge"
      :key="g.game_id">
      </GamePreview>>
      </b-card-text >
</span>
    </div>

</div>


</template>

<script>
 import  PlayerPreview from "../components/PlayerPreview";
  import  GamePreview from "../components/GamePreview";

    export default { 
      name: "TeamPage",
      components: { PlayerPreview },
      data(){
        return{
          prop: Object,
          teamid:0,
          resultteam:Object,
          Status:0,
          resultnew:Object,
          results:Object,
          flag:true,
          futureGame:Object,
          oldGame:Object,
      }
      },
    methods: {
  
      PlayerDetail(res){
    this.$root.store.toPlayerPage(res);
    },

    get_image() {
        if(this.prop.logo_path != undefined){
        return this.prop.logo_path;
        }
        else return "'https://cdn.sportmonks.com/images/soccer/placeholder.png"
    },
    async getTeamFullDetails(resultteam){ 
      this.flag=true
        this.teamid=this.prop.id;
         try {
         resultteam = await this.axios.get(
          `http://localhost:3000/teams/teamFullDetails/${this.teamid}`
          );
      } catch (err) {
        console.log("server:"+err.response);
//if send error so its empty mean = not result for the user
        this.resultteam=[];
      }
      console.log(resultteam.status);
      console.log(resultteam);
      this.resultnew= resultteam.data
      console.log(this.resultsteam)

    },

    async getFutureTeamGames(futureGame){ 
      this.flag=true
        this.teamid=this.prop.id;
         try {
         futureGame = await this.axios.get(
          `http://localhost:3000/game/getTeamFutureGames/${this.teamid}`
          );
      } catch (err) {
        console.log("server:"+err.response);
      }
      console.log(futureGame.status);
      this.futureGame= futureGame.data
      console.log(this.futureGame)
    },
    
    },
    computed:{
        teamPlayers()
        {
          return this.resultnew;
        },
        gethour(hour){
          if(hour==="")
            return "00:00"
          const time = hour.slice(0, 19).replace("T", " ");
           return time;
        }
    },

    async mounted() {
      await this.getFutureTeamGames()
    },

    async created() {
    this.prop=this.$root.store.teamdetail;
    this.teamid = this.prop.id;
 //   await this.getTeamFullDetails();
    console.log(this.resultnew);
    console.log("dsfdsf");
    },

    
  }
</script>

<style>
.card{
  display: inline-block;
  background: red;
}
.main-card{
  margin-top: 5%;
  background: rgba(255, 253, 221, 0.75);
}

</style>