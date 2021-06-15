<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
  export default {
      name: "SeasonGamesPreview",
    props: {
        futureG:{type: Object, required: false, default(){
          return {message: "Didn't got team details"}
        },
        oldG:{type: Object, required: false, default(){
          return {message: "Didn't got team details"}
        }},
    },
  },
  //  data() {
  //   return {
  //      futureGames: [
  //        {}
  //      ]
  //   }
    // }
  }
</script>