<template>
  <div class="catalog">
    <MillorContainer class="list-catalogs__container">
      <ul class="tabs">
        <li 
          v-for="(tab, index) in tabs"
          :key="`tabs-${index}`"
          :class="{'tabs__item--is-active': tab.active}"
          class="tabs__item"
        >
          <a @click="setActive(tab.value)" class="tabs__link">{{tab.caption}}</a>
        </li>
      </ul>
      <div>
        {{currentTab}}
      </div>
    </MillorContainer>
    Новосибирск, Троллейная, 85а - <span><i class="icon icon-clock" style="position: relative; top: 1px;
    margin-right: 7px;"></i>Пн-Вс: <span class="color">09.00 - 20.00</span></span>


Новосибирск, Троллейная, 85а - <span><i class="icon icon-clock" style="position: relative; top: 0; margin-right: 7px;"></i>Пн-Вс: <span class="color">09.00 - 20.00</span></span>

Пн-Вс: <span class="color">09.00 - 20.00</span>
  </div>
</template>

<script>
import {defineComponent, computed, ref } from "vue";

import MillorContainer from "../global/MillorContainer.vue";

export default defineComponent({
  name: "ContactPage",
  components: {
    MillorContainer,
  },
  setup() {
    const tabs = ref([
      {
        value: 1,
        caption: 'Контакты', 
        active: true,
      },
      {
        value: 2,
        caption: 'Наши магазины', 
        active: false,
      },
    ]);

    const setActive = tab => {
      tabs.value.find(item => item.active).active = false;
      tabs.value[tab-1].active = true; 
    };

    const currentTab = computed(() => {
      return tabs.value.find(item => item.active);
    });

    return {
      tabs,
      setActive,
      currentTab,
    }
  },
});
</script>

<styles scoped lang="scss">
@import "./styles/ContactsPage/component";
</styles>
