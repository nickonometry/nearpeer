

<template>
  <section>
    <div class="carousel-container">
      <v-btn
        class="mx-4 prev-button"
        fab
        color="primary"
        @click="prev"
        aria-label="View the previous slide"
      >
        <v-icon dark>mdi-chevron-left</v-icon>
      </v-btn>
      <v-card flat width="100%">
        <v-window v-model="onboarding" continuous>
          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/lsu.jpg" alt="Lousiana State University" />
              <div class="right">
                <p class="heading">Higher enrollment through peer engagement, powered by Nearpeer</p>
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
              <img src="/images/homepage-slider/time.jpg" alt="Contact us today" />
              <div class="right">
                <p class="heading">
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
              <img src="/images/homepage-slider/suu.jpg" alt="Southern Utah University Logo" />
              <div class="right">
                <p
                  class="heading"
                >“Nearpeer reduced our melt with out-of-state students, and other high-melt populations.</p>

                <p>
                  Our students using Nearpeer are much more likely to enroll. That’s why I want every incoming student to
                  use it.”
                </p>
                <p class="quote-author">
                  Brandon Wright
                  <br />AVP, Enrollment Management
                  <br />Southern Utah University
                </p>
              </div>
            </div>
          </v-window-item>
          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/rnl.jpg" alt="Ruffalo Noel Levitz logo" />
              <div class="right">
                <p class="heading">
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
              <img src="/images/homepage-slider/umo.jpg" alt="University of Maine Logo" />
              <div class="right">
                <p class="heading">Higher enrollment & outcomes with Nearpeer</p>
                <p style="display: flex; align-items: center;">
                  <v-icon>mdi-arrow-up-bold</v-icon>yield
                  <v-icon>mdi-arrow-down-bold</v-icon>melt
                  <v-icon>mdi-arrow-up-bold</v-icon>persistence
                </p>
                <p>$1+ million lift in tuition revenue</p>
              </div>
            </div>
          </v-window-item>

          <v-window-item class="slide-container">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/protection.jpg" alt="Nearpeer logo" />
              <div class="right">
                <p class="heading">Protect your incoming class today</p>

                <p>Nearpeer accelerates incoming students’ connection & commitment to your institution</p>

                <p>A strong defense against increased poaching from the 2020 NACAC changes</p>
              </div>
            </div>
          </v-window-item>
        </v-window>
      </v-card>
      <v-btn
        class="mx-4 next-button"
        fab
        color="primary"
        @click="next"
        aria-label="View the next slide"
      >
        <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    length: 6,
    onboarding: 0,
    autorun: true
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
  },
  created() {
    setInterval(() => {
      if (!this.autorun) return;
      if (++this.onboarding >= this.length) this.onboarding = 0;
    }, 5000);
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

    img {
      max-width: 450px;
    }

    .right {
      .heading {
        font-size: 18px;
        font-weight: bold;
      }
      p {
        font-size: 18px;
        line-height: 28px;

        span {
          font-weight: 900;
          font-size: 24px;
        }
      }

      ul li {
        font-size: 16px;
        line-height: 32px;
      }

      .quote-author {
        font-size: 15px;
        line-height: 15px;
        font-style: italic;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .prev-button,
  .next-button {
    display: none;
  }
  .carousel-container {
    width: 100vw;
    height: 100%;
    padding: 24px;

    .slide-container {
      height: 100%;
    }
    .carousel-inner {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      justify-content: center;
      justify-items: center;
      gap: 16px;

      img {
        width: 100%;
      }

      .right {
        text-align: center;

        ul li {
          list-style: none;
        }
      }
    }
  }
}
</style>
