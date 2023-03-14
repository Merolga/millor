<template>
  <footer class="footer">
    <MillorContainer class="footer__container">
      <router-link to="/">
        <MillorPicture name="logo" class="footer__logo" />
      </router-link>
      <MillorNavigation class="footer__nav" />
    </MillorContainer>
  </footer>
</template>

<script>
import MillorContainer from "../global/MillorContainer.vue";
import MillorNavigation from "../parts/MillorNavigation.vue";
import MillorPicture from "../global/MillorPicture.vue";

export default {
  name: "FooterMillor",
  components: {
    MillorContainer,
    MillorNavigation,
    MillorPicture,
  },
  setup() {
    return {

    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/FooterMillor/component";
</styles>
