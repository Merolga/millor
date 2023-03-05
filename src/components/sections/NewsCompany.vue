<template>
  <section class="news-company">
    <svg class="news-company__wave news-company__wave--top">
      <use xlink:href="../../assets/images/sprite.svg#wave"></use>
    </svg>
    <svg class="news-company__wave news-company__wave--bottom">
      <use xlink:href="../../assets/images/sprite.svg#wave"></use>
    </svg>
    <MillorContainer class="news-company__container">
      <div class="news-company__header">
        <MillorTitle class="news-company__title">Новости компании</MillorTitle>
        <a href=""></a>
      </div>

    </MillorContainer>
  </section>
</template>

<script>
import MillorContainer from "../global/MillorContainer.vue";
import MillorTitle from "../global/MillorTitle.vue";
// import MillorPicture from "../global/MillorPicture.vue";
// import MillorButton from "../global/MillorButton.vue";

export default {
  name: "NewsCompany",
  components: {
    MillorContainer,
    MillorTitle,
    // MillorPicture,
    // MillorButton,
  },
  setup() {
    return {

    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/NewsCompany/component";
</styles>
