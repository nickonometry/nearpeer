<template>
  <div>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <section class="enrollment-rate">
      <div class="enrollment-rate__grid">
        <p class="callout">Nearpeer users are over 6 times more likely to enroll</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          adipisci facilis exercitationem praesentium sequi tempora, laboriosam
          maxime unde quas aut soluta, placeat vel. Autem dolor minus
          accusantium inventore neque. Obcaecati!
        </p>
        <img src="https://via.placeholder.com/400x400" />
      </div>
    </section>
    <CallToAction />
  </div>
</template>

<script>
import CallToAction from "../components/CallToAction";
export default {
  components: {
    CallToAction
  }
};
</script>

<style lang="scss" scoped>
.enrollment-rate {
  padding: 100px;

  &__grid {
    display: grid;
    grid-template-columns: 2fr 4fr 4fr;
    gap: 64px;

    .callout {
      font-size: 32px;
      color: #4611a9;
    }

    img {
      justify-self: center;
      width: 100%;
    }
  }
}
</style>
