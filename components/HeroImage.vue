

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

    <div class="hero-container__text-container">
      <h2>
        Harness the power of
        <span class="underline">peer</span>
        <span class="underline">engagement</span>
      </h2>
      <p>Leverage peer networks for more committed, enrolled successful students</p>
      <div class="hero-container__text-container__link">
        <img src="https://via.placeholder.com/33x53" />
        <a href="#">Are you a student? Sign up and download the Nearpeer app here!</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-container {
  height: 100%;
  max-height: 600px;
  position: relative;

  &__text-container {
    position: absolute;
    top: 80px;
    left: 80px;
    width: 590px;
    color: white;

    .underline {
      border-bottom: 8px solid #ff4081;
      display: inline-block;
      line-height: 0.85;
    }

    h2 {
      font-size: 88px;
      line-height: 76px;
      font-weight: bold;
    }

    p {
      font-size: 24px;
      margin: 48px 0;
      line-height: 28px;
      font-weight: bold;
    }

    &__link {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 12px;
      align-items: center;

      a {
        font-size: 16px;
        color: white;
        font-weight: bold;
      }
    }
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
