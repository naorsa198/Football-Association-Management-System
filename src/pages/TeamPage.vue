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


    <b-list-group flush>
      <b-list-group-item> {{propObj.continent}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.id}} </b-list-group-item>
      <br>
      <img :src="get_image()" />
      <br>
      <!-- *********** NEW ******************************** -->
      <b-list-group-item> {{propObj.cuntry}} </b-list-group-item> -->

      

      


      <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
    </b-list-group>

  </b-card>
</div>
</template>

<script>
    export default {  
      data(){
        return{
          propObj: Object,
          teamid:0,
          resultteam:Object,
          Status:0,
          result:undefined,
      }
      },
    methods: {
    get_image() {
        if(this.propObj.logo_path != undefined){
        return this.propObj.logo_path;
        }
        else return "'https://cdn.sportmonks.com/images/soccer/placeholder.png"
    },
    async getTeamFullDetails(){ 
        this.teamid=this.propObj.id;
         try {
          result = await this.axios.get(
          `http://localhost:3000/teams/teamFullDetails/${this.teamid}`
          );
      } catch (err) {
        console.log("server:"+err.response);
//if send error so its empty mean = not result for the user
        this.results=[];
      }
      console.log(result.status);
      console.log(result);
      this.resultsteam= result.data
    }
    },
     
    mounted() {
      this.propObj=this.$root.store.teamdetail;
    this.getTeamFullDetails(this.result)
      
    },
  }
</script>

<style lang="scss" scoped>
</style>