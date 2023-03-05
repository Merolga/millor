<template>
  <nav class="nav">
    <ul class="nav__list">
      <router-link
        v-for="(item, index) in listNavigation"
        :key="`nav-item-${index}`"
        :to="`/${item.link}`"
        class="nav__link"
      >
        {{ item.name }}
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { listNavigation } from "@/constants/constants.ts";

export default {
  name: "HeaderMillor",
  components: {},
  setup() {
    return {
      listNavigation,
    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/MillorNavigation/component";
</styles>
