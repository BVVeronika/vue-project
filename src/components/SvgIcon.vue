<template>
  <svg :class='className' xmlns='http://www.w3.org/2000/svg'>
    <title v-if='title'>{{ title }}</title>
    <use :xlink:href='iconPath' xmlns:xlink='http://www.w3.org/1999/xlink' />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: null
    }
  },

  computed: {
    iconPath () {
      console.log(require(`@/assets/svg/${this.name}.svg`));
      return require(`@/assets/svg/${this.name}.svg`).default.url;
    },

    className () {
      return 'svg-icon svg-icon--' + this.name;
    }
  }
};
</script>

<style>
  .svg-icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
  }
</style>
