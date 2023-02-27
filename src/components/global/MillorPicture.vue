<template>
  <picture class="picture">
    <source :srcset="pathWebp">
    <img
      :src="pathPng"
      :alt="name"
      class="picture__image"
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
  },
  setup(props) {
    const pathPng = require(`../../assets/images/${props.name}.png`);
    const pathWebp = require(`../../assets/images/${props.name}.webp`);

    return {
      pathPng,
      pathWebp,
    }
  }
};
</script>

<styles scoped lang="scss">

</styles>
