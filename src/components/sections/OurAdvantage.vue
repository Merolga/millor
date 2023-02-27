<template>
  <section class="our-advantage">
    <svg class="our-advantage__wave">
      <use xlink:href="../../assets/images/sprite.svg#wave"></use>
    </svg>
    <MillorContainer>
      <MillorTitle class="our-advantage__title"
        >Почему стоит работать именно с нами?</MillorTitle
      >
    </MillorContainer>
    <div class="our-advantage__bg">
      <MillorContainer class="our-advantage__container">
        <MillorPicture name="advantage" class="our-advantage__image" />
        <div class="our-advantage__content">
          <ul class="our-advantage__list">
            <li
              v-for="(item, index) in ourAdvantageList"
              :key="`our-advantage-item-${index}`"
              class="our-advantage__item our-advantage-item"
            >
              <div class="our-advantage-item__decor">
                <svg
                  :class="`our-advantage-item__icon--${item.icon}`"
                  class="our-advantage-item__icon"
                >
                  <use :xlink:href="`${pathIcon}#${item.icon}`"></use>
                </svg>
              </div>
              <div class="our-advantage-item__content">
                <p class="our-advantage-item__title">{{ item.title }}</p>
                <p class="our-advantage-item__descr">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </MillorContainer>
    </div>
  </section>
</template>

<script>
import MillorContainer from "../global/MillorContainer.vue";
import MillorTitle from "../global/MillorTitle.vue";
import MillorPicture from "../global/MillorPicture.vue";
import { ourAdvantageList } from "@/constants/constants.ts";

export default {
  name: "OurAdvantage",
  components: {
    MillorContainer,
    MillorTitle,
    MillorPicture,
  },
  setup() {
    const pathIcon = require(`../../assets/images/sprite.svg`);

    return {
      ourAdvantageList,
      pathIcon,
    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/OurAdvantage/component";
</styles>
