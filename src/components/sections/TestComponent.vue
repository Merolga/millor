<template>
  <button
      @click="$emit('get-id', tab.id)"
  >
    {{ tab.name }}
  </button>  
</template>

<script>

export default {
  name: "TestComponent",
  props: {
    tab: {
      type: Object,
    }
  },
  setup() {
    
    return {

    };
  },
};
</script>

<styles scoped lang="scss">
</styles>
