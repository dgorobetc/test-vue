<template>
  <div class="form__group field">
    <input
      type="input"
      v-bind:disabled="disabled"
      class="form__field"
      v-bind:value="value"
      v-on:input="handleInput"
      v-bind:placeholder="label"
      id="name"
    />
    <label for="name" class="form__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: "" },
    label: { type: String, default: "Label" },
    disabled: { type: Boolean, default: false },
  },
  model: {
    prop: "value",
    event: "input",
  },
  name: "castom-input",
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
