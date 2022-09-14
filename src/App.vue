<template>
  <div>
    <Header v-if="isAutorized" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Header from "./components/Header/index.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: mapState({
    isAutorized: ({ user }) => user.isAutorized,
  }),
  created() {
    if (this.isAutorized) {
      this.$router.push({ name: "profile-page" });
    } else {
      this.$router.push({ name: "login-page" });
    }
  },
  watch: {
    isAutorized(isAutorized) {
      if (isAutorized) {
        this.$router.push({ name: "profile-page" });
      } else {
        this.$router.push({ name: "login-page" });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
