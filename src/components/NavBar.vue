<template>
    <div>
   <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="{ name: 'main' }" tag ="a" active-class="active" class="nav-link" exact>Superliga Vue</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

        <b-nav-item :to="{ name: 'search' }"  tag ="a" active-class="active" class="nav-link">Search</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
          <h1 class="user">Hello Guest</h1>
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
        </b-navbar-nav>
        
        <b-navbar-nav class="ml-auto" v-else>

<!-- Put profile picrure here  ---------------------------------->
      <img class="picture"
      :src="get_image()"
    />
        <h1 class="user" >Welecom back {{$root.store.username}} </h1>
        <b-nav-item-dropdown right>
          <template #button-content>
            User
          </template>
          <b-dropdown-item href="#">Favorites</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'logout' }"> >Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
    </div>
</template>

<script>
    export default {
        name: "NavBar",
    data() {
    return {
      img_url:""
    }
  },
  methods:{
    get_image(){
      return this.$root.store.img
    }
  },

  updated(){
    if($root.store.username){
       this.img_url= $root.store.img
    }
  }
 }


</script>

<style lang="scss" scoped>

.user{
  color: red;
  text-align:left;
  position: relative;
  right:550px
}

.picture{
       height: 70px;
       line-height: 70px;
       left: 550px;
        float: left;

}

</style>