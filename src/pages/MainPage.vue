<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <!-- background image -->
    <b-card
    overlay
    img-src="https://picsum.photos/900/250/?image=3"
    img-alt="Card Image"
    text-variant="white"
    title="Main Page"
    sub-title="Subtitle"
    >
    <b-card-text>
      Some quick example text to build on the card and make up the bulk of the card's content.
    </b-card-text>
  </b-card>
  <!-- table info -->
   <b-card-group deck>
    <b-card
      header="Next Game In League"
      header-tag="header"
      footer-tag="footer"
      title="Title"
    >
      <b-card-text> <LeagueInfo></LeagueInfo></b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>

    <b-card title="Title" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">3 FavoriteGames of Login/Register</h6>
      </template>
      <b-card-text>
        <LoginPage v-if="!$root.store.username"></LoginPage>
        <FavoriteGames v-else></FavoriteGames>
      </b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
      <!-- <template #footer>
        <em>Footer Slot</em>
      </template> -->
    </b-card>
  </b-card-group>
   
  </div>
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGames from "../components/FavoriteGames";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LeagueInfo, 
    LoginPage, 
    FavoriteGames
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
