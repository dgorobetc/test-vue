<template>
  <div class="form__group field">
    <input
      type="input"
      :disabled="disabled"
      class="form__field"
      :value="value"
      @input="handleInput"
      :placeholder="label"
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
