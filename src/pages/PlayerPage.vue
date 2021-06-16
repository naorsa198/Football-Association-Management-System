<template>
  <div class = "card">

  <b-card

    no-body
    style="max-width: 200rem;"

    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">{{propObj.name}}</h4>
    </template>


    <b-list-group flush>
      <b-list-group-item>Position: {{propObj.position}}-{{$root.positionKey[propObj.position]}} </b-list-group-item>
      <br>
      <b-list-group-item>Team Name: {{propObj.team_name}} </b-list-group-item>
      <br>
      <img :src="get_image()" />
      <br>
      <!-- *********** NEW ******************************** -->
      <b-list-group-item>CommonName: {{propObj.CommonName}} </b-list-group-item> 
      <br>
      <b-list-group-item>nationality: {{propObj.nationality}} </b-list-group-item>
      <br>
      <b-list-group-item>birthdate: {{propObj.birthdate}} </b-list-group-item>
      <br>
      <b-list-group-item>birthcountry: {{propObj.birthcountry}} </b-list-group-item>
      <br>
      <b-list-group-item>height: {{propObj.height}} </b-list-group-item>
      <br>
      <b-list-group-item>weight: {{propObj.weight}} </b-list-group-item> 
      


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
.card{
  
  height: 80rem;
  width: 80rem;
}

.mb-0{
  color: blue;
}

</style>