<template>
  <div class="millor">
    <HeaderMillor />
    <MainSlider />
    <ListCatalogs />
    <ListDiscount />
    <OurAdvantage />
  </div>
</template>

<script>
import HeaderMillor from './components/sections/HeaderMillor.vue';
import MainSlider from './components/sections/MainSlider.vue';
import ListCatalogs from './components/sections/ListCatalogs.vue';
import ListDiscount from './components/sections/ListDiscount.vue';
import OurAdvantage from './components/sections/OurAdvantage.vue';

export default {
  name: 'App',
  components: {
    HeaderMillor,
    MainSlider,
    ListCatalogs,
    ListDiscount,
    OurAdvantage,
  },
}
</script>

<styles scoped lang="scss">
  @import "./styles/component";
</styles>