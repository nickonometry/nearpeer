

<template>
  <div class="hero-container">
    <div class="slides">
      <div class="slide-1"></div>
      <div class="hero">
        <h2>
          Harness the power of
          <span class="underline">peer</span>
          <span class="underline">engagement</span>
        </h2>
        <p>
          Universities partner with Nearpeer to improve enrollment, engagement,
          and the learning experience. Nearpeer is the best way for college
          students to find and engage peers “like them” - creating community,
          sense of belonging, and higher commitment to their college.
        </p>
      </div>
      <a href="https://www.nearpeer.net">
        <div class="right-side">
          <img src="/images/np_phone.svg" alt />
          <p>
            Are you a student at a Nearpeer partner university? Get the Nearpeer
            app here!
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-container {
  position: relative;
  height: 500px;

  .slides {
    .slide-1 {
      height: 500px;
      background-size: cover;
      background-position: top center;
      background-repeat: no-repeat;
      background-image: url(/images/homepage-hero/hero.jpg);
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
      font-size: 16px;
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

/********************************/
/*          Media Queries       */
/********************************/
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
        background-image: url(/images/homepage-hero/hero.jpg);
      }
    }

    .hero {
      justify-content: flex-start;
      max-width: 100%;
      left: 0;
      padding: 16px;
      text-align: center;

      h2 {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 56px;
        padding: 0;
        line-height: 48px;
      }

      p {
        max-width: 100%;
      }
    }

    .right-side {
      left: 0;
      right: 0;
      width: 75%;
      margin: 0 auto;
      justify-content: flex-start;

      p {
        max-width: 100%;
      }
    }
  }
}
</style>
