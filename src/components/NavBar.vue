<template>
    <div>
   <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="{ name: 'main' }" tag ="a" active-class="active" class="nav-link-main" exact>Superliga-Main page</b-navbar-brand>
      
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <b-nav-item :to="{ name: 'search' }"  tag ="a" active-class="active" class="nav-link" exact>Search</b-nav-item>
          <b-nav-item :to="{ name: 'currSeasonGames' }"  tag ="a" active-class="active" class="nav-link" exact>Current Season Games</b-nav-item>
          <b-nav-item :to="{ name: 'about' }"  tag ="a" active-class="active" class="nav-link" exact>About</b-nav-item>
          <b-nav-item v-if="$root.store.adminflag" :to="{ name: 'AdminPage' }"  tag ="a" active-class="active" class="nav-link" exact>Admin</b-nav-item>

      </b-navbar-nav>

      <!-- middle aligned nav items -->
      <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
        <b-navbar-brand class="user" >Hello Guest</b-navbar-brand>
        <b-nav-item :to="{ name: 'login' }" tag ="a" active-class="active" class="nav-link" exact>Login</b-nav-item>
        <b-nav-item :to="{ name: 'register' }" tag ="a" active-class="active" class="nav-link" exact>Register</b-nav-item>
      </b-navbar-nav>
    
      
      <b-navbar-nav class="ml-auto" v-else>
      <!-- Put profile picrure here  ---------------------------------->
      <img class="picture" :src="get_image()"/>
        <b-navbar-brand class="user" >Welecom back {{$root.store.username}} </b-navbar-brand>
        <b-nav-item-dropdown text="Personal" right>
          <template #button-content>
            User
          </template>
          <b-dropdown-item :to="{ name: 'favorites' , params:{userName: $root.store.username}}">Favorites</b-dropdown-item>
          <b-dropdown-item :to="{ name: 'logout' }"> >Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
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
  color: rgb(255, 255, 255);
  text-align:left;
  position: relative;
  right:550px;
  font-size: 28px;

}

.picture{
       height: 70px;
       line-height: 70px;
       left: 550px;
      float: left;

}
.nav-link{
  font-size: 15px;
}
</style>