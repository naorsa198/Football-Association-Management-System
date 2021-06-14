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
  component: () => import("./pages/TeamPage")
},

  {
    path: "*",
    name: "notFound",
    component: NotFound
  }

];

export default routes;
