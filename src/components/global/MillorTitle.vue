<template>
  <h3
      :class="additionalClass"
      class="millor-title"
  >
    <span class="millor-title__label">
      <slot></slot>
    </span>
  </h3>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "MillorTitle",
  props: {
    light: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const additionalClass = computed(() => ({'millor-title--theme-light': props.light}));

    return {
      additionalClass,
    }
  }
});
</script>

<styles scoped lang="scss">
@import "./styles/MillorTitle/component";
</styles>
