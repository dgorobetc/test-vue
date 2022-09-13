import API from "@/api";
import { getUserIdFromLocalStore } from "@/helpers";

export default {
  state: {
    isAutorized: Boolean(getUserIdFromLocalStore()),
    userId: Number(getUserIdFromLocalStore()),
    loginError: "",
    isLoading: false,
    profile: {},
  },
  actions: {
    async loginAsync({ commit }, payload) {
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
    async getProfileInfo({ commit }, payload) {
      const { userId } = payload;
      const data = await API.getProfileInfo(userId);
      commit("setProfileInfo", data);
    },
  },
  mutations: {
    setUserInfo(state, { data }) {
      const { id: userId } = data;
      state.isAutorized = true;
      state.userId = userId;
      window.localStorage.setItem("userId", userId);
    },
    setLoading(state, payload) {
      return (state.isLoading = payload);
    },
    setProfileInfo(state, { data }) {
      state.profile = data;
    },
    setLoginError(state) {
      state.loginError = "Wrong email or password";
    },
    logOut(state) {
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
    isAutorized(state) {
      return state.isAutorized;
    },
  },
};
