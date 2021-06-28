import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";

import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin, 
  InputGroupPlugin
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin, 
  InputGroupPlugin
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const positionKey = {
  1: "GoalKeeper",
  2: "Wing-Back",
  3: "Full-Back",
  4: "Sweeper",
  5: "Center-Back",
  6: "Defensive Midfielder",
  7: "Winger",
  8: "Central Midfielder",
  9: "Striker",
  10: "Attacking Midfielder",
  11: "Forward",
};

const players =
[
  {
      "player_id": 1069,
      "position_id": 1,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 537378,
      "position_id": 1,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 6525,
      "position_id": 1,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 378239,
      "position_id": 1,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 758,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 540027,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 338951,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 130152,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 2927,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 37260638,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 74109,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 31483,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 73552,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 32786921,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 3187718,
      "position_id": 2,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 129857,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 172394,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 483,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 161169,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 9826,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 10504,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 172985,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 1442,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 24817487,
      "position_id": 3,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 31,
      "position_id": 4,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 198066,
      "position_id": 4,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 3387,
      "position_id": 4,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 92276,
      "position_id": 4,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 6608,
      "position_id": 4,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 4561,
      "position_id": 4,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  },
  {
      "player_id": 13073,
      "position_id": 4,
      "number": null,
      "captain": 0,
      "injured": false,
      "minutes": null,
      "appearences": null,
      "lineups": null,
      "substitute_in": null,
      "substitute_out": null,
      "substitutes_on_bench": null,
      "goals": null,
      "owngoals": null,
      "assists": null,
      "saves": null,
      "inside_box_saves": null,
      "dispossesed": null,
      "interceptions": null,
      "yellowcards": null,
      "yellowred": null,
      "redcards": null,
      "tackles": null,
      "blocks": null,
      "hit_post": null,
      "cleansheets": null,
      "rating": null,
      "fouls": {
          "committed": null,
          "drawn": null
      },
      "crosses": {
          "total": null,
          "accurate": null
      },
      "dribbles": {
          "attempts": null,
          "success": null,
          "dribbled_past": null
      },
      "duels": {
          "total": null,
          "won": null
      },
      "passes": {
          "total": null,
          "accuracy": null,
          "key_passes": null
      },
      "penalties": {
          "won": null,
          "scores": null,
          "missed": null,
          "committed": null,
          "saves": null
      },
      "shots": {
          "shots_total": null,
          "shots_on_target": null,
          "shots_off_target": null
      }
  }
]

const shared_data = {
  username: localStorage.username,
  img: localStorage.img,
  results: localStorage.results,
  resultsteam: localStorage.resultsteam,
  playersearch: localStorage.playersearch,
  teamsearch: localStorage.teamsearch,
  playerdetail: localStorage.gamedetail,
  teamdetail: localStorage.teamdetail,
  adminflag : localStorage.adminflag,

  admin(){
    localStorage.setItem("adminflag",true)
    this.adminflag = true;
  },
  
  // username: "hilla",
  login(username,img) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
    localStorage.setItem("img", img);
    this.img = img;
    console.log("login", this.img);
  },
  lastSearch(results,resultsteam ,playersearch,teamsearch){
    localStorage.setItem("results",results)
    localStorage.setItem("resultsteam",resultsteam)
    localStorage.setItem("playersearch", playersearch)
    localStorage.setItem("teamsearch",teamsearch)
    this.results = results;
    this.resultsteam= resultsteam;
    this.teamsearch = teamsearch;
    this.playersearch= playersearch;
    console.log("lastsearch",this.results)

  },
  toPlayerPage(playerdetail){
    localStorage.setItem("playerdetail",playerdetail)
    this.playerdetail = playerdetail;
  },
  toTeamPage(teamdetail){
    localStorage.setItem("teamdetail",teamdetail)
    this.teamdetail = teamdetail;
  },
  logout() {
    console.log("logout");
    localStorage.removeItem(this.username);
    localStorage.removeItem("img");
    localStorage.removeItem("results");
    localStorage.removeItem("playersearch")
    localStorage.removeItem("teamsearch")
    localStorage.removeItem("resultsteam")
    localStorage.removeItem("PlayerDetail")
    localStorage.removeItem("teamdetail")


    this.username = undefined;
    this.img = undefined;
    this.results = undefined;
    this.teamsearch = false;
    this.playersearch=false;
    this.resultsteam= undefined;
    this.gamedetail= undefined;
    this.teamdetail=undefined;
    this.playerdetail= undefined;
    this.adminflag = false;
  }
};
console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
      positionKey:positionKey,
      players:players
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000
      });
    }
  },
  render: (h) => h(App)
}).$mount("#app");
