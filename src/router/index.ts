const Login = () => import("@/pages/login/index.vue");
const ProfilePage = () => import("@/pages/Profile/index.vue");
const NewsPage = () => import("@/pages/News/index.vue");

const routes = [
  { path: "/profile", component: ProfilePage, name: "profile-page" },
  { path: "/news", component: NewsPage, name: "news-page" },
  { path: "/login", component: Login, name: "login-page" },
];

export default routes;
