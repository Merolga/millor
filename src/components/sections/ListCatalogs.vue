<template>
  <section class="list-catalogs">
    <MillorContainer class="list-catalogs__container">
      <MillorTitle>Каталоги нашей продукции</MillorTitle>
      <div class="list-catalogs__inner">
        <MillorCard
          v-for="(item, index) in catalogsList"
          :key="`list-catalogs-item-${index}`"
          class="list-catalogs__item list-catalogs-item"
        >
          <MillorPicture
            :name="`catalog-${item.image}`"
            :class="`list-catalogs-item__image--${item.image}`"
            class="list-catalogs-item__image"
          />
          <p class="list-catalogs-item__title">
            {{ item.title }}
          </p>
          <MillorButton theme="main" size="s" class="list-catalogs-item__btn">
            Купить
          </MillorButton>
        </MillorCard>
      </div>
    </MillorContainer>
  </section>
</template>

<script>
import MillorContainer from "../global/MillorContainer.vue";
import MillorTitle from "../global/MillorTitle.vue";
import MillorCard from "../global/MillorCard.vue";
import MillorPicture from "../global/MillorPicture.vue";
import MillorButton from "../global/MillorButton.vue";
import { catalogsList } from "@/constants/constants.ts";

export default {
  name: "ListCatalogs",
  components: {
    MillorContainer,
    MillorTitle,
    MillorCard,
    MillorPicture,
    MillorButton,
  },
  setup() {
    return {
      catalogsList,
    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/ListCatalogs/component";
</styles>
