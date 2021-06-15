<template>
    <div>
        <b-card no-body img-src="img/theme/img-1-1000x600.jpg" alt="Card image" class="bg-dark text-white border-0">
            <div class="card-img-overlay d-flex align-items-center">
            <div>
            <b-card-title title-tag="h5" class="h1 text-white mb-2">About</b-card-title>
            <b-card-text >Nicole Kenigsberg - 316299031, Naor Saraf - 305715781</b-card-text>
             <b-card-text>Link to out github project part 3.3:</b-card-text>
            <b-card-text>**add link**</b-card-text>
            <b-card-text>Link to out API:</b-card-text>
            <b-card-text>https://app.swaggerhub.com/apis/naorsa198/simple-inventory_api/1.0.0</b-card-text>
            <b-card-text title-tag="h4" class="text-sm font-weight-bold">Assignment-3-2</b-card-text>
            <b-card-text>Link to out github project part 3.2:</b-card-text>
            <b-card-text>https://github.com/Web-Development-Environments-2021/assignment-3-2-305715781_316299031</b-card-text>
            <b-card-text>About:
                        To login as the Football Association Representor type:
                        username: NicoleKenig
                        password: nicole@26

                        * .env details to login to out DB:
                        tedious_userName=nicole
                        tedious_password=rXs4gfkg
                        tedious_server=footballleaguesql.database.windows.net
                        tedious_database=LeagueDB
                        options: { encrypt: true, enableArithAbort: true }
                        COOKIE_SECRET=shalom
                        api_token=3hE3qLqssMKTJMEps2Qd3mYyBW43M1UaZyG1FHTAcfcMJIK1jyKGf8lpe4yB

                        * We have implemented the bonus part:
                        add and get user favorite team,player and game
                        adding game results
                        adding events to games
            </b-card-text>
            <b-card-text title-tag="h4" class="text-sm font-weight-bold">Hope you enjoy :)</b-card-text>
            
            </div>
            </div>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "About",
    data() {
    return {
      img_url:""
    }
  },
 }


</script>

<style lang="scss" scoped>

.user{
  color: rgb(255, 255, 255);
  text-align:left;
  position: center;
  right:550px
}

</style>