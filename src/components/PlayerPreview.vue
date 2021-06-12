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
      <b-list-group-item> {{propObj.position}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.team_name}} </b-list-group-item>
      <br>
      <img :src="get_image()" height="150px" width="150px"/>
      <br>
      <!-- *********** NEW ******************************** -->
      <!-- <b-list-group-item> {{propObj.CommonName}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.nationality}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.birthdate}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.birthcountry}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.height}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.weight}} </b-list-group-item> -->
      


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
    },
    methods: {
    get_image() {
        if(this.propObj.image != undefined){
        return this.propObj.image;
        }
        else return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png"
      }
    }
    }
</script>

<style lang="scss" scoped>
.card {
  width: 10rem;
  display: inline-block;
  margin: 10px;
}
</style>