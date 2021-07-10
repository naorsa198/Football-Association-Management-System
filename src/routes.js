import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },

  {
    path: "/logout",
    name: "logout",
    component: () => import("./components/LogOut")
  },
  {
    path: "/PlayerPage",
    name: "PlayerPage",
    component: () => import("./pages/PlayerPage")
  },
  {
    path: "/TeamPage",
    name: "TeamPage",
    component: () => import("./pages/TeamPage2")
  },
  {
    path: "/currSeasonGames",
    name: "currSeasonGames",
    component: () => import("./pages/SeasonGamesPage")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage")
  },
  {
    path:"/favorites",
    name:"favorites",
    component:() => import("./pages/FavoriteGamePage")
  },
  
  
{
  path: "/AdminPage",
  name: "AdminPage",
  component: () => import("./pages/AdminPage")
},

{
path: "/AddGame",
name: "AddGame",
component: () => import("./components/AddGame")


},
{
  path: "/addResult",
name: "addResult",
component: () => import("./pages/addResult")
},
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }

];

export default routes;
