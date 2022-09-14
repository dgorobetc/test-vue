<template>
  <div class="profile-wrapper">
    <span class="md-display-1">User location: Ukraine</span>
    <div class="description-wrapper">
      <span class="md-headline">Languages:</span>
      <md-list v-if="user.profile.languages">
        <md-list-item
          v-for="(item, index) in user.profile.languages"
          :key="index"
        >
          {{ item }}
        </md-list-item>
      </md-list>
    </div>
    <div class="description-wrapper">
      <span class="md-headline">Social links:</span>
      <md-list v-if="user.profile.social">
        <md-list-item
          v-for="(item, index) in user.profile.social"
          :key="index"
          v-bind:href="item.link"
          target="_blank"
        >
          {{ item.label }}
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
export default {
  name: "profile-page",
  computed: {
    ...mapState({
      profile: (state) => state.user.profile,
      user: (state) => state.user,
    }),
  },
  methods: {
    ...mapActions(["getProfileInfo"]),
  },
  created() {
    const { userId } = this.user;
    const { dispatch } = this.$store;
    if (userId) {
      dispatch("getProfileInfo", { userId });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
