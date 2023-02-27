<template>
  <button type="button" :class="classBtn" class="button">
    <svg v-if="icon" class="button__icon">
      <use :xlink:href="`${pathIcon}#${icon}`"></use>
    </svg>
    <span :class="classLabel" class="button__label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MillorButton",
  props: {
    icon: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const pathIcon = require(`../../assets/images/sprite.svg`);

    const classBtn = computed(() =>
      props.theme ? `button--theme-${props.theme}` : ""
    );
    const classLabel = computed(() =>
      props.size ? `button__label--size-${props.size}` : ""
    );

    return {
      pathIcon,
      classBtn,
      classLabel,
    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/MillorButton/component";
</styles>
