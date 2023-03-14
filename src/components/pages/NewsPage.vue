<template>
  <div class="news">
    <MillorContainer class="news__container">
      <MillorTitle class="news__title">{{ currentNews.title }}</MillorTitle>
      <MillorPicture :name="currentNews.image" :format="currentNews.formatImage" class="news__image"/>
      <div class="news__content" v-html="currentNews.text"></div>
      <p class="news__categories">
        Категории: 
        <span 
          v-for="category in currentNews.category"
          :key="`news-category-${category.id}`"
          class="news__category"
        >
          {{ category.name }}
        </span>
      </p>
    </MillorContainer>
  </div>
</template>

<script>
import {defineComponent, computed } from "vue";
import { newsList } from "@/constants/news.ts";
import router from '../../router';

import MillorContainer from "../global/MillorContainer.vue";
import MillorTitle from "../global/MillorTitle.vue";
import MillorPicture from "../global/MillorPicture.vue";

export default defineComponent({
  name: "NewsPage",
  components: {
    MillorContainer,
    MillorTitle,
    MillorPicture,
  },
  setup() {
    const idNews = computed(() => router.currentRoute.value.params.url);
    const currentNews = computed(() => newsList.find(news => news.url === idNews.value));

    return {
      currentNews,
    }
  },
});
</script>

<styles scoped lang="scss">
@import "./styles/NewsPage/component";
</styles>
