

<template>
  <section>
    <div class="carousel-container">
      <v-btn class="mx-4" fab color="primary" @click="prev">
        <v-icon dark>mdi-chevron-left</v-icon>
      </v-btn>
      <v-card flat tile width="100%">
        <v-window v-model="onboarding" reverse>
          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/lsu.png" />
              <div class="right">
                <p>Higher enrollment through peer engagement, powered by Nearpeer</p>
                <span>Including</span>
                <ul>
                  <li>Out-of-state</li>
                  <li>First-generation</li>
                  <li>Under-represented</li>
                  <li>While helping LSU have a small school feel</li>
                </ul>
              </div>
            </div>
          </v-window-item>
          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/suu.png" />
              <div class="right">
                <p>“Nearpeer reduced our melt with out-of-state students, and other high-melt populations.</p>

                <p>
                  Our students using Nearpeer are much more likely to enroll. That’s why I want every incoming student to
                  use it.”
                </p>
                <p class="quote-author">
                  Brandon Wright AVP,
                  <br />Enrollment Management Southern Utah University
                </p>
              </div>
            </div>
          </v-window-item>
          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/umo.png" />
              <div class="right">
                <p>Higher enrollment & outcomes with Nearpeer</p>
                <p>↑ yield ↓melt ↑ persistence</p>
                <p>$1+ million lift in tuition revenue</p>
              </div>
            </div>
          </v-window-item>
          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/rnl.png" />
              <div class="right">
                <p>
                  Ruffalo Noel Levitz & Nearpeer
                  form strategic partnership to improve enrollment yield & reduce melt
                </p>

                <p>
                  New for 2020, Nearpeer powers
                  RNL’s melt prevention solution
                </p>
              </div>
            </div>
          </v-window-item>
          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/contact.png" />
              <div class="right">
                <p>
                  There’s still time to increase
                  your 2020 class with Nearpeer!
                </p>

                <p>
                  Easy to rollout, effective, guaranteed
                  to reduce melt and improve yield
                </p>

                <p>Contact us today</p>
              </div>
            </div>
          </v-window-item>
          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/logo.png" />
              <div class="right">
                <p>Protect your incoming class today</p>

                <p>Nearpeer accelerates incoming students’ connection & commitment to your institution</p>

                <p>A strong defense against increased poaching from the 2020 NACAC changes</p>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </v-card>
      <v-btn class="mx-4" fab color="primary" @click="next">
        <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <v-divider></v-divider>
  </section>
</template>

<script>
export default {
  data: () => ({
    length: 6,
    onboarding: 0
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 1024px;
  height: 456px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .slide-container {
    height: 310px;
  }

  .carousel-inner {
    display: grid;
    grid-template-columns: 450px auto;
    gap: 56px;
    align-items: center;
    font-size: 18px;

    .right {
      p {
        font-size: 18px;
        line-height: 28px;
      }

      ul li {
        font-size: 16px;
        line-height: 32px;
      }

      .quote-author {
        font-size: 16px;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .carousel-container {
    .slide-container {
      height: 310px;
    }
    .carousel-inner {
      grid-template-columns: 1fr;
    }
  }
}
</style>
