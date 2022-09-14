<script lang="ts">
import { mapActions, mapState } from "vuex";
export default {
  name: "news-page",
  computed: {
    ...mapState({
      newsList: (state) => state.user.news,
    }),
  },
  methods: {
    ...mapActions(["getNewsAsync"]),
  },
  created() {
    this.getNewsAsync();
  },
};
</script>

<template>
  <div class="news-wrapper">
    <div class="new-list-container" v-if="newsList.length">
      <div class="news-item" v-for="item of newsList" :key="item.id">
        <p class="md-body-1">{{ item.text }}</p>
        <p class="md-subheading">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styles.scss";
</style>
