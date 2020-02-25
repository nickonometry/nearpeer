<template>
  <section class="enrollment-rate">
    <div class="enrollment-rate__grid">
      <h2>
        Nearpeer users are over
        <span>6 times</span> more likely to
        <span>enroll</span>
      </h2>
      <p>Measurement based on 2019 data from over 5,000 deposited students at a Nearpeer partner institution, and measured by comparing Fall 2019 enrollment status of Nearpeer users vs. non-users after controlling for income level (deposit waiver), state residency, gender, race (white/non-white), student orientation attendance, and more.</p>
      <img src="~assets/images/4bubble.png" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
.enrollment-rate {
  padding: 100px 20px;
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;

    h2 {
      max-width: 285px;
      font-size: 43px;
      font-weight: bold;
      color: #4611a9;
      line-height: 45px;
      span {
        color: #ff1a80;
      }
    }
    p {
      max-width: 285px;
      font-size: 15px;
    }

    img {
      max-width: 285px;
      justify-self: center;
      width: 100%;
    }
  }
  .st0 {
    opacity: 0.904;
  }
  .st1 {
    fill: #ff4081;
  }
  .st2 {
    clip-path: url(#SVGID_2_);
  }
  .st3 {
    fill: #4611a9;
    stroke: #4f00b0;
    stroke-miterlimit: 10;
  }
  .st4 {
    clip-path: url(#SVGID_4_);
  }
  .st5 {
    fill: #d8d8d8;
    stroke: #ffffff;
    stroke-width: 10;
    stroke-miterlimit: 10;
  }
  .st6 {
    clip-path: url(#SVGID_6_);
  }
  .st7 {
    fill: #d8d8d8;
  }
}

@media only screen and (max-width: 1024px) {
  section {
    width: 100%;
    margin: 0 auto;
  }

  .enrollment-rate {
    padding: 24px;
    &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      justify-items: center;
      align-items: center;

      h2 {
        text-align: center;
        max-width: 100%;
        span {
          color: #ff1a80;
        }
      }

      p {
        max-width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
