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
        <MillorTitle>Новости компании</MillorTitle>
        <MillorButton>Читать все</MillorButton>
      </div>
      <div class="news-company__content">
        <MillorCard
          v-for="item in previewNewsList"
          :key="`news-company-card-${item.id}`"
          class="news-company__card news-company-card"
        >
          <MillorPicture :name="item.image" :format="item.formatImage" class="news-company-card__image"/>
          <div class="news-company-card__content">
            <p class="news-company-card__title">{{ item.title }}</p>
            <div class="news-company-card__description" v-html="item.text"></div>
            <router-link :to="`/news/${item.url}`" class="news-company-card-link">
              <span class="news-company-card-link__label">Подробнее</span>
              <svg class="news-company-card-link__arrow">
                <use xlink:href="../../assets/images/sprite.svg#arrow"></use>
              </svg>
            </router-link>
          </div>
        </MillorCard>
      </div>
    </MillorContainer>
  </section>
</template>

<script>
import { newsList } from "@/constants/news.ts";

import MillorContainer from "../global/MillorContainer.vue";
import MillorTitle from "../global/MillorTitle.vue";
import MillorPicture from "../global/MillorPicture.vue";
import MillorButton from "../global/MillorButton.vue";
import MillorCard from "../global/MillorCard.vue";

export default {
  name: "NewsCompany",
  components: {
    MillorContainer,
    MillorTitle,
    MillorPicture,
    MillorButton,
    MillorCard,
  },
  setup() {
    const previewNewsList = newsList.sort((a, b) => b.date - a.date).slice(0, 4);

    return {
      previewNewsList,
    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/NewsCompany/component";
</styles>
