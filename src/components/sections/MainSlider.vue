<template>
  <div class="main-slider">
    <MillorContainer>
      <swiper
        :modules="modules"
        :pagination="{ clickable: true }"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide
          v-for="(slide, index) in sliderData"
          :key="`main-slider-slide-${index}`"
          class="main-slider__slide main-slider-slide"
        >
          <h2 class="main-slider-slide__title main-slider-slide-title">
            <span class="main-slider-slide-title__label">
              {{ slide.title }}
            </span>
          </h2>
          <div class="main-slider-slide__row">
            <div class="main-slider-slide__content">
              <p
                v-for="(label, index) in slide.labels"
                :key="`main-slider-slide-label-${index}`"
                class="main-slider-slide__label"
                v-html="label"
              ></p>
              <MillorButton
                theme="main"
                size="l"
                class="main-slider-slide__btn"
              >
                Посмотреть каталог
              </MillorButton>
            </div>
            <div class="main-slider-slide__decor">
              <MillorPicture
                v-for="(image, index) in slide.images"
                :key="`main-slider-slide-img-${index}`"
                :name="image"
                :class="`main-slider-slide__img--${image}`"
                class="main-slider-slide__img"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </MillorContainer>
  </div>
</template>

<script>
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";
import MillorContainer from "../global/MillorContainer.vue";
import MillorPicture from "../global/MillorPicture.vue";
import MillorButton from "../global/MillorButton.vue";
import { sliderData } from "@/constants/constants.ts";

export default {
  name: "MainSlider",
  components: {
    MillorContainer,
    Swiper,
    SwiperSlide,
    MillorPicture,
    MillorButton,
  },
  setup() {
    return {
      sliderData,
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/MainSlider/component";
</styles>
