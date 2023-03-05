<template>
  <picture class="millor-picture">
    <source :srcset="pathWebp">
    <img
      :src="pathPng"
      :alt="name"
      class="millor-picture__image"
    />
  </picture>
</template>

<script>
export default {
  name: "MillorPicture",
  props: {
    name: {
      type: String,
      default: "",
    },
    format: {
      type: String,
      default: 'png'
    },
  },
  setup(props) {
    const pathPng = require(`../../assets/images/${props.name}.${props.format}`);
    const pathWebp = require(`../../assets/images/${props.name}.webp`);

    return {
      pathPng,
      pathWebp,
    }
  }
};
</script>

<styles scoped lang="scss">
@import "./styles/MillorPicture/component";
</styles>
