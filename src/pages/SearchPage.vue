<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-form-input v-if="positionFlag===true" v-model="position" placeholder="Position Number"></b-form-input>


      <b-input-group-append>
        <b-button @click="simpleSearchPlayer()" variant="success">Search</b-button>
      </b-input-group-append>
    </b-input-group>
      <br/>
      Your search Query: {{ searchQuery }}
      <br>
<input type="checkbox" id="postion" value="position" v-model="checkedNames">
<label for="jack">Filter By position</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>
      <PlayerPreview></PlayerPreview>



  <!-- <h2>Search Results</h2>
    <span v-if( status != 0 ) v-for="res in result.data" :key="res.position">
      <pokemon-preview :position="res.position"></pokemon-preview>
      <PlayerPreview></PlayerPreview> 
   </span> -->

  </div>

  
</template>

<script>

 import  PlayerPreview from "../components/PlayerPreview";
export default {
   components: { PlayerPreview },
 data() {
    return {
      searchQuery:"",
      checkedNames:[],
      positionFlag: false,
      position:0,
      teamname:"",
      results:[],
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
      console.log(results);

    },

  async filterByPosition(results){
       try {
            let check= [this.searchQuery,this.position,this.teamname]
            console.log(check);
            const params = {
            name:  this.searchQuery,
            position: this.position,
            teamname: this.teamname
            };
            results = await this.axios.get(
          `http://localhost:3000/guest/Search/filyer/filter/${params.name,params.position,params.teamname}`
          );
      } catch (err) {
        console.log("server:"+err.response);
       
        console.log(results);
      }
    },


    async startSearch(){
      await this.filterByPosition(this.results);
    },



  },
    updated() {
    if (this.checkedNames.find( element => element === "position")){
        this.positionFlag=true;
      }
    else this.positionFlag=false;
    },
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>