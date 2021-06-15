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
      <b-list-group-item> {{propObj.position}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj.team_name}} </b-list-group-item>
      <br>
      <img :src="get_image()" />
      <br>
      <!-- *********** NEW ******************************** -->
      <b-list-group-item> {{propObj.CommonName}} </b-list-group-item> -->
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

  </b-card>
</div>
</template>

<script>
    export default {  
      data(){
        return{
          propObj: Object
      }
      },

    methods: {
    get_image() {
        if(this.propObj.image != undefined){
        return this.propObj.image;
        }
        else return "'https://cdn.sportmonks.com/images/soccer/placeholder.png"
      }
    },

    mounted() {
      this.propObj=this.$root.store.playerdetail;
      
    },
  }


</script>

<style lang="scss" scoped>

</style>