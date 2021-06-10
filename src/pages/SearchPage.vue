<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-form-input v-if="positionFlag===true" v-model="positionSearch" placeholder="Position Number"></b-form-input>


      <b-input-group-append>
        <b-button @click="startSearch()" variant="success">Search</b-button>
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
  </div>

  
</template>

<script>
import CheckBox from "../components/search";

export default {
  //  components: {
  //   CheckBox 
  //  },
 data() {
    return {
      searchQuery:"",
      checkedNames:[],
      positionFlag: false,
      position:0,
      teamname:"",
      results:[]
    };
  },

  methods:{
    startSearch(){
      if(this.positionFlag){
        filterByPosition()
      }
    },
  async filterByPosition(){
       try {
           results = await this.axios.get(
          "http://localhost:3000/guest/search/plater/filter/{searchfilter}",
          {
            name: this.searchQuery,
            position: this.position,
            teamname: this.teamname
          }
        );
        // console.log(response);
      } catch (err) {
        console.log(err.response);
       
        console.log(results);
      }
    }
  },
    updated() {
    if (this.checkedNames.find( element => element === "position")){
        this.positionFlag=true;
        
      }
    },
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>