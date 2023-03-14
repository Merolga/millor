<template>
  <div class="millor">
    <HeaderMillor />
    <BreadCrumbs v-if="showBreadcrumbs" />
    <router-view/>
    <SubscriptionForm />
    <FooterMillor />
  </div>
</template>

<script>
import {defineComponent, computed, unref } from "vue";
import router from './router';

import HeaderMillor from './components/sections/HeaderMillor.vue';
import BreadCrumbs from './components/parts/BreadCrumbs.vue';
import SubscriptionForm from './components/sections/SubscriptionForm.vue';
import FooterMillor from './components/sections/FooterMillor.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderMillor,
    BreadCrumbs,
    SubscriptionForm,
    FooterMillor,
  },
  setup() {
    const currentPage = computed(() => router.currentRoute.value.name);
    const showBreadcrumbs = computed(() => unref(currentPage) !== 'home');

    return {
      showBreadcrumbs,
      router,
    }
  }
})
</script>

<styles scoped lang="scss">
  @import "./styles/component";
</styles>
