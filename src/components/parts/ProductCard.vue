<template>
  <MillorCard class="product-card">
    <div class="product-card__top">
      <div class="product-card__discount product-card-discount">
        <div class="product-card-discount__percent">%</div>
        <span class="product-card-discount__label">Скидки</span>
      </div>
      <div class="product-card__select product-card-select">
        <div class="product-card-select__top">
          <span class="product-card-select__label">250 г.</span>
          <svg class="product-card-select__icon">
            <use xlink:href="../../assets/images/sprite.svg#arrow-down"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="product-card__row">
      <MillorPicture name="product-1" class="product-card__image" />
      <div class="product-card__cell">
        <div class="product-card__rating product-card-rating">
          <svg
            v-for="star in 5"
            :key="`product-card-rating-star-${star}`"
            :class="{'product-card-rating__star--theme-accent': star <= 4}"
            class="product-card-rating__star"
          >
            <use xlink:href="../../assets/images/sprite.svg#star"></use>
          </svg>
        </div>
        <span class="product-card__ball">4.0</span>
        <span class="product-card__reviews">(32 отзыва)</span>
        <div class="product-card__roast-degree product-card-roast-degree">
          <svg
            v-for="star in 5"
            :key="`product-card__roast-degree-coffee-${star}`"
            class="product-card-roast-degree__item"
          >
            <use xlink:href="../../assets/images/sprite.svg#coffee"></use>
          </svg>
        </div>
        <div class="product-card__parameter product-card-parameter">
          <span class="product-card-parameter__label">Кислинка</span>
          <div class="product-card-parameter__count">
            <div
              v-for="dot in 10"
              :key="`product-card-parameter-dot-1-${dot}`"
              :class="{'product-card-parameter__dot--theme-active': dot <= 7}"
              class="product-card-parameter__dot"
            ></div>
          </div>
        </div>
        <div class="product-card__parameter product-card-parameter">
          <span class="product-card-parameter__label">Горчинка</span>
          <div class="product-card-parameter__count">
            <div
              v-for="dot in 10"
              :key="`product-card-parameter-dot-1-${dot}`"
              :class="{'product-card-parameter__dot--theme-active': dot <= 5}"
              class="product-card-parameter__dot"
            ></div>
          </div>
        </div>
        <div class="product-card__parameter product-card-parameter">
          <span class="product-card-parameter__label">Насыщенность</span>
          <div class="product-card-parameter__count">
            <div
              v-for="dot in 10"
              :key="`product-card-parameter-dot-1-${dot}`"
              :class="{'product-card-parameter__dot--theme-active': dot <= 9}"
              class="product-card-parameter__dot"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <p class="product-card__title">Colombia Supremo</p>
    <p class="product-card__description">
      Свежеобжаренный кофе - описание товара, вкус, аромат
    </p>
    <div class="product-card__bottom">
      <span class="product-card__old-price">350 ₽</span>
      <span class="product-card__price">250 ₽</span>
      <MillorButton theme="main" size="xs" class="product-card__btn"
        >В корзину</MillorButton
      >
    </div>
  </MillorCard>
</template>

<script>
import MillorCard from "../global/MillorCard.vue";
import MillorPicture from "../global/MillorPicture.vue";
import MillorButton from "../global/MillorButton.vue";

export default {
  name: "ProductCard",
  components: {
    MillorCard,
    MillorPicture,
    MillorButton,
  },
  setup() {
    return {};
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/ProductCard/component";
</styles>
