

<template>
  <div class="hero-container">
    <div class="overlay"></div>

    <div class="slides">
      <div class="slide-1"></div>
      <div class="hero">
        <hgroup>
          <h2>
            Harness the power of
            <span class="underline">peer</span>
            <span class="underline">engagement</span>
          </h2>
          <h3>
            Leverage peer networks for more committed,
            enrolled successful students
          </h3>
        </hgroup>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-container {
  position: relative;
  height: 600px;
}

.hero {
  position: absolute;
  top: 10%;
  left: 5%;
  z-index: 3;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.75);
  max-width: 550px;

  h2 {
    font-size: 4em;
    font-weight: bold;
    margin-bottom: 48px;
    padding: 0;
    line-height: 74px;
  }

  .underline {
    border-bottom: 8px solid #ff4081;
    display: inline-block;
    line-height: 0.85;
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-image: linear-gradient(
    to right,
    rgba(70, 17, 169, 0.8),
    rgba(70, 17, 169, 0.95)
  );
  // opacity: 0.85;
  // mix-blend-mode: multiply;
}

.hero-container .slides .slide-1 {
  height: 600px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.hero-container .slides .slide-1 {
  background-image: url(/images/homepage-hero/hero1.jpg);
}

/********************************/
/*          Media Queries       */
/********************************/
@media screen and (min-width: 980px) {
  .hero {
    width: 980px;
  }
}
@media screen and (max-width: 640px) {
  .hero {
    h2 {
      font-size: 4em;
    }
  }
}
</style>
