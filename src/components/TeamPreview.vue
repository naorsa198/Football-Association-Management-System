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


    <b-list-group flush>
      <!-- <b-list-group-item> {{propObj}} </b-list-group-item> -->
      <b-list-group-item> {{propObj[0].country}} </b-list-group-item>
      <br>
      <b-list-group-item> {{propObj[0].continent}} </b-list-group-item>
      <br>
      <img :src="propObj[0].logo_path"/>
    </b-list-group>

  </b-card>
</div>
</template>

<script>
    export default {
        name: "TeamPreview",
      props: {
        propObj:{type: Object, required: false, default(){
          return {message: "Didn't got team details"}
        }},
        },

    }
</script>

<style lang="scss" scoped>

</style>