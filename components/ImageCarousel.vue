

<template>
  <section>
    <div class="carousel-container">
      <v-btn class="mx-4" fab color="primary" @click="prev">
        <v-icon dark>mdi-chevron-left</v-icon>
      </v-btn>
      <v-card flat tile width="100%">
        <v-window v-model="onboarding" reverse>
          <v-window-item v-for="n in length" :key="`card-${n}`">
            <div class="carousel-inner">
              <img src="/images/homepage-slider/lsu.png" />
              <div class="right">
                <h3>Higher enrollment through peer engagement, powered by Nearpeer</h3>
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
    length: 3,
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

  .carousel-inner {
    display: grid;
    grid-template-columns: 450px auto;
    gap: 56px;
    align-items: center;

    .right {
      h3 {
        margin: 0 0 16px 0;
      }

      ul li {
        font-size: 16px;
        line-height: 32px;
      }
    }
  }
}
</style>
