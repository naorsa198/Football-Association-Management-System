<template>
<div>
    <div>
        <SeasonGamesPage   > </SeasonGamesPage>
    </div>

  <b-button variant="success" @click="addGame">Add Game</b-button>

</div>

</template>

<script>

    import AddGame from '../components/AddGame'
    import seasonGamesPage from "../pages/SeasonGamesPage";
    export default {
          components: {  },
        data(){
            resultteam=[];
            showModal=false;
        },

        methods:{

addGame(){
        this.$router.push("/AddGame");
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
       
       create:{



       }
    }
</script>



<style lang="scss" scoped>

</style>