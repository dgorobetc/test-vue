const Login = () => import("../pages/login/index.vue");
const ProfilePage = () => import("@/pages/Profile");

const routes = [
  { path: "/profile", component: ProfilePage, name: "profile-page" },
  // { path: "/profile", component: ProfilePage, name: "profile-page" },
  { path: "/login", component: Login, name: "login-page" },
];

export default routes;
