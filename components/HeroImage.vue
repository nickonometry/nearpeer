

<template>
  <div class="hero-container">
    <v-img src="/images/homepage-hero/hero1.jpg" aspect-ratio="3.2"></v-img>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-container {
  height: 100%;
  max-height: 600px;
  background: #4611a9;
  position: relative;

  img {
    mix-blend-mode: screen;
    opacity: 0.3;
    width: 100%;
  }
}
</style>
