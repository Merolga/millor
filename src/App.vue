<template>
  <div class="millor">
    {{ count }}
    <hr>
    <div style="display: flex; gap: 10px">
      <TestComponent 
        v-for="(tab, index) in tabs"
        :key="`tab-${index}`"
        :tab="tab"
        @get-id="increaseCount"
     />
    </div>
    <HeaderMillor />
    <MainSlider />
    <ListCatalogs />
    <ListDiscount />
    <OurAdvantage />
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderMillor from './components/sections/HeaderMillor.vue';
import MainSlider from './components/sections/MainSlider.vue';
import ListCatalogs from './components/sections/ListCatalogs.vue';
import ListDiscount from './components/sections/ListDiscount.vue';
import OurAdvantage from './components/sections/OurAdvantage.vue';
import TestComponent from './components/sections/TestComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderMillor,
    MainSlider,
    ListCatalogs,
    ListDiscount,
    OurAdvantage,
    TestComponent,
  },
  setup() {
    const tabs = [
      {
        id: 1,
        name: 'name 1',
      },
      {
        id: 2,
        name: 'name 2',
      },
      {
        id: 3,
        name: 'name 3',
      },
      {
        id: 4,
        name: 'name 4',
      },
    ];

    const count = ref(0);

    function increaseCount(n) {
      count.value = n
    }

    return {
        tabs,
        increaseCount,
        count,
      };
  },
}
</script>

<styles scoped lang="scss">
  @import "./styles/component";
</styles>