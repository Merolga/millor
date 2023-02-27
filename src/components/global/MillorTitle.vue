<template>
  <h3 class="millor-title">
    <span class="millor-title__label">
      <slot></slot>
    </span>
  </h3>
</template>

<script>

export default {
  name: "MillorTitle",
};
</script>

<styles scoped lang="scss">
@import "./styles/MillorTitle/component";
</styles>
