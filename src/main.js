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

const shared_data = {
  username: localStorage.username,
  img: localStorage.img,
  results: localStorage.results,
  resultsteam: localStorage.resultsteam,
  playersearch: localStorage.playersearch,
  teamsearch: localStorage.teamsearch,
  playerdetail: localStorage.gamedetail,
  teamdetail: localStorage.teamdetail,

  
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
  }
};
console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data
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
