<template>
  <div class = "card">

  <b-card

    no-body
    style="max-width: 20rem;"

    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">{{propObj.name}}</h4>
    </template>
<!-- ----------------------------------------------------TeamDetails------------------------------------------- -->

    <b-list-group flush>
      <b-list-group-item> {{propObj.continent}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.id}} </b-list-group-item>
      <br>
      <img :src="get_image()" />
      <br>
      <b-list-group-item> {{propObj.cuntry}} </b-list-group-item> -->

<!-- ------------------------------------------------TeamPlayers----------------------------------------- -->
      <div>
      <span  v-for="res in teamPlayers" :key="res">
      <router-link to="/PlayerPage" tag="PlayerPreview"  active-class="active" 
      class="card"  @click.native = PlayerDetail(res) >
      <PlayerPreview :propObj="res"></PlayerPreview>
      </router-link>
      
</span>
</div>


      


      <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
    </b-list-group>

  </b-card>
</div>
</template>

<script>
 import  PlayerPreview from "../components/PlayerPreview";
    export default { 
      component :{PlayerPreview} ,
      data(){
        return{
          propObj: Object,
          teamid:0,
          resultteam:Object,
          Status:0,
          results:Object,
      }
      },
    methods: {
  
  teamPlayers(){
    return this.resultteam
  },
    PlayerDetail(res){
    this.$root.store.toPlayerPage(res);
    },

    get_image() {
        if(this.propObj.logo_path != undefined){
        return this.propObj.logo_path;
        }
        else return "'https://cdn.sportmonks.com/images/soccer/placeholder.png"
    },
    async getTeamFullDetails(results){ 
        this.teamid=this.propObj.id;
         try {
         results = await this.axios.get(
          `http://localhost:3000/teams/teamFullDetails/${this.teamid}`
          );
      } catch (err) {
        console.log("server:"+err.response);
//if send error so its empty mean = not result for the user
        this.results=[];
      }
      console.log(results.status);
      console.log(results);
      this.resultsteam= results.data
      console.log(this.resultsteam)
    }
    },
     
    beforeMount() {
    this.propObj=this.$root.store.teamdetail;
    this.getTeamFullDetails(this.result)
      
    },
  }
</script>

<style lang="scss" scoped>
</style>