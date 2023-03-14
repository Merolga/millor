<template>
  <MillorContainer class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">
        <router-link to="/" class="breadcrumbs__link">
          Главная
        </router-link>
      </li>
      <li class="breadcrumbs__item">
        {{ currentPage }}
      </li>
    </ul>
  </MillorContainer>
</template>

<script>
import {defineComponent, computed } from "vue";
import router from '../../router';

import MillorContainer from "../global/MillorContainer.vue";


export default defineComponent({
  name: "BreadCrumbs",
  components: {
    MillorContainer,
  },
  setup() {
    const currentPage = computed(() => router.currentRoute.value.name);

    return {
      currentPage,
    };
  },
});
</script>

<styles scoped lang="scss">
@import "./styles/BreadCrumbs/component";
</styles>
