<template>
  <div class="millor">
    <HeaderMillor />
    <router-view/>
  </div>
</template>

<script>
import HeaderMillor from './components/sections/HeaderMillor.vue';

export default {
  name: 'App',
  components: {
    HeaderMillor,
  },
}
</script>

<styles scoped lang="scss">
  @import "./styles/component";
</styles>
