<template>
  <section class="covid">
    <v-dialog v-model="dialog" max-width="800px" width="90%" scrollable="true">
      <template v-slot:activator="{ on }">
        <div class="covidcontainer">
          <div class="leftie">
            <h3>
              New students can't come to campus?
              <br />Nearpeer fills the void.
            </h3>
            <p>"Especially in this unprecedented time of COVID-19, Nearpeer is critical to ensure our incoming students stay committed to the fall."</p>
            <h6>
              -Brandon Wright, AVP, Enrollment Management
              <br />Southern Utah University
            </h6>
          </div>
          <img src="~assets/images/covid-19-solution.jpg" v-on="on" />
        </div>
      </template>

      <!-- <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>-->
      <v-card height="auto">
        <img class="covidletter" src="~assets/images/lettercovid.png" />
      </v-card>
    </v-dialog>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
<style lang="scss" scoped>
.covidletter {
  width: 100%;
  height: auto;
}
.covid {
  .covidcontainer {
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftie {
      max-width: 400px;
      margin-right: 15px;
      h3 {
        font-size: 22px;
      }
      p {
        padding: 20px 0 0px;
        font-weight: 700;
      }
      h6 {
        color: #ff1a80;
        font-size: 12px;
      }
    }
    img {
      max-width: 360px;
      padding-right: 15px;
      cursor: pointer;
    }
    @media only screen and (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
      .leftie,
      img {
        width: 100%;
        max-width: 400px;
        margin: 0;
        padding: 0px;
      }
      img {
        padding-top: 20px;
      }
    }
  }
}
</style>