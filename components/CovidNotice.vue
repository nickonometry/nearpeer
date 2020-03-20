<template>
  <section class="covid">
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
      <img src="~assets/images/covid-19-solution.jpg" />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
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