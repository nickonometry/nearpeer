<template>
  <section class="covid">
    <v-dialog v-model="dialog" max-width="900px" width="90%" scrollable="true">
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
      <v-card height="auto">
        <div class="covidlettah">
          <div class="letterheader">
            <img src="/images/nearpeer_logo.svg" />
            <div class="letright">
              <a href="/contact">Click here to contact us</a>
            </div>
          </div>
          <h2>RE: COVID-19 and ENROLLMENT CONTIGENCY PLANNING</h2>
          <div class="letterbody">
            <p>March 17, 2020</p>
            <p>Dear Higher Education Leaders</p>
            <p>Like you, the safety of students and staff is our highest concern. We also realize that uncertainty re: COVID-19 is challenging as it relates to your summer orientation and Fall 2020 class size. Nearpeer can help you get in front of this issue.</p>
            <p>Nearpeer fills an important void in student-to-student engagement that is missing when your events move online or are streamed (e.g., Zoom, Facebook Live). With Nearpeer, the result is higher enrollment.</p>
            <p
              class="quote"
            >"Especially in this unprecedented time of COVID-19, Nearpeer is critical to ensure our incoming students stay committed for the Fall."</p>
            <p
              class="quotefrom"
            >Brandon Wright, AVP, Enrollment Management at Southern Utah University</p>
            <p>Nearpeer is unlike anything you’re doing today. Incoming students love using it to find, connect, and engage with classmates – which is even more important if they can’t come to campus. This creates a sense of belonging, inclusion, and community. That’s why students who use Nearpeer are 6X more likely to enroll.</p>
            <p>We know results matter and, as a leader, you’re likely under unprecedented pressure right now. That’s why we guarantee results - and we make rollout fast and easy. Really.</p>
            <p>
              Interested in learning more?
              <a href="/contact">Drop us a message here</a>. We’ll respond quick and respect you time. Be safe.
            </p>
            <p>Best regards,</p>
            <img class="dustinsig" src="~assets/images/dustinsig.svg" />
            <p>
              Dustin Manocha
              <br />Founder &amp; CEO
              <br />Nearpeer, Inc.
            </p>
          </div>
        </div>
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
.covidlettah {
  background-color: #fff;
  padding: 20px 10px;
  .letterheader {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 50px;
    img {
      width: 200px;
      max-width: 50%;
    }
    .letright {
    }
  }
  h2 {
    text-align: center;
    margin-bottom: 25px;
  }
  .letterbody {
    padding: 0 5%;
    .quote {
      color: #4611a9;
      font-style: italic;
      font-weight: bold;
      text-align: center;
      max-width: 75%;
      margin: 20px auto 15px;
    }
    .quotefrom {
      color: #4611a9;
      font-style: italic;
      font-weight: bold;
      text-align: right;
      font-size: 13px;
      max-width: 95%;
    }
    .dustinsig {
      width: 230px;
    }
  }
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