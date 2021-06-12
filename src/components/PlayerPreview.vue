<template>
  <div>

  <b-card

    no-body
    style="max-width: 20rem;"

    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">{{propObj[0].name}}</h4>
    </template>

    <!-- <b-card-body>
      <b-card-title>Card Title</b-card-title>
      <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>
    </b-card-body> -->

    <b-list-group flush>
      <!-- <b-list-group-item> {{propObj}} </b-list-group-item> -->
      <b-list-group-item> {{propObj[0].position}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj[0].team_name}} </b-list-group-item>
      <br>
      <img :src="propObj[0].image" />
      <!-- *********** NEW ******************************** -->
      <b-list-group-item> {{CommonName}} </b-list-group-item>
      <b-list-group-item> {{nationality}} </b-list-group-item>
      <b-list-group-item> {{birthdate}} </b-list-group-item>
      <b-list-group-item> {{birthcountry}} </b-list-group-item>
      <b-list-group-item> {{height}} </b-list-group-item>
      <b-list-group-item> {{weight}} </b-list-group-item>
      


      <!-- <b-list-group-item>Vestibulum at eros</b-list-group-item> -->
    </b-list-group>

    <!-- <b-card-body>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </b-card-body> -->
  </b-card>
</div>
</template>

<script>
    export default {
        name: "PlayerPreview",
      props: {
        propObj:{type: Object, required: false, default(){
          return {message: 'hello'}
        }},
        // name: {
        //   type: String,
        //   required: true,
        // },
        // position: {
        //   type: Number,
        //   required: true
        // },
        // image: {
        //   type: URL,
        //   required: true
        // },
        // teamName: {
        //   type: String,
        //   required: true
        // },
        // // ***************** NEW *****************************`
        // CommonName:{
        //   type: String,
        //   required: true
        // },
        // nationality:{
        //   type: String,
        //   required: true
        // },
        // birthdate:{
        //   type: String,
        //   required: true
        // },
        // birthcountry:{
        //   type: String,
        //   required: true
        // },
        // height:{
        //   type: Number,
        //   required: true
        // },
        // weight:{
        //   type: Number,
        //   required: true
        },
  // },

    }
</script>

<style lang="scss" scoped>

</style>