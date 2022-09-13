<template>
  <div class="profile-wrapper">
    <span class="md-display-1">User location: Ukraine</span>
    <div class="description-wrapper">
      <span class="md-headline">Languages:</span>
      <md-list v-if="user.profile.languages">
        <md-list-item
          v-for="(item, index) in user.profile?.languages"
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
          v-for="(item, index) in user.profile?.social"
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

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "profile-page",
  data: function () {
    return {
      test: {
        testData: undefined,
      },
      password: "",
    };
  },
  computed: { ...mapState(["user"]) },
  methods: {
    ...mapActions(["getProfileInfo"]),
  },
  created() {
    const { userId } = this.user;
    if (userId) {
      this.getProfileInfo({ userId });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
