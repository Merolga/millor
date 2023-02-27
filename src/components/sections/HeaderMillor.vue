<template>
  <header class="header">
    <MillorContainer class="header__container">
      <a href="#">
        <MillorPicture name="logo" class="header__logo" />
      </a>
      <MillorNavigation class="header__nav" />
      <div class="header__btns">
        <MillorButton
          v-for="(btn, index) in btnsHeader"
          :key="`header-button-${index}`"
          :icon="btn.icon"
          :title="btn.title"
          theme="icon"
          class="header__button"
        />
      </div>
    </MillorContainer>
  </header>
</template>

<script>
import MillorContainer from "../global/MillorContainer.vue";
import MillorPicture from "../global/MillorPicture.vue";
import MillorButton from "../global/MillorButton.vue";
import MillorNavigation from "../parts/MillorNavigation.vue";
import { btnsHeader } from "@/constants/constants.ts";

export default {
  name: "HeaderMillor",
  components: {
    MillorContainer,
    MillorPicture,
    MillorButton,
    MillorNavigation,
  },
  setup() {
    return {
      btnsHeader,
    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/HeaderMillor/component";
</styles>
