<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
        
      <b-form-input v-if="positionFlag===true" v-model="position" placeholder="Position Number">
        <b-input-group-append>
          <b-button @click="startSearch()" variant="success">Search</b-button>
        </b-input-group-append>
      </b-form-input>

      <b-form-input v-if="filterTeamName===true" v-model="teamName" placeholder="teamname">
        <b-input-group-append>
          <b-button @click="startSearch()" variant="success">Search</b-button>
        </b-input-group-append>
      </b-form-input>


      
      <b-input-group-append>
        <b-button @click="startSearch()" variant="success">Search</b-button>
      </b-input-group-append>

    </b-input-group>

    <br>
    Your search Query: {{searchQuery }}
    <br>
      <!-- <input type="checkbox" id="postion" value="position" v-model="checkedNames">
      <label for="jack">Filter By position</label>
      <input type="checkbox" id="team" value="Team" v-model="checkedNames"> -->
      <input  v-if="!teamsearch && !positionFlag  && !filterTeamName" type="checkbox" id="player" value="player" v-model="playersearch">
     <label v-if="!teamsearch" for="jack">Search player__</label>

      <input v-if="!playersearch && !positionFlag && !filterTeamName" type="checkbox" id="team" value="team" v-model="teamsearch" >
      <label  v-if="!playersearch && !positionFlag  && !filterTeamName" for="john">Search Team__</label>
      
      <input  v-if="!teamsearch" type="checkbox" id="postion" value="position" v-model="positionFlag">
      <label v-if="!teamsearch" for="jack">Filter By position__</label>

       <input  v-if="!teamsearch" type="checkbox" id="filterTeamName" value="filterTeamName" v-model="filterTeamName">
      <label v-if="!teamsearch" for="jack">Filter By Team Name__</label>
            
     
  <br>

<span>Checked names: {{checkedNames}}</span>
<!-- ----------------------------------------------- result search-------------------------- -->

<div v-if="playersearch || positionFlag || filterTeamName">

<span  v-for="res in searchResult" :key="res">
      <PlayerPreview :propObj="res"></PlayerPreview>
</span>
</div>

<div v-if="searchTeam">
<span  v-for="res in searchResult" :key="res">
      <TeamPreview :propObj="res"></TeamPreview>
</span>
</div>

  <!-- <TeamPreview :propObj="results"></TeamPreview> -->

  </div>

  
</template>

<script>

 import  PlayerPreview from "../components/PlayerPreview";
import  TeamPreview from "../components/TeamPreview";

export default {
  components: { PlayerPreview,TeamPreview },
  //   props:{
  //   anObject: Object
  // },
  data() {
    return {
      searchQuery:"",
      checkedNames:[],
      positionFlag: false,
      playersearch: false,
      teamFlag: false,
      teamsearch: false,
      searchTeamFlag:false,
      filterTeamName: false,
      position:0,
      teamname:"",
      results: Object,
      status:0
    };
  },
  methods:{

  async simpleSearchPlayer(results){
        try {
          let check= [this.searchQuery,this.position,this.teamname]
          console.log(check);
          const params = {
               name:  this.searchQuery,
            };
          results = await this.axios.get(
          `http://localhost:3000/guest/Search/player/${params.name}`
          );
      } catch (err) {
        console.log("server:"+err.response);
      }
      this.status=results.status
      console.log(this.status);
      console.log(results.data);
      this.results= results.data
    },

  async filterByPosition(results){
       try {
            let check= [this.searchQuery,this.position,this.teamname]
            console.log(check);
            let params ={
              "name": this.searchQuery,
              "position": this.position,
              "teamname": this.teamname
            }
            results = await this.axios.get(
          `http://localhost:3000/guest/Search/filter/player/${params}`);
      } catch (err) {
        console.log("server:"+err);
       
      }
      this.status=results.status
      console.log(this.status);
      console.log(results);
      this.results= results.data
    },

    async searchTeam(results){
        try {
          let check= [this.searchQuery]
          console.log(check);
          const params = {
               name:  this.searchQuery,
            };
          results = await this.axios.get(
          `http://localhost:3000/guest/Search/team/${params.name}`
          );
      } catch (err) {
        console.log("server:"+err.response);
      }
      this.status=results.status
      console.log(this.status);
      console.log(results.data);
      this.results= results.data
    },


    async startSearch(){
      console.log("start search")
      console.log(this.playersearch);
      if(this.playersearch){
          if(!this.positionFlag && !this.teamFlag){
            await this.simpleSearchPlayer();
          }
          else{
              ( await this.filterByPosition());  
          }
       }
      else if(this.searchTeam){
          await this.searchTeam();
        }
       }
    },

  computed:{
      searchResult(){
        if(this.status===200){
          return this.results
        }
      else return [];
  }},

  beforeDestroy() {
    localStorage.results = this.searchResult;
  },

  beforeMount() {
    this.results= localStorage.results;
  },

}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>