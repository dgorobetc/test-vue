<script lang="ts">
import Input from '../../components/Field';
import { mapState } from 'vuex';
export default {
  name: "login-page",
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  computed: mapState({
    isLoading: ({ user }) => user.isLoading,
  }),
  methods: {
    loginHandler() {
      const { email, password } = this
      this.$store.dispatch('loginAsync', { email, password })
    },
  },
  components: {
    Input
  }
};
</script>

<template>
  <div class="login-wrapper">
    <h3 class="login-title">Login</h3>
    <Input v-model="email" label="Email" v-bind:disabled="isLoading" />
    <Input v-model="password" label="Password" v-bind:disabled="isLoading" />
    <button v-bind:disabled="isLoading" class="log" @click="loginHandler()">
      Login
    </button>
  </div>
</template>

<style lang="scss">
@import "./styles.scss";
</style>
