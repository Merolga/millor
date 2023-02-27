<template>
  <section class="list-discount">
    <MillorContainer class="list-discount__container">
      <MillorTitle class="list-discount__title">Товары со скидкой</MillorTitle>
      <p class="list-discount__description">
        Наша компания предлагает покупать товар со скидкой не только в дни
        распродаж или в течение действия ограниченных предложений, но и
        пользоваться скидками постоянно!
      </p>
      <div class="list-discount__inner">
        <swiper
          :modules="modules"
          :space-between="40"
          :slides-per-view="3"
          :navigation="{
            nextEl: '.list-discount-slider__btn--next',
            prevEl: '.list-discount-slider__btn--prev',
          }"
          class="list-discount__slider list-discount-slider"
        >
          <swiper-slide
            v-for="(slide, index) in 9"
            :key="`list-discount-slide-${index}`"
            class="list-discount-slider__slide"
          >
            <ProductCard class="list-discount-slider__card" />
          </swiper-slide>
        </swiper>
        <button
          type="button"
          title="Предыдущий товар"
          class="list-discount-slider__btn list-discount-slider__btn--prev list-discount-slider-btn list-discount-slider-btn--prev"
        >
          <svg class="list-discount-slider-btn__arrow">
            <use xlink:href="../../assets/images/sprite.svg#arrow"></use>
          </svg>
        </button>
        <button
          type="button"
          title="Следующий товар"
          class="list-discount-slider__btn list-discount-slider__btn--next list-discount-slider-btn"
        >
          <svg class="list-discount-slider-btn__arrow">
            <use xlink:href="../../assets/images/sprite.svg#arrow"></use>
          </svg>
        </button>
      </div>
      <a href="#" class="list-discount__all list-discount-all">
        <span class="list-discount-all__label">Смотреть все</span>
      </a>
    </MillorContainer>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import MillorContainer from "../global/MillorContainer.vue";
import MillorTitle from "../global/MillorTitle.vue";
import ProductCard from "../parts/ProductCard.vue";

export default defineComponent({
  name: "ListDiscount",
  components: {
    MillorContainer,
    MillorTitle,
    ProductCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
});
</script>

<styles scoped lang="scss">
@import "./styles/ListDiscount/component";
</styles>
