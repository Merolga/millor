<template>
  <div class="catalog">
    <MillorContainer class="list-catalogs__container">
      <MillorTitle>Здесь будет блог</MillorTitle>
    </MillorContainer>
  </div>
</template>

<script>
import {defineComponent } from "vue";

import MillorContainer from "../global/MillorContainer.vue";
import MillorTitle from "../global/MillorTitle.vue";

export default defineComponent({
  name: "BlogPage",
  components: {
    MillorContainer,
    MillorTitle,
  },
});
</script>

<styles scoped lang="scss">
//@import "./styles/MillorTitle/component";
</styles>
