<template>
  <section class="deep-purple darken-3">
    <h2>
      <slot></slot>
    </h2>
    <v-btn :href="link" rounded depressed color="secondary" class="ml-3">{{buttonText}}</v-btn>
  </section>
</template>

<script>
export default {
  props: ["link", "buttonText"]
};
</script>

<style lang="scss" scoped>
section {
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding-bottom: 30px;
    line-height: 30px;
  }
}
</style>
