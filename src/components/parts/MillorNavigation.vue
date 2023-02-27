<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="(item, index) in listNavigation"
        :key="`nav-item-${index}`"
        class="nav__item"
      >
        <a href="#" class="nav__link">
          {{ item.name }}
        </a>
      </li>
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
