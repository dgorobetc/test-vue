import Login from "../pages/login/index.vue";
import ProfilePage from "@/pages/Profile";
const routes = [
  { path: "/profile", component: ProfilePage, name: "profile-page" },
  { path: "/login", component: Login, name: "login-page" },
];

export default routes;
