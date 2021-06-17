<template scope="props">
  <div class="game-table">
    <h1 title-tag="h1" class="titelh1">Curren games in the season</h1> 
    <h3 title-tag="h3" class="titelh3">Future Games In The season </h3> 
    <vue-virtual-table :config="futureTableHeadline"
    :data="this.futureG"
    :itemHeight="55"
    :hoverHighlight	="false"
    > 
    </vue-virtual-table>
    <br>
    <h3 title-tag="h3" class="titelh3">Old Games In The season </h3> 
    <vue-virtual-table :config="oldTableHeadline"
    :data="this.oldG"
    :itemHeight="55"
    :hoverHighlight	="false"
    :vue-virtual-table="false"
    > 
    </vue-virtual-table>

  </div>
</template>

<script>
import VueVirtualTable from 'vue-virtual-table'

  export default {
    name: "SeasonGamesPreview",
     components: {
       VueVirtualTable
    },
    props: {
        futureG:Object,
        oldG: Array
    },
    data: () => ({
          futureTableHeadline: [{ prop: 'game_id' ,name:"Game_id"  },{ prop: 'localteam' },{ prop: 'vistoreteam' }, { prop: 'date' }, { prop: 'fild' }, { prop: 'localteam' }, { prop: 'mainJudge' }, { prop: 'secondaryjudge' }, { prop: 'localteam_score' }, { prop: 'visitoreteam_score' }],
          // futureTableHeadline: [ 'game_id' ,'localteam','vistoreteam' ,'date' , 'fild' ,'localteam','mainJudge' ,'secondaryjudge' ,'localteam_score' , 'visitoreteam_score'],

          oldTableHeadline: [{ prop: 'game_id' }, { prop: 'localteam' },{ prop: 'vistoreteam' }, { prop: 'date' }, { prop: 'fild' }, { prop: 'localteam' }, { prop: 'mainJudge' }, { prop: 'secondaryjudge' }, { prop: 'localteam_score' }, { prop: 'visitoreteam_score' },{ prop: 'game_events' }],
       
   })
    // end data


  }
  
</script>

<style>
.titelh1{
  color: rgb(0, 168, 70);
  /* font-size: 30px; */
}
.game-table{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>