<template>
  <div class="main">
    <MainSlider />
    <ListCatalogs />
    <ListDiscount />
    <OurAdvantage />
    <OurWork />
    <NewsCompany />
  </div>
</template>

<script>
import {defineComponent } from "vue";

import MainSlider from '@/components/sections/MainSlider.vue';
import ListCatalogs from '@/components/sections/ListCatalogs.vue';
import ListDiscount from '@/components/sections/ListDiscount.vue';
import OurAdvantage from '@/components/sections/OurAdvantage.vue';
import OurWork from '@/components/sections/OurWork.vue';
import NewsCompany from '@/components/sections/NewsCompany.vue';

export default defineComponent({
  name: "MainPage",
  components: {
    MainSlider,
    ListCatalogs,
    ListDiscount,
    OurAdvantage,
    OurWork,
    NewsCompany,
  },
});
</script>

<styles scoped lang="scss">
//@import "./styles/MillorTitle/component";
</styles>
