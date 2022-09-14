import API from "../../api";
// import { getUserIdFromLocalStore } from "@/helpers";
import { getUserIdFromLocalStore } from "../../helpers";
import { IProfile, IUser, INews } from "src/types";
import { ActionContext } from 'vuex';
import { Module } from 'vuex'
export interface setUserInfoType {
  data: {
    id: string,
  }
}
const userModule: Module<IUser, IUser> = {
  state: {
    isAutorized: Boolean(getUserIdFromLocalStore()),
    userId: getUserIdFromLocalStore(),
    loginError: "",
    isLoading: false,
    profile: {},
    news: [],
  },

  actions: {
    async loginAsync({ commit }: ActionContext<IUser, IUser>, payload: { email: string, password: string }) {
      const { email, password } = payload;
      commit("setLoading", true);
      const data = await API.loginHandlerAsync({
        email,
        password,
      });
      if (data.status === "ok") {
        commit("setUserInfo", data);
        commit("setLoading", false);
      } else {
        commit("setLoading", false);
        commit("setLoginError");
      }
    },
    // async getNewsAsync({ commit }: ActionContext<INews, INews>) {
    //   const data = await API.getNews();
    //   // commit("setNews", data);
    // },
    async getProfileInfo({ commit }: ActionContext<IUser, IUser>, payload: { userId: number }) {
      const { userId } = payload;
      const data = await API.getProfileInfo(userId);
      commit("setProfileInfo", data);
    },
    async getNewsAsync({ commit }: ActionContext<any, any>) {
      const data = await API.getNews();
      commit("setNews", data);
    },
  },
  mutations: {
    setUserInfo(state: IUser, { data }: setUserInfoType) {
      const { id: userId } = data;
      state.isAutorized = true;
      state.userId = userId;
      window.localStorage.setItem("userId", userId);
    },
    setNews(state, payload: INews[]) {
      state.news = payload
    },
    setLoading(state: IUser, payload: boolean) {
      return (state.isLoading = payload);
    },
    setProfileInfo(state: IUser, { data }: { data: IProfile }) {
      state.profile = data;
    },
    setLoginError(state: IUser) {
      state.loginError = "Wrong email or password";
    },
    logOut(state: IUser) {
      window.localStorage.removeItem("userId");
      Object.assign(state, {
        isAutorized: false,
        userId: null,
        loginError: "",
        isLoading: false,
        profile: {},
      });
    },
  },
  getters: {
    isAutorized(state: IUser) {
      return state.isAutorized;
    },
  },
};

export default userModule;