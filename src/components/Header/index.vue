<template>
  <div class="wrapper">
    <div />
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'profile-page' }">Profile</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'profile-page' }">About</router-link>
        </li>
      </ul>
    </nav>
    <md-button @click="logOut" v-if="isAutorized" class="md-raised md-accent">
      Logout
    </md-button>
  </div>
</template>

<script lang="js">
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: "header-component",
  computed: mapGetters(['isAutorized']),
  methods: { ...mapMutations(['logOut'])},
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
