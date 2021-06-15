<template>
  <div class = "card">

  <b-card

    no-body
    style="max-width: 20rem;"

    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">{{prop.name}}</h4>
    </template>
<!-- ----------------------------------------------------TeamDetails------------------------------------------- -->

    <b-list-group flush>
      <b-list-group-item> {{prop.continent}} </b-list-group-item>
      <br>
      <b-list-group-item> {{prop.id}} </b-list-group-item>
      <br>
      <img :src="get_image()" />
      <br>
      <b-list-group-item> {{prop.cuntry}} </b-list-group-item> -->

<!-- ------------------------------------------------TeamPlayers----------------------------------------- -->


      


      <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
    </b-list-group>

  </b-card>
      <div>
      <h1> herer {{teamid}}</h1>
      <span  v-for="res in teamPlayers" :key="res">
      <router-link to="/PlayerPage" tag="PlayerPreview"  active-class="active" 
       class="card"  @click.native = PlayerDetail(res) >
       <h1> {{res.name}} </h1>
      <PlayerPreview :propObj="res"></PlayerPreview>
      </router-link>
      
      </span>
      </div>

</div>


</template>

<script>
 import  PlayerPreview from "../components/PlayerPreview";
    export default { 
      naor: "TeamPage",
      component :{ PlayerPreview } ,
      data(){
        return{
          prop: Object,
          teamid:0,
          resultteam:Object,
          Status:0,
          resultnew:Object,
          results:Object,
          flag:true,
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
    },

    computed:{
     teamPlayers()
    {
    return this.resultnew;
    }
    },

    async created() {
    this.prop=this.$root.store.teamdetail;
    this.teamid = this.prop.id;
    await this.getTeamFullDetails();
    console.log(this.resultnew);
    console.log("dsfdsf");
    },

    
  }
</script>

<style lang="scss" scoped>
</style>