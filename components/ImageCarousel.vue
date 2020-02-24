

<template>
  <section>
    <div class="carousel-container">
      <v-btn class="mx-2" fab small color="primary" @click="prev">
        <v-icon dark>mdi-chevron-left</v-icon>
      </v-btn>
      <v-card flat tile width="100%">
        <v-window v-model="onboarding" reverse>
          <v-window-item v-for="n in length" :key="`card-${n}`">
            <v-card color="grey" height="320">
              <v-row class="fill-height" align="center" justify="center" tag="v-card-text">
                <h1 style="font-size: 5rem;" class="white--text">Slide {{ n }}</h1>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card>
      <v-btn class="mx-2" fab small color="primary" @click="next">
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
}
</style>
