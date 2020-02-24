

<template>
  <div class="hero-container">
    <div class="overlay"></div>

    <div class="slides">
      <div class="slide-1"></div>
      <div class="hero">
        <h2>
          Harness the power of
          <span class="underline">peer</span>
          <span class="underline">engagement</span>
        </h2>
        <p>
          Universities partner with Nearpeer to achieve higher enrollment.
          Nearpeer is the best way for college students to find and engage
          peers “like them” - creating community, sense of belonging,
          and higher commitment to their college.
        </p>
      </div>
      <div class="right-side">
        <img src="/images/homepage-hero/cellphone-android.svg" />
        <p>Are you a student at a Nearpeer partner university? Get the Nearpeer app here!</p>
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

  .slides {
    .slide-1 {
      height: 600px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-image: url(/images/homepage-hero/hero1.jpg);
    }
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
      margin-bottom: 16px;
      padding: 0;
      line-height: 74px;
    }

    .underline {
      border-bottom: 8px solid #ff4081;
      display: inline-block;
      line-height: 0.85;
    }

    p {
      line-height: 24px;
      font-size: 16 px;
      font-weight: bold;
      margin-bottom: 48px;
      max-width: 500px;
    }
  }

  .right-side {
    position: absolute;
    bottom: 10%;
    right: 5%;
    z-index: 3;
    color: #fff;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.75);
    max-width: 550px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      max-width: 346px;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      margin: 0 0 0 16px;
    }
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
  .hero-container {
    position: relative;
    height: 100vh;

    .slides {
      .slide-1 {
        height: 100vh;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url(/images/homepage-hero/hero1.jpg);
      }
    }

    .hero {
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      height: 100vh;
      padding: 3%;

      h2 {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 56px;
        padding: 0;
        line-height: 48px;
      }
    }
  }
}
</style>
