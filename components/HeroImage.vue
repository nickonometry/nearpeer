

<template>
  <div class="hero-container">
    <v-img
      src="/images/homepage-hero/hero1.jpg"
      lazy-src="/images/homepage-hero/hero1.jpg"
      aspect-ratio="3.2"
    >
      <div class="fill-height bottom-gradient"></div>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-container {
  height: 100%;
  max-height: 600px;

  img {
    // mix-blend-mode: screen;
    // opacity: 0.3;
    // width: 100%;
  }
}

.bottom-gradient {
  background-image: linear-gradient(
    to right,
    rgba(70, 17, 169, 0.75) 100%,
    transparent 72px
  );
}
</style>
